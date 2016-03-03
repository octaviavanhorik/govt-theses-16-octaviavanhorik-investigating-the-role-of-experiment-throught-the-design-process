var titles = [
    'Preface',
    'Introduction',
    'Chpater 1',
    'Chapter 2'
];

$(document).scroll(function(){
    var pos = $(this).scrollTop();

    if('#one') {
        $('.top').slideDown().text(titles[0]);
    }
    if('#two') {
        $('.top').slideDown();
    }
    if('#three') {
        $('.top').text(titles[1]);
    }
    if(pos > 1300) {
        $('.top').text(titles[2]);
    }
    if(pos > 1800) {
        $('.top').text(titles[3]);
    }
});
