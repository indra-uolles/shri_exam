/**
 * @return {String} html-код блока "Логотип"
 */
function get_logo(){ 
    var data = {
        logo_name: 'Яндекс ШРИ в Москве 2013',
        when_where: '7 сентября - 31 декабря'
    };
    var cpl_logo = yr.run('logo', data);
    return cpl_logo;
}

/**
 * @return {String} html-код меню в шапке сайта
 */
function get_horiz_menu(){   
    data = {
        item: [{
            link: '#',
            title: 'О мероприятии',
            id: 'page_index'
        }, {
            link: '#',
            title: 'Программа',
            id: 'page_lectures'
        }, {
            link: '#',
            title: 'Докладчики',
            id: 'page_lectors'
        }, {
            link: '#',
            title: 'Правила отбора',
            id: 'page_rules'
        }, {
            link: '#',
            title: 'FAQ',
            id: 'page_faq'
        }, {
            link: '#',
            title: 'Выпускники',
            id: 'page_students'
        }]
    };
    var cpl_menu = yr.run('horizontal_menu', data);
    return cpl_menu;
}

/**
 * @return {String} html-код фильтра по темам на странице Докладчики
 */
function get_lectors_filter(){
    var data = {
        item: [{
            link: '#',
            id: '1',
            class: 'lectors_filter',
            title: 'Все'
        }, {
            link: '#',
            id: '2',
            class: 'lectors_filter',
            title: 'Инструменты'
        }, {
            link: '#',
            id: '3',
            class: 'lectors_filter',
            title: 'Технологии'
        }, {
            link: '#',
            id: '4',
            class: 'lectors_filter',
            title: 'Языки'
        }, {
            link: '#',
            id: '5',
            class: 'lectors_filter',
            title: 'Дизайн'
        }, {
            link: '#',
            id: '6',
            class: 'lectors_filter',
            title: 'Фреймворки'
        }]
    }
    var cpl_content_filter = yr.run('lectors_filter', data);
    return cpl_content_filter;
}