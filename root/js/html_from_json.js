/**
 * Формирование страницы со всеми докладчиками или только по какой-то группе лекций
 * @param  {Integer} sel_number
 * @return {String} html-код страницы Докладчики
 */
function get_lectors(sel_number) {

    lectors = get_json("/root/json/lectors.json");
    var lectors_arr = JSON.parse(lectors);

    theme = '';
    switch (sel_number) {
        case 2:
            theme = 'instruments'
            break;
        case 3:
            theme = 'technologies'
            break;
        case 4:
            theme = 'languages'
            break;
        case 5:
            theme = 'design'
            break;
        case 6:
            theme = 'frameworks'
            break;
    }
    var cpl_content;
    if (sel_number > 1) {
        query_str = '.lectors{.' + theme + '==1}.lector';
        cpl_content = yr.run('lectors', JSPath.apply(query_str, lectors_arr));
    } else {
        cpl_content = yr.run('lectors', JSPath.apply('.lectors.lector', lectors_arr));
    }
    return cpl_content;
}

/**
 * Выводится страница с сгруппированными по темам лекциями
 * @return {String} html-код страницы Программа
 */
function get_lectures() {
    program = get_json("/root/json/program.json");
    var lectures_arr = JSON.parse(program);
    var cpl_content = yr.run('multi_column_links', lectures_arr);
    return cpl_content;
}

/**
 * @param  {Integer} id
 * @return {String} html-код страницы конкретной лекции
 */
function get_lecture(id) {

    lectures = get_json("./json/lectures.json");

    var cpl_content;
    try{
        filtered_lectures = JSPath.apply('.lectures{.id === ' + id + '}', JSON.parse(lectures));
        // Получаем последний сегмент из URL, поскольку именно в нем содержится
        // id видео, которое нужно плееру
        lecture = filtered_lectures[0];
        var video_url = lecture['video_url'];
        var url_parts = video_url.split('/');
        lecture.video_storage = url_parts[url_parts.length - 2];
        cpl_content = yr.run('lecture', lecture);
    }
    catch(err){
        cpl_content = "";
    }
    
    return cpl_content;
}

/**
 * @return {String} html-код страницы Выпускники
 */
function get_students() {

    students = get_json("./json/students.json");
    var students_arr = JSON.parse(students);
    var cpl_content = yr.run('students', students_arr);
    return cpl_content;
}

//функция формирует личную страничку выпускника Школы
/**
 * @param  {Integer} id идентификатор выпускника
 * @return {String} html-код страницы конкретного выпускника
 */
function get_student(id) {

    students = get_json("./json/students.json");
    var students_arr = JSON.parse(students);
    student = JSPath.apply('.students{.id === ' + id + '}', students_arr)[0];
    var cpl_content = yr.run('alumni', student);
    return cpl_content;
}

/**
 * @param  {String} путь к файлу
 * @return {String} json из файла
 */
function get_json(filename){
    var x = new XMLHttpRequest();
    x.open("GET", filename, false);
    x.send();
    return x.responseText;
}