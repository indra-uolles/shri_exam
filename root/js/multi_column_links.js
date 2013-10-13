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

    var j0 = [ 0, 'link' ];

    var j1 = [ 0, 'id' ];

    var j2 = [ 0, 'title' ];

    var j3 = [ 0, 'type' ];

    var j4 = [ 0, 'content' ];

    // func display_element() : xml
    M.f0 = function f0(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        if ((cmpSN("header", selectNametest('type', c0, [])))) {
            r0 += "<h4>" + nodeset2xml( ( selectNametest('content', c0, []) ) ) + "</h4>";
        } else {
            r0 += "<p><a href=\"" + nodeset2attrvalue( ( selectNametest('link', c0, []) ) ) + "\" id=\"" + nodeset2attrvalue( ( selectNametest('id', c0, []) ) ) + "\" class=\"" + "one-lecture" + "\">" + nodeset2xml( ( selectNametest('title', c0, []) ) ) + "</a></p>";
        }

        return r0;
    };

    var j5 = [ ];

    var j6 = [ 0, 'item' ];

    var j7 = [ 0, '*' ];

    // match /
    M.t0 = function t0(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        var items0 = selectNametest('item', c0, []);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            r0 += "<div class=\"" + "one-multi-col" + "\">";
            var items1 = selectNametest('*', c1, []);
            for (var i2 = 0, l2 = items1.length; i2 < l2; i2++) {
                var c2 = items1[ i2 ];
                r0 += m.f('f0', c2, i2, l2, a0);
            }
            r0 += "</div>";
        }

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

    yr.register('multi_column_links', M);

})();
