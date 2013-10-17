//функция используется на странице Докладчики для отображения списка докладчиков - всех или
//только по какой-то группе лекций
function get_lectors(sel_number) {

    var x = new XMLHttpRequest();
    x.open("GET", "/root/json/lectors.json", false);
    x.send();
    lectors = x.responseText;
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
    var x = new XMLHttpRequest();
    x.open("GET", "/root/json/program.json", false);
    x.send();
    program = x.responseText;
    var lectures_arr = JSON.parse(program);
    var cpl_content = yr.run('multi_column_links', lectures_arr);
    return cpl_content;
}

//функция формирует окно конкретной лекции (докладчик, видео, презентация)
function get_lecture(id) {

    var x = new XMLHttpRequest();
    x.open("GET", "./json/lectures.json", false);
    x.send();
    var lectures = x.responseText;
    filtered_lectures = JSPath.apply('.lectures{.id === ' + id + '}', JSON.parse(lectures));

    var cpl_content;
    if (filtered_lectures.length > 0) {
        // Получаем последний сегмент из URL, поскольку именно в нем содержится
        // id видео, которое нужно плееру
        lecture = filtered_lectures[0];
        var video_url = lecture['video_url'];
        var url_parts = video_url.split('/');
        lecture.video_storage = url_parts[url_parts.length - 2];
        cpl_content = yr.run('lecture', lecture);
    } else {
        cpl_content = "<div>К сожалению, мы не успели загрузить материалы этой лекции. Stay tuned!</div>";
    }

    return cpl_content;
}

//эта функция помогает реализовывать что-то вроде аккордеона с видео и
//презентацией на странице лекции
function load_video_presentation_show_hide_scripts() {

    var present_link = document.getElementById("show_hide_present");
    var video_link = document.getElementById("show_hide_video");
    var video = document.getElementById("video");
    var presentation = document.getElementById("presentation");
    present_link.onclick = function() {

        if (video.className != 'hidden') {
            video.className = 'hidden';
            video_link.innerHTML = 'Показать видео';
        }
        if (presentation.className != 'visible') {
            presentation.className = 'visible';
            present_link.innerHTML = 'Cкрыть презентацию';
        } else {
            presentation.className = 'hidden';
            present_link.innerHTML = 'Показать презентацию';
        }
    }
    video_link.onclick = function() {

        if (presentation.className != 'hidden') {
            presentation.className = 'hidden';
            present_link.innerHTML = 'Показать презентацию';
        }
        if (video.className != 'visible') {
            video.className = 'visible';
            video_link.innerHTML = 'Скрыть видео';
        } else {
            video.className = 'hidden';
            video_link.innerHTML = 'Показать видео';
        }
    }
}

//функция используется на странице Выпускники. Формирует список всех студентов
function get_students() {
    var x = new XMLHttpRequest();
    x.open("GET", "./json/students.json", false);
    x.send();
    students = x.responseText;

    var students_arr = JSON.parse(students);
    var cpl_content = yr.run('students', students_arr);
    return cpl_content;
}

//функция формирует личную страничку выпускника Школы
function get_student(id) {
    var x = new XMLHttpRequest();
    x.open("GET", "./json/students.json", false);
    x.send();
    students = x.responseText;

    var students_arr = JSON.parse(students);
    student = JSPath.apply('.students{.id === ' + id + '}', students_arr)[0];
    var cpl_content = yr.run('alumni', student);
    return cpl_content;
}