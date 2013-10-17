//эта функция помогает реализовывать что-то вроде аккордеона с видео и
//презентацией на странице лекции
$("#show_hide_presentation").on('click', function() {

    //если хотим показать или скрыть презентацию, то видео в любом случае не должно быть видно
    if ($("#video").hasClass("visible")){
        $("#video").toggleClass("visible hidden");
    }
    $("#presentation").toggleClass("visible hidden");
    update_links();
});

$("#show_hide_video").on('click', function() {

    if ($("#presentation").hasClass("visible")){
        $("#presentation").toggleClass("visible hidden");
    }
    $("#video").toggleClass("visible hidden");
    update_links();
});

function update_links(){
    update_link_name("video", "видео");
    update_link_name("presentation", "презентацию");
}

function update_link_name(media_en, media_ru){
    if ($("#" + media_en).hasClass("visible")){
        $("#show_hide_" + media_en).text("Скрыть " + media_ru);
    }
    else{
        $("#show_hide_" + media_en).text("Показать " + media_ru);
    }
}