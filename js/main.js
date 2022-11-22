function img01 () {
    document.getElementById("stlgeral").src="https://www.google.com/maps/d/u/0/embed?mid=1qHq7YE8IUyN-tDyf1mI20JRey3yyI0s&ehbc=2E312F";
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
    if(par == 'ala13'){
        switch (des){
            case 'polo':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3071.233677823768!2d-46.54649175576928!3d-23.73550388285005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m5!1s0x94ce41e1617f54f9%3A0x20889d4ad4e5c17b!2sPolo%20Restaurante!3m2!1d-23.7355372!2d-46.5464558!4m3!3m2!1d-23.7371519!2d-46.547260099999995!5e0!3m2!1spt-BR!2sbr!4v1669085462715!5m2!1spt-BR!2sbr";
                break;
            case 'ala14':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1826.1209368657217!2d-46.54749564174403!3d-23.738752690879018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m5!1s0x94ce41ae3ceb7c99%3A0xbc97adaf780ec412!2sEngenharia%20de%20Processos%20VW!3m2!1d-23.73985!2d-46.5458466!4m3!3m2!1d-23.7371519!2d-46.547260099999995!5e0!3m2!1spt-BR!2sbr!4v1669087873494!5m2!1spt-BR!2sbr";
                break;
            case 'fpilo':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1826.1604856275358!2d-46.547611891744076!3d-23.735930940826204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m5!1s0x94ce41425f8f25e3%3A0x2a21a0f0a5fe747c!2sF%C3%A1brica%20Piloto%20VW%20Anchieta!3m2!1d-23.7345567!2d-46.5457554!4m3!3m2!1d-23.7371519!2d-46.547260099999995!5e0!3m2!1spt-BR!2sbr!4v1669088320620!5m2!1spt-BR!2sbr";
                break;
            case 'ala8':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1826.1592298901633!2d-46.550604691744134!3d-23.736020540827905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m5!1s0x94ce41a6c6b623af%3A0x3c4b6813d23e82a3!2sVolkswagen%20ala%208!3m2!1d-23.7347221!2d-46.551280899999995!4m3!3m2!1d-23.7371519!2d-46.547260099999995!5e0!3m2!1spt-BR!2sbr!4v1669117620863!5m2!1spt-BR!2sbr";
                break;
            case 'visi':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6142.535232930553!2d-46.54510396489772!3d-23.734063918628372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x94ce41a247a6cb75%3A0x1896dfdbaafacaaa!2sPortaria%20de%20Visitantes%20Volkswagen!3m2!1d-23.7296288!2d-46.5486681!4m5!1s0x94ce41a64cd4a463%3A0x4e52a3266b4da685!2sQuiosque%20-%20Ala%2013%20-%20R.%20Interna%20da%20Volkswagen%2C%209275%20-%20Demarchi%2C%20S%C3%A3o%20Bernardo%20do%20Campo%20-%20SP%2C%2009790!3m2!1d-23.7371519!2d-46.547260099999995!5e0!3m2!1spt-BR!2sbr!4v1669117831678!5m2!1spt-BR!2sbr";
                break;
            case 'pormate':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1826.1224926905509!2d-46.54654404174412!3d-23.73864169087694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x94ce41b189e23869%3A0x74c01463ae951dc2!2sPortaria%20Materiais%20Volkswagen!3m2!1d-23.7404293!2d-46.543670299999995!4m5!1s0x94ce41a64cd4a463%3A0x4e52a3266b4da685!2sQuiosque%20-%20Ala%2013%20-%20R.%20Interna%20da%20Volkswagen%2C%209275%20-%20Demarchi%2C%20S%C3%A3o%20Bernardo%20do%20Campo%20-%20SP%2C%2009790!3m2!1d-23.7371519!2d-46.547260099999995!5e0!3m2!1spt-BR!2sbr!4v1669117991082!5m2!1spt-BR!2sbr";
                break;
            case 'por':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1826.1198821247208!2d-46.54570694174402!3d-23.73882794088042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x94ce41b3d8800211%3A0x280791f734df039d!2sVolkswagen%20do%20Brasil%20-%20Portaria%20F!3m2!1d-23.739003399999998!2d-46.5426992!4m5!1s0x94ce41a64cd4a463%3A0x4e52a3266b4da685!2sQuiosque%20-%20Ala%2013%20-%20R.%20Interna%20da%20Volkswagen%2C%209275%20-%20Demarchi%2C%20S%C3%A3o%20Bernardo%20do%20Campo%20-%20SP%2C%2009790!3m2!1d-23.7371519!2d-46.547260099999995!5e0!3m2!1spt-BR!2sbr!4v1669118224323!5m2!1spt-BR!2sbr";
                break;
            case 'ala3':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3652.361458216035!2d-46.55026803442045!3d-23.734486473894815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x94ce41a38644c0ff%3A0x604ebfecb66f8d04!2sVolkswagen%20ALA%203!3m2!1d-23.732305399999998!2d-46.548052999999996!4m5!1s0x94ce41a64cd4a463%3A0x4e52a3266b4da685!2sQuiosque%20-%20Ala%2013%20-%20R.%20Interna%20da%20Volkswagen%2C%209275%20-%20Demarchi%2C%20S%C3%A3o%20Bernardo%20do%20Campo%20-%20SP%2C%2009790!3m2!1d-23.7371519!2d-46.547260099999995!5e0!3m2!1spt-BR!2sbr!4v1669118488303!5m2!1spt-BR!2sbr";
                break;
            case 'ala5':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1826.1618485740382!2d-46.54729164174411!3d-23.73583369082439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-23.7369581!2d-46.5448466!4m5!1s0x94ce41a64cd4a463%3A0x4e52a3266b4da685!2sQuiosque%20-%20Ala%2013!3m2!1d-23.7371519!2d-46.547260099999995!5e0!3m2!1spt-BR!2sbr!4v1669118857353!5m2!1spt-BR!2sbr";
                break;
            case 'ala19':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1826.1618485740382!2d-46.54729164174411!3d-23.73583369082439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-23.7369581!2d-46.5448466!4m5!1s0x94ce41a64cd4a463%3A0x4e52a3266b4da685!2sQuiosque%20-%20Ala%2013!3m2!1d-23.7371519!2d-46.547260099999995!5e0!3m2!1spt-BR!2sbr!4v1669118857353!5m2!1spt-BR!2sbr";
                break;
            case 'ala11':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3652.2510058749585!2d-46.549696234420345!3d-23.738426924041345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-23.739830899999998!2d-46.5472648!4m5!1s0x94ce41a64cd4a463%3A0x4e52a3266b4da685!2sQuiosque%20-%20Ala%2013!3m2!1d-23.7371519!2d-46.547260099999995!5e0!3m2!1spt-BR!2sbr!4v1669119368087!5m2!1spt-BR!2sbr";
                break;
            case 'ala20':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d7304.28718213198!2d-46.55189022256995!3d-23.742258417546104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-23.7416527!2d-46.5470178!4m5!1s0x94ce41a64cd4a463%3A0x4e52a3266b4da685!2sQuiosque%20-%20Ala%2013!3m2!1d-23.7371519!2d-46.547260099999995!5e0!3m2!1spt-BR!2sbr!4v1669119499858!5m2!1spt-BR!2sbr";
                break;
            case 'ala22':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1826.1468005121556!2d-46.54989954174414!3d-23.736907390844458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-23.7359962!2d-46.5504684!4m5!1s0x94ce41a64cd4a463%3A0x4e52a3266b4da685!2sQuiosque%20-%20Ala%2013!3m2!1d-23.7371519!2d-46.547260099999995!5e0!3m2!1spt-BR!2sbr!4v1669119624043!5m2!1spt-BR!2sbr";
                break;
            default:
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d14609.43797522624!2d-46.555711260066545!3d-23.734556560704476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-23.7278162!2d-46.5509321!4m5!1s0x94ce41a64cd4a463%3A0x4e52a3266b4da685!2sQuiosque%20-%20Ala%2013!3m2!1d-23.7371519!2d-46.547260099999995!5e0!3m2!1spt-BR!2sbr!4v1669119712958!5m2!1spt-BR!2sbr";
                break;
        }
    }
    else if (par == 'fpilo'){
        switch (des){
            case 'polo':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1826.172908918064!2d-46.54728914177622!3d-23.735044490809468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-23.7345567!2d-46.5457554!4m5!1s0x94ce41e1617f54f9%3A0x20889d4ad4e5c17b!2sPolo%20Restaurante!3m2!1d-23.7355372!2d-46.5464558!5e0!3m2!1spt-BR!2sbr!4v1669141312351!5m2!1spt-BR!2sbr";
                break;
            case 'ala14':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3652.2809384292395!2d-46.54807568442043!3d-23.737359124001635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-23.7345567!2d-46.5457554!4m5!1s0x94ce41ae3ceb7c99%3A0xbc97adaf780ec412!2sEngenharia%20de%20Processos%20VW!3m2!1d-23.73985!2d-46.5458466!5e0!3m2!1spt-BR!2sbr!4v1669141485165!5m2!1spt-BR!2sbr";
                break;
            case 'fpilo':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1826.1604856275358!2d-46.547611891744076!3d-23.735930940826204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m5!1s0x94ce41425f8f25e3%3A0x2a21a0f0a5fe747c!2sF%C3%A1brica%20Piloto%20VW%20Anchieta!3m2!1d-23.7345567!2d-46.5457554!4m3!3m2!1d-23.7371519!2d-46.547260099999995!5e0!3m2!1spt-BR!2sbr!4v1669088320620!5m2!1spt-BR!2sbr";
                break;
            case 'ala8':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1826.1764258162318!2d-46.54958744174411!3d-23.734793540804883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-23.7345567!2d-46.5457554!4m5!1s0x94ce41a6c6b623af%3A0x3c4b6813d23e82a3!2sVolkswagen%20ala%208!3m2!1d-23.7347221!2d-46.551280899999995!5e0!3m2!1spt-BR!2sbr!4v1669141628991!5m2!1spt-BR!2sbr";
                break;
            case 'visi':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3652.427918348367!2d-46.5491043344206!3d-23.732115173806733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-23.7345567!2d-46.5457554!4m5!1s0x94ce41a247a6cb75%3A0x1896dfdbaafacaaa!2sPortaria%20de%20Visitantes%20Volkswagen!3m2!1d-23.7296288!2d-46.5486681!5e0!3m2!1spt-BR!2sbr!4v1669141688983!5m2!1spt-BR!2sbr";
                break;
            case 'pormate':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3652.2772747168433!2d-46.54767323442044!3d-23.737489824006612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-23.7345567!2d-46.5457554!4m5!1s0x94ce41b189e23869%3A0x74c01463ae951dc2!2sPortaria%20Materiais%20Volkswagen!3m2!1d-23.7404293!2d-46.543670299999995!5e0!3m2!1spt-BR!2sbr!4v1669141767950!5m2!1spt-BR!2sbr";
                break;
            case 'por':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3652.2854991219397!2d-46.546048934420384!3d-23.73719642399555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-23.7345567!2d-46.5457554!4m5!1s0x94ce41b3d8800211%3A0x280791f734df039d!2sVolkswagen%20do%20Brasil%20-%20Portaria%20F!3m2!1d-23.739003399999998!2d-46.5426992!5e0!3m2!1spt-BR!2sbr!4v1669141864557!5m2!1spt-BR!2sbr";
                break;
            case 'ala3':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1826.1925656802057!2d-46.54881874174415!3d-23.733641840783363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-23.7345567!2d-46.5457554!4m5!1s0x94ce41a38644c0ff%3A0x604ebfecb66f8d04!2sVolkswagen%20ALA%203!3m2!1d-23.732305399999998!2d-46.548052999999996!5e0!3m2!1spt-BR!2sbr!4v1669141956832!5m2!1spt-BR!2sbr";
                break;
            case 'ala5':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1826.1662162740943!2d-46.54729164174414!3d-23.735522040818545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m5!1s0x94ce41425f8f25e3%3A0x2a21a0f0a5fe747c!2sF%C3%A1brica%20Piloto%20VW%20Anchieta!3m2!1d-23.7345567!2d-46.5457554!4m3!3m2!1d-23.7369581!2d-46.5448466!5e0!3m2!1spt-BR!2sbr!4v1669142097924!5m2!1spt-BR!2sbr";
                break;
            case 'ala19':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3652.26378300919!2d-46.549382834420335!3d-23.737971124024458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m5!1s0x94ce41425f8f25e3%3A0x2a21a0f0a5fe747c!2sF%C3%A1brica%20Piloto%20VW%20Anchieta!3m2!1d-23.7345567!2d-46.5457554!4m3!3m2!1d-23.7410061!2d-46.5477096!5e0!3m2!1spt-BR!2sbr!4v1669142341797!5m2!1spt-BR!2sbr";
                break;
            case 'ala11':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3652.2886400121074!2d-46.549382834420435!3d-23.737084373991447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m5!1s0x94ce41425f8f25e3%3A0x2a21a0f0a5fe747c!2sF%C3%A1brica%20Piloto%20VW%20Anchieta!3m2!1d-23.7345567!2d-46.5457554!4m3!3m2!1d-23.739508999999998!2d-46.5476649!5e0!3m2!1spt-BR!2sbr!4v1669142921148!5m2!1spt-BR!2sbr";
                break;
            case 'ala20':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d7304.35994147445!2d-46.55026437256988!3d-23.74096081745094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m5!1s0x94ce41425f8f25e3%3A0x2a21a0f0a5fe747c!2sF%C3%A1brica%20Piloto%20VW%20Anchieta!3m2!1d-23.7345567!2d-46.5457554!4m3!3m2!1d-23.7416366!2d-46.546987699999995!5e0!3m2!1spt-BR!2sbr!4v1669143426686!5m2!1spt-BR!2sbr";
                break;
            case 'ala22':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1826.1551613264626!2d-46.54918119174409!3d-23.73631084083332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m5!1s0x94ce41425f8f25e3%3A0x2a21a0f0a5fe747c!2sF%C3%A1brica%20Piloto%20VW%20Anchieta!3m2!1d-23.7345567!2d-46.5457554!4m3!3m2!1d-23.7359962!2d-46.5504684!5e0!3m2!1spt-BR!2sbr!4v1669142466287!5m2!1spt-BR!2sbr";
                break;
            case 'ala13':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1826.1604856275358!2d-46.54761189174405!3d-23.735930940826204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x94ce41425f8f25e3%3A0x2a21a0f0a5fe747c!2sF%C3%A1brica%20Piloto%20VW%20Anchieta!3m2!1d-23.7345567!2d-46.5457554!4m5!1s0x94ce41a64cd4a463%3A0x4e52a3266b4da685!2sQuiosque%20-%20Ala%2013!3m2!1d-23.7371519!2d-46.547260099999995!5e0!3m2!1spt-BR!2sbr!4v1669142985782!5m2!1spt-BR!2sbr"
                break;
            default:
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3652.4392419840187!2d-46.550354384420416!3d-23.731711123791563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x94ce41425f8f25e3%3A0x2a21a0f0a5fe747c!2sF%C3%A1brica%20Piloto%20VW%20Anchieta!3m2!1d-23.7345567!2d-46.5457554!4m5!1s0x94ce410d0af2fea3%3A0xf3615f20a8956222!2sAcademia%20Volkswagen!3m2!1d-23.7278447!2d-46.5510522!5e0!3m2!1spt-BR!2sbr!4v1669142524160!5m2!1spt-BR!2sbr";
                break;
              
        }
    }
    else if (par == 'ala14'){
        if(des == 'polo'){
            document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3071.233677823768!2d-46.54649175576928!3d-23.73550388285005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m5!1s0x94ce41e1617f54f9%3A0x20889d4ad4e5c17b!2sPolo%20Restaurante!3m2!1d-23.7355372!2d-46.5464558!4m3!3m2!1d-23.7371519!2d-46.547260099999995!5e0!3m2!1spt-BR!2sbr!4v1669085462715!5m2!1spt-BR!2sbr";
        }else if (des == 'ala14'){
            document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1826.1209368657217!2d-46.54749564174403!3d-23.738752690879018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m5!1s0x94ce41ae3ceb7c99%3A0xbc97adaf780ec412!2sEngenharia%20de%20Processos%20VW!3m2!1d-23.73985!2d-46.5458466!4m3!3m2!1d-23.7371519!2d-46.547260099999995!5e0!3m2!1spt-BR!2sbr!4v1669087873494!5m2!1spt-BR!2sbr";
        }
        else if (des == 'fpilo'){
            document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1826.1604856275358!2d-46.547611891744076!3d-23.735930940826204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m5!1s0x94ce41425f8f25e3%3A0x2a21a0f0a5fe747c!2sF%C3%A1brica%20Piloto%20VW%20Anchieta!3m2!1d-23.7345567!2d-46.5457554!4m3!3m2!1d-23.7371519!2d-46.547260099999995!5e0!3m2!1spt-BR!2sbr!4v1669088320620!5m2!1spt-BR!2sbr";
        }
        else if (des == 'ala8'){
            document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1826.1592298901633!2d-46.550604691744134!3d-23.736020540827905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m5!1s0x94ce41a6c6b623af%3A0x3c4b6813d23e82a3!2sVolkswagen%20ala%208!3m2!1d-23.7347221!2d-46.551280899999995!4m3!3m2!1d-23.7371519!2d-46.547260099999995!5e0!3m2!1spt-BR!2sbr!4v1669117620863!5m2!1spt-BR!2sbr";
        }
        else if (des == 'visi'){
            document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6142.535232930553!2d-46.54510396489772!3d-23.734063918628372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x94ce41a247a6cb75%3A0x1896dfdbaafacaaa!2sPortaria%20de%20Visitantes%20Volkswagen!3m2!1d-23.7296288!2d-46.5486681!4m5!1s0x94ce41a64cd4a463%3A0x4e52a3266b4da685!2sQuiosque%20-%20Ala%2013%20-%20R.%20Interna%20da%20Volkswagen%2C%209275%20-%20Demarchi%2C%20S%C3%A3o%20Bernardo%20do%20Campo%20-%20SP%2C%2009790!3m2!1d-23.7371519!2d-46.547260099999995!5e0!3m2!1spt-BR!2sbr!4v1669117831678!5m2!1spt-BR!2sbr";
        }
        else if (des == 'pormate'){
            document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1826.1224926905509!2d-46.54654404174412!3d-23.73864169087694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x94ce41b189e23869%3A0x74c01463ae951dc2!2sPortaria%20Materiais%20Volkswagen!3m2!1d-23.7404293!2d-46.543670299999995!4m5!1s0x94ce41a64cd4a463%3A0x4e52a3266b4da685!2sQuiosque%20-%20Ala%2013%20-%20R.%20Interna%20da%20Volkswagen%2C%209275%20-%20Demarchi%2C%20S%C3%A3o%20Bernardo%20do%20Campo%20-%20SP%2C%2009790!3m2!1d-23.7371519!2d-46.547260099999995!5e0!3m2!1spt-BR!2sbr!4v1669117991082!5m2!1spt-BR!2sbr";
        }
        else if (des == 'por'){
            document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1826.1198821247208!2d-46.54570694174402!3d-23.73882794088042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x94ce41b3d8800211%3A0x280791f734df039d!2sVolkswagen%20do%20Brasil%20-%20Portaria%20F!3m2!1d-23.739003399999998!2d-46.5426992!4m5!1s0x94ce41a64cd4a463%3A0x4e52a3266b4da685!2sQuiosque%20-%20Ala%2013%20-%20R.%20Interna%20da%20Volkswagen%2C%209275%20-%20Demarchi%2C%20S%C3%A3o%20Bernardo%20do%20Campo%20-%20SP%2C%2009790!3m2!1d-23.7371519!2d-46.547260099999995!5e0!3m2!1spt-BR!2sbr!4v1669118224323!5m2!1spt-BR!2sbr";
        }
        else if (des == 'ala3'){
            document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3652.361458216035!2d-46.55026803442045!3d-23.734486473894815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x94ce41a38644c0ff%3A0x604ebfecb66f8d04!2sVolkswagen%20ALA%203!3m2!1d-23.732305399999998!2d-46.548052999999996!4m5!1s0x94ce41a64cd4a463%3A0x4e52a3266b4da685!2sQuiosque%20-%20Ala%2013%20-%20R.%20Interna%20da%20Volkswagen%2C%209275%20-%20Demarchi%2C%20S%C3%A3o%20Bernardo%20do%20Campo%20-%20SP%2C%2009790!3m2!1d-23.7371519!2d-46.547260099999995!5e0!3m2!1spt-BR!2sbr!4v1669118488303!5m2!1spt-BR!2sbr";
        }
        else if (des == 'ala5'){
            document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1826.1618485740382!2d-46.54729164174411!3d-23.73583369082439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-23.7369581!2d-46.5448466!4m5!1s0x94ce41a64cd4a463%3A0x4e52a3266b4da685!2sQuiosque%20-%20Ala%2013!3m2!1d-23.7371519!2d-46.547260099999995!5e0!3m2!1spt-BR!2sbr!4v1669118857353!5m2!1spt-BR!2sbr";
        }
        else if (des == 'ala19'){
            document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3652.22740765523!2d-46.5497015344203!3d-23.739268724072666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-23.7410061!2d-46.5477096!4m5!1s0x94ce41a64cd4a463%3A0x4e52a3266b4da685!2sQuiosque%20-%20Ala%2013!3m2!1d-23.7371519!2d-46.547260099999995!5e0!3m2!1spt-BR!2sbr!4v1669119142612!5m2!1spt-BR!2sbr";
        }
        else if (des == 'ala11'){
            document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3652.2510058749585!2d-46.549696234420345!3d-23.738426924041345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-23.739830899999998!2d-46.5472648!4m5!1s0x94ce41a64cd4a463%3A0x4e52a3266b4da685!2sQuiosque%20-%20Ala%2013!3m2!1d-23.7371519!2d-46.547260099999995!5e0!3m2!1spt-BR!2sbr!4v1669119368087!5m2!1spt-BR!2sbr";
        }
        else if (des == 'ala20'){
            document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d7304.28718213198!2d-46.55189022256995!3d-23.742258417546104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-23.7416527!2d-46.5470178!4m5!1s0x94ce41a64cd4a463%3A0x4e52a3266b4da685!2sQuiosque%20-%20Ala%2013!3m2!1d-23.7371519!2d-46.547260099999995!5e0!3m2!1spt-BR!2sbr!4v1669119499858!5m2!1spt-BR!2sbr";
        }
        else if (des == 'ala22'){
            document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1826.1468005121556!2d-46.54989954174414!3d-23.736907390844458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-23.7359962!2d-46.5504684!4m5!1s0x94ce41a64cd4a463%3A0x4e52a3266b4da685!2sQuiosque%20-%20Ala%2013!3m2!1d-23.7371519!2d-46.547260099999995!5e0!3m2!1spt-BR!2sbr!4v1669119624043!5m2!1spt-BR!2sbr";
        }
        else{
            document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d14609.43797522624!2d-46.555711260066545!3d-23.734556560704476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-23.7278162!2d-46.5509321!4m5!1s0x94ce41a64cd4a463%3A0x4e52a3266b4da685!2sQuiosque%20-%20Ala%2013!3m2!1d-23.7371519!2d-46.547260099999995!5e0!3m2!1spt-BR!2sbr!4v1669119712958!5m2!1spt-BR!2sbr";
        }
        
    }
}) 