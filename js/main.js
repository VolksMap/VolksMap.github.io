function img01 () {
    document.getElementById("stlgeral").src="https://www.google.com/maps/d/embed?mid=1OGX9AwJd9N4vreC1m8cBs3lhIcj79M0&ehbc=2E312F";
}
function img02 () {
    document.getElementById("stlgeral").src="https://www.google.com/maps/d/embed?mid=1qHq7YE8IUyN-tDyf1mI20JRey3yyI0s&ehbc=2E312F";
}
function img03 () {
    document.getElementById("stlgeral").src="https://www.google.com/maps/d/embed?mid=1F80_4k14xid-QT1G3BxDztm3FLYlTNU&ehbc=2E312F";
}


$(".sidebar ul li").on('click' , function() {
    $(".sidebar ul li.active").removeClass('active');
    $(this).addClasss('active');
})

var menu = document.querySelector('i.menu-nav')
var nav = document.querySelector('nav#sidebar')
var co = 0

menu.addEventListener('click', function(){
    if(co == 0){
        nav.classList.add('showmenu')
        co += 1
    }else{
        nav.classList.remove('showmenu') 
        co = 0
    }
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

var openala = document.querySelector('div.find-btn')
var entala = document.querySelector('div.find')

openala.addEventListener('click', function(){
    if(cont == 0){
    openala.classList.add('open')
    entala.classList.add('openent')
    cont += 1
    }
    else{
    openala.classList.remove('open')
    entala.classList.remove('openent')
    cont = 0
    }
})

var rotas = document.querySelector('div.rotas');

rotas.addEventListener('click', function(){ 
    var par = document.querySelector("input[name='Ala-partida']:checked").value;
    var des = document.querySelector("input[name='Ala-destino']:checked").value;
    if(par == 'ala13' && des == 'polo'){
        document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3071.233677823768!2d-46.54649175576928!3d-23.73550388285005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m5!1s0x94ce41e1617f54f9%3A0x20889d4ad4e5c17b!2sPolo%20Restaurante!3m2!1d-23.7355372!2d-46.5464558!4m3!3m2!1d-23.7371519!2d-46.547260099999995!5e0!3m2!1spt-BR!2sbr!4v1669085462715!5m2!1spt-BR!2sbr";
    }else if (par == 'ala13' && des == 'ala14'){
        document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1826.1209368657217!2d-46.54749564174403!3d-23.738752690879018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m5!1s0x94ce41ae3ceb7c99%3A0xbc97adaf780ec412!2sEngenharia%20de%20Processos%20VW!3m2!1d-23.73985!2d-46.5458466!4m3!3m2!1d-23.7371519!2d-46.547260099999995!5e0!3m2!1spt-BR!2sbr!4v1669087873494!5m2!1spt-BR!2sbr";
    }
    else if (par == 'ala13' && des == 'fpilo'){
        document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1826.1604856275358!2d-46.547611891744076!3d-23.735930940826204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m5!1s0x94ce41425f8f25e3%3A0x2a21a0f0a5fe747c!2sF%C3%A1brica%20Piloto%20VW%20Anchieta!3m2!1d-23.7345567!2d-46.5457554!4m3!3m2!1d-23.7371519!2d-46.547260099999995!5e0!3m2!1spt-BR!2sbr!4v1669088320620!5m2!1spt-BR!2sbr";
    }
})