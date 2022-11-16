function img01 () {
    document.getElementById("stlgeral").src="https://www.google.com/maps/d/u/0/embed?mid=13JbxNc5Bo7_aSuAjPTlUVKi3uJMzFYA&ehbc=2E312F";
}
function img02 () {
    document.getElementById("stlgeral").src="https://www.google.com/maps/d/u/0/embed?mid=13JbxNc5Bo7_aSuAjPTlUVKi3uJMzFYA&ehbc=2E312F";
}
function img03 () {
    document.getElementById("stlgeral").src="https://www.google.com/maps/d/embed?mid=1F80_4k14xid-QT1G3BxDztm3FLYlTNU&ehbc=2E312F";
}


$(".sidebar ul li").on('click' , function() {
    $(".sidebar ul li.active").removeClass('active');
    $(this).addClasss('active');
})

var dropop = document.querySelector('span.arrow')
var dropdown = document.querySelector('ul.dropdown-menu-dark')
var cont = 0;
dropop.addEventListener('click', function(){
   if(cont == 0){
    dropdown.classList.add('see');
    dropop.classList.add('see');
    cont +=1;
   }else{
    dropdown.classList.remove('see');
    dropop.classList.remove('see');
    cont = 0;
   }
})
