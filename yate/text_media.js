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

    var j0 = [ 0, '*' ];

    var j1 = [ 1, 0 ];

    // func display_list() : xml
    M.f0 = function f0(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<ul>";
        var items0 = selectNametest('*', c0, []);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            if ((i1 > 0)) {
                r0 += "<li>" + nodeset2xml( ( m.s(j1, c1) ) ) + "</li>";
            }
        }
        r0 += "</ul>";

        return r0;
    };

    var j2 = [ 0, 'elem' ];

    var j3 = [ 0, 'content' ];

    // func display_element() : xml
    M.f1 = function f1(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        if ((cmpSN("p", selectNametest('elem', c0, [])))) {
            r0 += "<p>" + " " + nodeset2xml( ( selectNametest('content', c0, []) ) ) + " " + "</p>";
        } else {
            if ((cmpSN("unordered_list", selectNametest('elem', c0, [])))) {
                r0 += m.f('f0', c0, i0, l0, a0);
            }
        }

        return r0;
    };

    var j4 = [ ];

    var j5 = [ 0, 'text' ];

    var j6 = [ 0, 'width' ];

    var j7 = [ 0, 'height' ];

    var j8 = [ 0, 'link' ];

    // match /
    M.t0 = function t0(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "half-page" + "\">";
        var items0 = selectNametest('text', c0, []);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            r0 += m.f('f1', c1, i1, l1, a0);
        }
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
