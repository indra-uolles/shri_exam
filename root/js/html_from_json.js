//функция используется на странице Докладчики для отображения списка докладчиков - всех или
//только по какой-то группе лекций
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

//функция используется на странице Программа. Выводит список всех лекций сгруппированных по темам
function get_lectures() {
    program = get_json("/root/json/program.json");
    var lectures_arr = JSON.parse(program);
    var cpl_content = yr.run('multi_column_links', lectures_arr);
    return cpl_content;
}

//функция формирует окно конкретной лекции (докладчик, видео, презентация)
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

//функция используется на странице Выпускники. Формирует список всех студентов
function get_students() {

    students = get_json("./json/students.json");
    var students_arr = JSON.parse(students);
    var cpl_content = yr.run('students', students_arr);
    return cpl_content;
}

//функция формирует личную страничку выпускника Школы
function get_student(id) {

    students = get_json("./json/students.json");
    var students_arr = JSON.parse(students);
    student = JSPath.apply('.students{.id === ' + id + '}', students_arr)[0];
    var cpl_content = yr.run('alumni', student);
    return cpl_content;
}

function get_json(filename){
    var x = new XMLHttpRequest();
    x.open("GET", filename, false);
    x.send();
    return x.responseText;
}