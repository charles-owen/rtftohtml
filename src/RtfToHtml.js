

export const RtfToHtml = function(options) {
    if(options === undefined) {
        options = {};
    }

    let rtf = '';
    let index = 0;

    this.rtfVersion = 1;
    this.defaultFont = 0;

    this.colors = [{red: 0, grn: 0, blu: 0}];

    let paragraph = '';
    let body = '';
    let html = '';
    let inSpan = false;
    let lastCh = '.';

    this.convert = (_rtf) => {
        reset();

        rtf = _rtf;
        index = 0;

        paragraph = '';

        parse();

        endParagraph(true);
        html = body;

        return html;
    }

    const reset = () => {
        this.rtfVersion = 1;
        this.defaultFont = 0;
        this.colors = [{red: 0, grn: 0, blu: 0}];

        paragraph = '';
        body = '';
        html = '';
        inSpan = false;
    }


    function parse() {
        while(index < rtf.length) {
            const ch = rtf[index];
            index++;

            if(ch < ' ') {
                // Ignore control characters
                continue;
            }

            switch(ch) {
                case '{':
                    startGroup();
                    break;

                case '}':
                    endGroup();
                    break;

                case '\\':
                    controlWord();
                    break;

                default:
                    character(ch);
                    break;
            }


        }
    }

    function startGroup() {

    }

    function endGroup() {

    }

    function controlWord() {
        if(index < rtf.length) {
            ch = rtf[index];

            switch(ch) {
                case '{':
                    character('{');
                    return;

                case '}':
                    character('}');
                    return;

                case '\\':
                    character('\\');
                    return;
            }
        }

        let cw = '';
        let param = '';

        // Accumulate the control word
        let ch;
        for( ; index < rtf.length;  index++) {
            ch = rtf[index];

            if(ch >= 'a' && ch <= 'z') {
                cw += ch;
            } else {
                break;
            }
        }

        // Test delimiter
        if(ch === ' ') {
            // Control word is done
            index++;
            doControlWord(cw, param);
            return;
        }

        if(ch === '\\') {
            // Control word is done
            doControlWord(cw, param);
            return;
        }

        if(ch >= '0' && ch <= '9') {
            // Numbers
            for( ; index < rtf.length;  index++) {
                ch = rtf[index];

                if(ch >= '0' && ch <= '9') {
                    param += ch;
                } else if(ch === ' ') {
                    index++;
                    doControlWord(cw, param);
                    return;
                } else {
                    doControlWord(cw, param);
                    return;
                }
            }
        }

        if(cw.length > 0) {
            doControlWord(cw, param);
        }

    }

    let doControlWord = (cw, param) => {
        //console.log("Control word: " + cw + ": " + param);

        switch(cw) {
            case 'rtf':
                this.rtfVersion = +param;
                break;

            case 'ansi':
                break;

            case 'deff':
                this.defaultFont = +param;
                break;

            case 'colortbl':
                colorTable();
                break;

            case 'fonttbl':
                fontTable();
                break;

            case 'line':
                lineBreak();
                break;

            case 'par':
                endParagraph();
                break;

            case 'cf':
                color(+param);
                break;

            default:
                // console.log('Unknown control word ' + cw + ": " + param );
                break;
        }
    }

    let lineBreak = () => {
        paragraph += '<br>';
        lastCh = '.';
    }

    let endParagraph = (force) => {
        endSpan();

        if(force || paragraph.length > 0) {
            body += '<p>' + paragraph + '</p>';
            paragraph = '';
        }

        lastCh = '.';
    }

    let color = (index) => {
        endSpan();
        if(index == 0) {
            return;
        }

        let clr = index < this.colors.length ? this.colors[index] : {red: 0, grn: 0, blu: 0};

        let code = '#' + toHex2(clr.red) + toHex2(clr.grn) + toHex2(clr.blu);

        paragraph += '<span style="color:' + code + '">';
        inSpan = true;
    }

    let endSpan = () => {
        if(inSpan) {
            paragraph += '</span>';
            inSpan = false;
        }
    }

    function toHex2(value) {
        let hex = value.toString(16);
        if(hex.length < 2) {
            hex = '0' + hex;
        }

        return hex;
    }

    /**
     * We have the beginning of a color table.
     */
    let colorTable = () => {
        this.colors = [];

        let color = {red: 0, grn: 0, blu: 0};

        for( ; index < rtf.length; ) {
            if(rtf[index] === ';') {
                // End of a color definition'
                this.colors.push(color);
                color = {red: 0, grn: 0, blu: 0};
                index++;
            } else if(rtf[index] === '}') {
                break;     // We are done
            } else if(rtf.substr(index, 4) === '\\red') {
                index += 4;
                color.red = parseInt();
            } else if(rtf.substr(index, 6) === '\\green') {
                index += 6;
                color.grn = parseInt();
            } else if(rtf.substr(index, 5) === '\\blue') {
                index += 5;
                color.blu = parseInt();
            }
        }
    }

    let fontTable = () => {
        for( ; index < rtf.length; index++) {
            if(rtf[index] === '}') {
                return;
            }
        }
    }

    /**
     * Parse an integer value from the input stream, moving index
     * to the location after the number.
     * @returns {number}
     */
    let parseInt = () => {

        let value = 0;
        let mult = 1;
        for(; index < rtf.length;  index++) {
            const ch = rtf[index];
            if(ch >= '0' && ch <= '9') {
                value = value * 10 + +ch;
            } else if(ch === '-') {
                mult *= -1;
            } else {
                return value * mult;
            }
        }

        return value * mult;
    }

    let character = (ch) => {
        switch(ch) {
            case ' ':
                if(lastCh === ' ') {
                    paragraph += '&nbsp;';
                } else {
                    paragraph += ch;
                }
                break;

            case '<':
                paragraph += '&lt;';
                break;

            case '>':
                paragraph += '&gt;';
                break;

            case '&':
                paragraph += '&amp;';
                break;

            default:
                paragraph += ch;
                break;
        }



        lastCh = ch;
    }
}