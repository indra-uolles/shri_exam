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

    var j0 = [ 0, 'item', 0, 'photo_url' ];

    // func display_photo() : xml
    M.f0 = function f0(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        if (nodeset2boolean( (m.s(j0, c0)) )) {
            r0 += "<img src=\"" + nodeset2attrvalue( ( m.s(j0, c0) ) ) + "\" class=\"" + "people-photo box" + "\"/>";
        } else {
            r0 += "<img src=\"" + "./img/lectors/no_photo.png" + "\" class=\"" + "people-photo box" + "\"/>";
        }

        return r0;
    };

    var j1 = [ ];

    var j2 = [ 0, '*' ];

    var j3 = [ 0, 'item', 0, 'name' ];

    // match /
    M.t0 = function t0(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<ul class=\"" + "people" + "\" id=\"" + "people" + "\">";
        var items0 = selectNametest('*', c0, []);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            r0 += "<a class=\"" + "people-sticker" + "\" href=\"" + "#" + "\">";
            r0 += m.f('f0', c1, i1, l1, a0);
            r0 += "<p class=\"" + "yandex" + "\">";
            r0 += nodeset2xml( ( m.s(j3, c1) ) );
            r0 += "</p>";
            r0 += "</a>";
        }
        r0 += "</ul>";

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

    yr.register('lectors', M);

})();
