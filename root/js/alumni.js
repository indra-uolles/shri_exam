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

    // func display_photo() : xml
    M.f0 = function f0(m, c0, i0, l0, a0) {
        var r0 = '';

        function p0(m, c0, i0, l0) {
            return 0;
        }

        var j0 = [ 1, 0, 3, 0, 0, 'link_photo' ];

        r0 += closeAttrs(a0);
        if (nodeset2boolean( (m.s(j0, c0)) )) {
            function p1(m, c0, i0, l0) {
                return 0;
            }

            var j1 = [ 1, 0, 3, 0, 0, 'link_photo' ];

            r0 += "<img src=\"" + nodeset2attrvalue( ( m.s(j1, c0) ) ) + "\" class=\"" + "people-photo box" + "\"/>";
        } else {
            r0 += "<img src=\"" + "./img/lectors/no_photo.png" + "\" class=\"" + "people-photo box" + "\"/>";
        }

        return r0;
    };

    // func display_link(link, img) : xml
    M.f1 = function f1(m, c0, i0, l0, a0, v0, v1) {
        var r0 = '';

        r0 += closeAttrs(a0);
        if ((v0)) {
            r0 += "<a href=\"" + scalar2attrvalue( ( v0 ) ) + "\"><img src=\"" + scalar2attrvalue( ( v1 ) ) + "\" class=\"" + "icon" + "\"/></a>";
        }

        return r0;
    };

    // func display_vk() : xml
    M.f2 = function f2(m, c0, i0, l0, a0) {
        var r0 = '';

        function p2(m, c0, i0, l0) {
            return 0;
        }

        var j2 = [ 1, 0, 3, 0, 0, 'link_vk' ];

        r0 += closeAttrs(a0);
        if (nodeset2boolean( (m.s(j2, c0)) )) {
            function p3(m, c0, i0, l0) {
                return 0;
            }

            var j3 = [ 1, 0, 3, 0, 0, 'link_vk' ];

            r0 += "<a href=\"" + nodeset2attrvalue( ( m.s(j3, c0) ) ) + "\"><img src=\"" + "./img/vk.png" + "\" class=\"" + "icon" + "\"/></a>";
        }

        return r0;
    };

    // func display_facebook() : xml
    M.f3 = function f3(m, c0, i0, l0, a0) {
        var r0 = '';

        function p4(m, c0, i0, l0) {
            return 0;
        }

        var j4 = [ 1, 0, 3, 0, 0, 'link_facebook' ];

        r0 += closeAttrs(a0);
        if (nodeset2boolean( (m.s(j4, c0)) )) {
            function p5(m, c0, i0, l0) {
                return 0;
            }

            var j5 = [ 1, 0, 3, 0, 0, 'link_facebook' ];

            r0 += "<a href=\"" + nodeset2attrvalue( ( m.s(j5, c0) ) ) + "\"><img src=\"" + "./img/facebook.png" + "\" class=\"" + "icon" + "\"/></a>";
        }

        return r0;
    };

    // func display_github() : xml
    M.f4 = function f4(m, c0, i0, l0, a0) {
        var r0 = '';

        function p6(m, c0, i0, l0) {
            return 0;
        }

        var j6 = [ 1, 0, 3, 0, 0, 'link_gihub' ];

        r0 += closeAttrs(a0);
        if (nodeset2boolean( (m.s(j6, c0)) )) {
            function p7(m, c0, i0, l0) {
                return 0;
            }

            var j7 = [ 1, 0, 3, 0, 0, 'link_gihub' ];

            r0 += "<a href=\"" + nodeset2attrvalue( ( m.s(j7, c0) ) ) + "\"><img src=\"" + "./img/github.png" + "\" class=\"" + "icon" + "\"/></a>";
        }

        return r0;
    };

    // func display_about() : xml
    M.f5 = function f5(m, c0, i0, l0, a0) {
        var r0 = '';

        function p8(m, c0, i0, l0) {
            return 0;
        }

        var j8 = [ 1, 0, 3, 0, 0, 'first_name' ];

        var j9 = [ 1, 0, 3, 0, 0, 'last_name' ];

        var j10 = [ 1, 0, 3, 0, 0, 'about' ];

        r0 += closeAttrs(a0);
        r0 += "<h2>";
        r0 += nodeset2xml( ( m.s(j8, c0) ) ) + " " + nodeset2xml( ( m.s(j9, c0) ) );
        r0 += "</h2>";
        r0 += nodeset2xml( ( m.s(j10, c0) ) );

        return r0;
    };

    // func display_alumni() : xml
    M.f6 = function f6(m, c0, i0, l0, a0) {
        var r0 = '';

        function p9(m, c0, i0, l0) {
            return 0;
        }

        var j11 = [ 1, 0, 3, 0, 0, 'first_name' ];

        var j12 = [ 1, 0, 3, 0, 0, 'last_name' ];

        r0 += closeAttrs(a0);
        r0 += "<p>";
        r0 += "<a href=\"" + "#" + "\">" + "Все выпускники &gt; " + "</a>";
        r0 += nodeset2xml( ( m.s(j11, c0) ) ) + " " + nodeset2xml( ( m.s(j12, c0) ) );
        r0 += "</p>";
        r0 += "<div class=\"" + "alumni-container" + "\">";
        r0 += m.f('f0', c0, i0, l0, a0);
        r0 += "<p class=\"" + "icons-container" + "\">";
        r0 += m.f('f2', c0, i0, l0, a0);
        r0 += m.f('f3', c0, i0, l0, a0);
        r0 += m.f('f4', c0, i0, l0, a0);
        r0 += "</p>";
        r0 += "</div>";
        r0 += m.f('f5', c0, i0, l0, a0);

        return r0;
    };

    var j13 = [ ];

    // match /
    M.t0 = function t0(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f6', c0, i0, l0, a0);

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

    yr.register('alumni', M);

})();
