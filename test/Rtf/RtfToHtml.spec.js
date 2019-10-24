import {RtfToHtml} from '../../src/RtfToHtml';

describe('RtfToHtml', function() {

    it('Construct', function() {
        var h = new RtfToHtml();
        expect(0).toBe(0);

        const rtf1 = '{\\rtf1\\ansi\\deff0{\\colortbl;\\red0\\green0\\blue0;\\red255\\green0\\blue0;}\n' +
            'This line is the default color\\line\n' +
            '\\cf2\n' +
            'This line is red\\line\n' +
            '\\cf1\n' +
            'This line is the default color\n' +
            '}';

        let html = h.convert(rtf1);
        //console.log(html);

        const rtf2 = '{\\rtf\\ansi{\\fonttbl{\\f0 Consolas;}}{\\colortbl;\\red0\\green0\\blue255;\\red0\\green0\\blue0;\\red43\\green145\\blue175;\\red128\\green128\\blue128;\\red0\\green128\\blue128;}\\f0 \\fs19 \\cf1 \\cb0 \\highlight0 void\\cf2  \\cf3 CPictureObserver\\cf2 ::SetPicture(std::\\cf3 shared_ptr\\cf2 <\\cf3 CPicture\\cf2 > \\cf4 picture\\cf2 )\\par \\{\\par     mPicture \\cf5 =\\cf2  \\cf4 picture\\cf2 ;\\par     mPicture\\cf5 ->\\cf2 AddObserver(\\cf1 this\\cf2 );\\par \\}}\n';
        html = h.convert(rtf2);
        console.log(html);
    });

});
