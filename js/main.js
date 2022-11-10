function img01 () {
    document.getElementById("stlgeral").src="https://www.google.com/maps/d/embed?mid=1OGX9AwJd9N4vreC1m8cBs3lhIcj79M0&ehbc=2E312F";
}
function img02 () {
    document.getElementById("stlgeral").src="https://www.google.com/maps/d/embed?mid=1F80_4k14xid-QT1G3BxDztm3FLYlTNU&ehbc=2E312F";
}
function img03 () {
    document.getElementById("stlgeral").src="https://www.google.com/maps/d/embed?mid=1qHq7YE8IUyN-tDyf1mI20JRey3yyI0s&ehbc=2E312F";
}


$(".sidebar ul li").on('click' , function() {
    $(".sidebar ul li.active").removeClass('active');
    $(this).addClasss('active');
})
