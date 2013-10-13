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

        var j0 = [ 1, 0, 3, 0, 0, 'photo_url' ];

        r0 += closeAttrs(a0);
        if (nodeset2boolean( (m.s(j0, c0)) )) {
            function p1(m, c0, i0, l0) {
                return 0;
            }

            var j1 = [ 1, 0, 3, 0, 0, 'photo_url' ];

            r0 += "<img src=\"" + nodeset2attrvalue( ( m.s(j1, c0) ) ) + "\" class=\"" + "people-photo box" + "\"/>";
        } else {
            r0 += "<img src=\"" + "./img/lectors/no_photo.png" + "\" class=\"" + "people-photo box" + "\"/>";
        }

        return r0;
    };

    // func display_presentation() : xml
    M.f1 = function f1(m, c0, i0, l0, a0) {
        var r0 = '';

        function p2(m, c0, i0, l0) {
            return 0;
        }

        var j2 = [ 1, 0, 3, 0, 0, 'slides_url' ];

        r0 += closeAttrs(a0);
        if (nodeset2boolean( (m.s(j2, c0)) )) {
            function p3(m, c0, i0, l0) {
                return 0;
            }

            var j3 = [ 1, 0, 3, 0, 0, 'slides_url' ];

            r0 += "<iframe src=\"" + nodeset2attrvalue( ( m.s(j3, c0) ) ) + "\" width=\"" + "427" + "\" height=\"" + "356" + "\" frameborder=\"" + "0" + "\" marginwidth=\"" + "0" + "\" marginheight=\"" + "0" + "\" scrolling=\"" + "no" + "\" allowfullscreen=\"" + "true" + "\"></iframe>";
        } else {
            r0 += "Увы, но мы еще не загрузили презентацию. Скоро загрузим!";
        }

        return r0;
    };

    // func display_video() : xml
    M.f2 = function f2(m, c0, i0, l0, a0) {
        var r0 = '';

        function p4(m, c0, i0, l0) {
            return 0;
        }

        var j4 = [ 1, 0, 3, 0, 0, 'video_url' ];

        r0 += closeAttrs(a0);
        if (nodeset2boolean( (m.s(j4, c0)) )) {
            function p5(m, c0, i0, l0) {
                return 0;
            }

            var j5 = [ 1, 0, 3, 0, 0, 'video_storage' ];

            r0 += "<object type=\"" + "application/x-shockwave-flash" + "\" id=\"" + "flash" + "\" data=\"" + "//static.video.yandex.net/custom/" + "\" width=\"" + "1152" + "\" height=\"" + "331" + "\" style=\"" + "display: block !important;" + "\">";
            r0 += "<param name=\"" + "scale" + "\" value=\"" + "scale" + "\"/>";
            r0 += "<param name=\"" + "quality" + "\" value=\"" + "high" + "\"/>";
            r0 += "<param name=\"" + "bgcolor" + "\" value=\"" + "#000000" + "\"/>";
            r0 += "<param name=\"" + "allowfullscreen" + "\" value=\"" + "true" + "\"/>";
            r0 += "<param name=\"" + "allowscriptaccess" + "\" value=\"" + "always" + "\"/>";
            r0 += "<param name=\"" + "wmode" + "\" value=\"" + "opaque" + "\"/>";
            r0 += "<param name=\"" + "flashvars" + "\" value=\"" + "login=ya-events&amp;storage_directory=" + nodeset2attrvalue( ( m.s(j5, c0) ) ) + "&amp;autostart=no&amp;tnsCount=0&amp;is-hq=true&amp;has-hq=true&amp;show-info=false&amp;show-quality=true&amp;show-logo=false" + "\"/>";
            r0 += "</object>";
        } else {
            r0 += "Увы, но мы еще не загрузили видео. Скоро загрузим!";
        }

        return r0;
    };

    // func display_element() : xml
    M.f3 = function f3(m, c0, i0, l0, a0) {
        var r0 = '';

        function p6(m, c0, i0, l0) {
            return 0;
        }

        var j6 = [ 1, 0, 3, 0, 0, 'name' ];

        var j7 = [ 1, 0, 3, 0, 0, 'teacher_name' ];

        r0 += closeAttrs(a0);
        r0 += "<p>";
        r0 += "<a href=\"" + "#" + "\" class=\"" + "page_lectures" + "\">" + "Программа(все лекции) &gt; " + "</a>";
        r0 += nodeset2xml( ( m.s(j6, c0) ) );
        r0 += "</p>";
        r0 += "<h3>" + nodeset2xml( ( m.s(j6, c0) ) ) + "</h3>";
        r0 += "<div class=\"" + "teacher-container" + "\">";
        r0 += "<a class=\"" + "people-sticker-inner" + "\" href=\"" + "#" + "\">";
        r0 += m.f('f0', c0, i0, l0, a0);
        r0 += "<p class=\"" + "yandex" + "\">" + nodeset2xml( ( m.s(j7, c0) ) ) + "</p></a>";
        r0 += "</div>";
        r0 += "<div>";
        r0 += "<div class=\"" + "horiz-menu" + "\">";
        r0 += "<div class=\"" + "horiz-menu-item" + "\">";
        r0 += "<a id=\"" + "show_hide_present" + "\" href=\"" + "#" + "\">" + "Посмотреть презентацию" + "</a>";
        r0 += "</div>";
        r0 += "<div class=\"" + "horiz-menu-item" + "\">";
        r0 += "<a id=\"" + "show_hide_video" + "\" href=\"" + "#" + "\">" + "Посмотреть видео" + "</a>";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "hidden" + "\" id=\"" + "presentation" + "\">";
        r0 += m.f('f1', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "<div class=\"" + "hidden" + "\" id=\"" + "video" + "\">";
        r0 += m.f('f2', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";

        return r0;
    };

    var j8 = [ ];

    // match /
    M.t0 = function t0(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f3', c0, i0, l0, a0);

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

    yr.register('lecture', M);

})();
