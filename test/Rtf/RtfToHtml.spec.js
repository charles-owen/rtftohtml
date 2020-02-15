import {RtfToHtml} from '../../src/RtfToHtml';

describe('RtfToHtml', function() {

    it('WithColor', function() {
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


    it('VisualStudioError', function() {
        const h = new RtfToHtml();
        expect(0).toBe(0);

        const rtf2 = '{\\rtf\\ansi\\ansicpg1252\\deff0\\nouicompat\\deflang1033{\\fonttbl{\\f0\\fswiss\\fprq2\\fcharset0 Segoe UI;}}{\\colortbl;\\red0\\green0\\blue0;\\red127\\green127\\blue127;}\n' +
            '\\trowd\\trgaph108\\trleft5\\trautofit1\\trrh200\\trbrdrl\\brdrs\\brdrw10 \\trbrdrt\\brdrs\\brdrw10 \\trbrdrr\\brdrs\\brdrw10 \\trbrdrb\\brdrs\\brdrw10\n' +
            '\\clvertalc\\clbrdrl\\brdrw10\\brdrs\\brdrcf2\\clbrdrt\\brdrw10\\brdrs\\brdrcf2\\clbrdrr\\brdrw10\\brdrs\\brdrcf2\\clbrdrb\\brdrw10\\brdrs\\brdrcf2\\clftsWidth1\\cellx297\n' +
            '\\clvertalc\\clbrdrl\\brdrw10\\brdrs\\brdrcf2\\clbrdrt\\brdrw10\\brdrs\\brdrcf2\\clbrdrr\\brdrw10\\brdrs\\brdrcf2\\clbrdrb\\brdrw10\\brdrs\\brdrcf2\\clftsWidth1\\cellx869\n' +
            '\\clvertalc\\clbrdrl\\brdrw10\\brdrs\\brdrcf2\\clbrdrt\\brdrw10\\brdrs\\brdrcf2\\clbrdrr\\brdrw10\\brdrs\\brdrcf2\\clbrdrb\\brdrw10\\brdrs\\brdrcf2\\clftsWidth1\\cellx7497\n' +
            '\\clvertalc\\clbrdrl\\brdrw10\\brdrs\\brdrcf2\\clbrdrt\\brdrw10\\brdrs\\brdrcf2\\clbrdrr\\brdrw10\\brdrs\\brdrcf2\\clbrdrb\\brdrw10\\brdrs\\brdrcf2\\clftsWidth1\\cellx9214\n' +
            '\\clvertalc\\clbrdrl\\brdrw10\\brdrs\\brdrcf2\\clbrdrt\\brdrw10\\brdrs\\brdrcf2\\clbrdrr\\brdrw10\\brdrs\\brdrcf2\\clbrdrb\\brdrw10\\brdrs\\brdrcf2\\clftsWidth1\\cellx10931\n' +
            '\\clvertalc\\clbrdrl\\brdrw10\\brdrs\\brdrcf2\\clbrdrt\\brdrw10\\brdrs\\brdrcf2\\clbrdrr\\brdrw10\\brdrs\\brdrcf2\\clbrdrb\\brdrw10\\brdrs\\brdrcf2\\clftsWidth1\\cellx11331\n' +
            '\\clvertalc\\clbrdrl\\brdrw10\\brdrs\\brdrcf2\\clbrdrt\\brdrw10\\brdrs\\brdrcf2\\clbrdrr\\brdrw10\\brdrs\\brdrcf2\\clbrdrb\\brdrw10\\brdrs\\brdrcf2\\clftsWidth1\\cellx11903\n' +
            '\\pard\\intbl\\widctlpar\\f0\\fs18\n' +
            'Severity\\cell Code\\cell Description\\cell Project\\cell File\\cell Line\\cell Suppression State\\cell \\row\n' +
            '\\trowd\\trgaph108\\trleft5\\trautofit1\\trrh200\\trbrdrl\\brdrs\\brdrw10 \\trbrdrt\\brdrs\\brdrw10 \\trbrdrr\\brdrs\\brdrw10 \\trbrdrb\\brdrs\\brdrw10\n' +
            '\\clvertalc\\clbrdrl\\brdrw10\\brdrs\\brdrcf2\\clbrdrt\\brdrw10\\brdrs\\brdrcf2\\clbrdrr\\brdrw10\\brdrs\\brdrcf2\\clbrdrb\\brdrw10\\brdrs\\brdrcf2\\clftsWidth1\\cellx297\n' +
            '\\clvertalc\\clbrdrl\\brdrw10\\brdrs\\brdrcf2\\clbrdrt\\brdrw10\\brdrs\\brdrcf2\\clbrdrr\\brdrw10\\brdrs\\brdrcf2\\clbrdrb\\brdrw10\\brdrs\\brdrcf2\\clftsWidth1\\cellx869\n' +
            '\\clvertalc\\clbrdrl\\brdrw10\\brdrs\\brdrcf2\\clbrdrt\\brdrw10\\brdrs\\brdrcf2\\clbrdrr\\brdrw10\\brdrs\\brdrcf2\\clbrdrb\\brdrw10\\brdrs\\brdrcf2\\clftsWidth1\\cellx7497\n' +
            '\\clvertalc\\clbrdrl\\brdrw10\\brdrs\\brdrcf2\\clbrdrt\\brdrw10\\brdrs\\brdrcf2\\clbrdrr\\brdrw10\\brdrs\\brdrcf2\\clbrdrb\\brdrw10\\brdrs\\brdrcf2\\clftsWidth1\\cellx9214\n' +
            '\\clvertalc\\clbrdrl\\brdrw10\\brdrs\\brdrcf2\\clbrdrt\\brdrw10\\brdrs\\brdrcf2\\clbrdrr\\brdrw10\\brdrs\\brdrcf2\\clbrdrb\\brdrw10\\brdrs\\brdrcf2\\clftsWidth1\\cellx10931\n' +
            '\\clvertalc\\clbrdrl\\brdrw10\\brdrs\\brdrcf2\\clbrdrt\\brdrw10\\brdrs\\brdrcf2\\clbrdrr\\brdrw10\\brdrs\\brdrcf2\\clbrdrb\\brdrw10\\brdrs\\brdrcf2\\clftsWidth1\\cellx11331\n' +
            '\\clvertalc\\clbrdrl\\brdrw10\\brdrs\\brdrcf2\\clbrdrt\\brdrw10\\brdrs\\brdrcf2\\clbrdrr\\brdrw10\\brdrs\\brdrcf2\\clbrdrb\\brdrw10\\brdrs\\brdrcf2\\clftsWidth1\\cellx11903\n' +
            '\\pard\\intbl\\widctlpar\\f0\\fs18\n' +
            'Error\\cell LNK2001\\cell unresolved external symbol "public: virtual __thiscall CTile::~CTile(void)" (??1CTile@@UAE@XZ)\\cell Testing\\cell C:\\\\Users\\\\charl\\\\Documents\\\\Classes\\\\CSE335\\\\Visual Studio 2019\\\\Step4\\\\City-solution-ss20\\\\City\\\\Testing\\\\CTileTest.obj\\cell 1\\cell \\cell \\row\n' +
            '}';

        let html = h.convert(rtf2);
        console.log(html);
    });


});
