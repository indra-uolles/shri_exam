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

    var j0 = [ 0, 'sel_number' ];

    // func display_menu_elem(link, title, num) : xml
    M.f0 = function f0(m, c0, i0, l0, a0, v0, v1, v2) {
        var r0 = '';

        r0 += closeAttrs(a0);
        if ((cmpSN(( v2 ), selectNametest('sel_number', c0, [])))) {
            r0 += scalar2xml( v1 );
        } else {
            r0 += "<a href=\"" + scalar2attrvalue( ( v0 ) ) + "\">";
            r0 += scalar2xml( v1 );
            r0 += "</a>";
        }

        return r0;
    };

    var j1 = [ ];

    // match /
    M.t0 = function t0(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<p>";
        r0 += "<div class=\"" + "horiz-menu-item-small" + "\">";
        r0 += "Докладчики по темам:";
        r0 += "</div>";
        r0 += "<div class=\"" + "horiz-menu-item-small" + "\">";
        r0 += m.f('f0', c0, i0, l0, a0, "#", "Все", 1);
        r0 += "</div>";
        r0 += "<div class=\"" + "horiz-menu-item-small" + "\">";
        r0 += m.f('f0', c0, i0, l0, a0, "#", "Инструменты", 2);
        r0 += "</div>";
        r0 += "<div class=\"" + "horiz-menu-item-small" + "\">";
        r0 += m.f('f0', c0, i0, l0, a0, "#", "Технологии", 3);
        r0 += "</div>";
        r0 += "<div class=\"" + "horiz-menu-item-small" + "\">";
        r0 += m.f('f0', c0, i0, l0, a0, "#", "Языки", 4);
        r0 += "</div>";
        r0 += "<div class=\"" + "horiz-menu-item-small" + "\">";
        r0 += m.f('f0', c0, i0, l0, a0, "#", "Дизайн", 5);
        r0 += "</div>";
        r0 += "<div class=\"" + "horiz-menu-item-small" + "\">";
        r0 += m.f('f0', c0, i0, l0, a0, "#", "Фреймворки", 6);
        r0 += "</div>";
        r0 += "</p>";

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

    yr.register('lectors_filter', M);

})();
