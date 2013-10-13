var yr = yr || require('yate/lib/runtime.js');

(function() {

    var cmpNN = yr.cmpNN;
    var cmpSN = yr.cmpSN;
    var nodeset2xml = yr.nodeset2xml;
    var nodeset2boolean = yr.nodeset2boolean;
    var nodeset2attrvalue = yr.nodeset2attrvalue;
    var nodeset2scalar = yr.nodeset2scalar;
    var scalar2attrvalue = yr.scalar2attrvalue;
    var xml2attrvalue = yr.xml2attrvalue;
    var scalar2xml = yr.scalar2xml;
    var xml2scalar = yr.xml2scalar;
    var simpleScalar = yr.simpleScalar;
    var simpleBoolean = yr.simpleBoolean;
    var selectNametest = yr.selectNametest;
    var closeAttrs = yr.closeAttrs;

    var M = new yr.Module();

    var j0 = [ ];

    var j1 = [ 0, 'text' ];

    var j2 = [ 0, 'width' ];

    var j3 = [ 0, 'height' ];

    var j4 = [ 0, 'link' ];

    // match /
    M.t0 = function t0(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "half-page" + "\">";
        r0 += nodeset2xml( ( selectNametest('text', c0, []) ) );
        r0 += "</div>";
        r0 += "<div class=\"" + "half-page" + "\">";
        r0 += "<div class=\"" + "shift-down-20" + "\">";
        r0 += "<iframe width=\"" + nodeset2attrvalue( ( selectNametest('width', c0, []) ) ) + "\" height=\"" + nodeset2attrvalue( ( selectNametest('height', c0, []) ) ) + "\" frameborder=\"" + "0" + "\" src=\"" + nodeset2attrvalue( ( selectNametest('link', c0, []) ) ) + "\"></iframe>";
        r0 += "</div>";
        r0 += "</div>";

        return r0;
    };
    M.t0.j = 1;
    M.t0.a = 1;

    M.matcher = {
        "": {
            "": [
                "t0"
            ]
        }
    };
    M.imports = [];

    yr.register('text_media', M);

})();
