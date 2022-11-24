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
            case 'ala13':
                alert('Verifique seu destino')
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
                alert('Verifique seu destino');
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
        switch (des){
            case 'polo':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3652.2714648602773!2d-46.54807568518499!3d-23.73769708459566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m3!3m2!1d-23.73985!2d-46.5458466!4m5!1s0x94ce41e1617f54f9%3A0x20889d4ad4e5c17b!2sPolo%20Restaurante!3m2!1d-23.7355372!2d-46.5464558!5e0!3m2!1spt-BR!2sbr!4v1669146932865!5m2!1spt-BR!2sbr";
                break;
            case 'ala14':
                alert('Verifique seu destino')
                break;
            case 'fpilo':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3652.2808007784433!2d-46.54807568518493!3d-23.737364034595807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m5!1s0x94ce41ae3ceb7c99%3A0xbc97adaf780ec412!2sEngenharia%20de%20Processos%20VW!3m2!1d-23.73985!2d-46.5458466!4m3!3m2!1d-23.7345567!2d-46.5457554!5e0!3m2!1spt-BR!2sbr!4v1669147586247!5m2!1spt-BR!2sbr";
                break;
            case 'ala8':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3652.282163102981!2d-46.55071353518505!3d-23.737315434595743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x94ce41ae3ceb7c99%3A0xbc97adaf780ec412!2sEngenharia%20de%20Processos%20VW!3m2!1d-23.73985!2d-46.5458466!4m5!1s0x94ce41a6c6b623af%3A0x3c4b6813d23e82a3!2sVolkswagen%20ala%208!3m2!1d-23.7347221!2d-46.551280899999995!5e0!3m2!1spt-BR!2sbr!4v1669148114924!5m2!1spt-BR!2sbr";
                break;
            case 'visi':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d7304.700131316422!2d-46.54997337562892!3d-23.73489293838778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m5!1s0x94ce41ae3ceb7c99%3A0xbc97adaf780ec412!2sEngenharia%20de%20Processos%20VW!3m2!1d-23.73985!2d-46.5458466!4m3!3m2!1d-23.7297029!2d-46.548691899999994!5e0!3m2!1spt-BR!2sbr!4v1669148245224!5m2!1spt-BR!2sbr";
                break;
            case 'pormate':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3652.2772747168433!2d-46.54767323442044!3d-23.737489824006612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-23.7345567!2d-46.5457554!4m5!1s0x94ce41b189e23869%3A0x74c01463ae951dc2!2sPortaria%20Materiais%20Volkswagen!3m2!1d-23.7404293!2d-46.543670299999995!5e0!3m2!1spt-BR!2sbr!4v1669141767950!5m2!1spt-BR!2sbr";
                break;
            case 'por':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1826.1056010385282!2d-46.545000191935266!3d-23.739846796148626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m5!1s0x94ce41ae3ceb7c99%3A0xbc97adaf780ec412!2sEngenharia%20de%20Processos%20VW!3m2!1d-23.73985!2d-46.5458466!4m3!3m2!1d-23.739003399999998!2d-46.5426992!5e0!3m2!1spt-BR!2sbr!4v1669148531658!5m2!1spt-BR!2sbr";
                break;
            case 'ala3':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d7304.642444380311!2d-46.5514712256288!3d-23.73592198838583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m5!1s0x94ce41ae3ceb7c99%3A0xbc97adaf780ec412!2sEngenharia%20de%20Processos%20VW!3m2!1d-23.73985!2d-46.5458466!4m3!3m2!1d-23.732305399999998!2d-46.548052999999996!5e0!3m2!1spt-BR!2sbr!4v1669148820858!5m2!1spt-BR!2sbr";
                break;
            case 'ala5':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3652.2560374090394!2d-46.5478206851849!3d-23.73824743459536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m5!1s0x94ce41ae3ceb7c99%3A0xbc97adaf780ec412!2sEngenharia%20de%20Processos%20VW!3m2!1d-23.73985!2d-46.5458466!4m3!3m2!1d-23.7366478!2d-46.545035!5e0!3m2!1spt-BR!2sbr!4v1669147254740!5m2!1spt-BR!2sbr";
                break;
            case 'ala19':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3652.1885588484706!2d-46.54892458518489!3d-23.740654484594188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m5!1s0x94ce41ae3ceb7c99%3A0xbc97adaf780ec412!2sEngenharia%20de%20Processos%20VW!3m2!1d-23.73985!2d-46.5458466!4m3!3m2!1d-23.7410672!2d-46.5478044!5e0!3m2!1spt-BR!2sbr!4v1669148953173!5m2!1spt-BR!2sbr";
                break;
            case 'ala11':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3652.208095934689!2d-46.5480845289057!3d-23.739957594393772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m5!1s0x94ce41ae3ceb7c99%3A0xbc97adaf780ec412!2sEngenharia%20de%20Processos%20VW!3m2!1d-23.73985!2d-46.5458466!4m3!3m2!1d-23.739508999999998!2d-46.5476649!5e0!3m2!1spt-BR!2sbr!4v1669149019663!5m2!1spt-BR!2sbr";
                break;
            case 'ala20':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d7304.210983186612!2d-46.55062977562815!3d-23.743617288370668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m5!1s0x94ce41ae3ceb7c99%3A0xbc97adaf780ec412!2sEngenharia%20de%20Processos%20VW!3m2!1d-23.73985!2d-46.5458466!4m3!3m2!1d-23.7416366!2d-46.546987699999995!5e0!3m2!1spt-BR!2sbr!4v1669149082730!5m2!1spt-BR!2sbr";
                break;
            case 'ala22':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3652.257303069814!2d-46.55022838518506!3d-23.73820228459534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m5!1s0x94ce41ae3ceb7c99%3A0xbc97adaf780ec412!2sEngenharia%20de%20Processos%20VW!3m2!1d-23.73985!2d-46.5458466!4m3!3m2!1d-23.7359962!2d-46.5504684!5e0!3m2!1spt-BR!2sbr!4v1669149134462!5m2!1spt-BR!2sbr";
                break;
            case 'ala13':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3652.241805226892!2d-46.54858998518493!3d-23.738755134595056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m5!1s0x94ce41ae3ceb7c99%3A0xbc97adaf780ec412!2sEngenharia%20de%20Processos%20VW!3m2!1d-23.73985!2d-46.5458466!4m3!3m2!1d-23.7371519!2d-46.547260099999995!5e0!3m2!1spt-BR!2sbr!4v1669147444798!5m2!1spt-BR!2sbr";
                break;
            default:
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d7304.691292460209!2d-46.54896593769539!3d-23.735050613294483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-23.73985!2d-46.5458466!4m5!1s0x94ce410d0af2fea3%3A0xf3615f20a8956222!2sAcademia%20Volkswagen!3m2!1d-23.7278447!2d-46.5510522!5e0!3m2!1spt-BR!2sbr!4v1669252875520!5m2!1spt-BR!2sbr";
                break;
              
        }
    }
    else if (par == 'visi'){
        switch (des){
            case 'polo':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3652.4150065540402!2d-46.54910433518502!3d-23.732575884598162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x94ce41a247a6cb75%3A0x1896dfdbaafacaaa!2sPortaria%20de%20Visitantes%20Volkswagen!3m2!1d-23.7296288!2d-46.5486681!4m5!1s0x94ce41e1617f54f9%3A0x20889d4ad4e5c17b!2sPolo%20Restaurante!3m2!1d-23.7355372!2d-46.5464558!5e0!3m2!1spt-BR!2sbr!4v1669149838096!5m2!1spt-BR!2sbr";
                break;
            case 'ala14':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7304.700131316416!2d-46.54996802562901!3d-23.734892938387894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x94ce41a247a6cb75%3A0x1896dfdbaafacaaa!2sPortaria%20de%20Visitantes%20Volkswagen!3m2!1d-23.7296288!2d-46.5486681!4m5!1s0x94ce41ae3ceb7c99%3A0xbc97adaf780ec412!2sEngenharia%20de%20Processos%20VW!3m2!1d-23.73985!2d-46.5458466!5e0!3m2!1spt-BR!2sbr!4v1669149746543!5m2!1spt-BR!2sbr";
                break;
            case 'fpilo':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3652.4277807206845!2d-46.54910433518515!3d-23.73212008459839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x94ce41a247a6cb75%3A0x1896dfdbaafacaaa!2sPortaria%20de%20Visitantes%20Volkswagen!3m2!1d-23.7296288!2d-46.5486681!4m5!1s0x94ce41425f8f25e3%3A0x2a21a0f0a5fe747c!2sF%C3%A1brica%20Piloto%20VW%20Anchieta!3m2!1d-23.7345567!2d-46.5457554!5e0!3m2!1spt-BR!2sbr!4v1669149882064!5m2!1spt-BR!2sbr";
                break;
            case 'ala8':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3652.4140620748854!2d-46.55288108518513!3d-23.73260958459815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x94ce41a247a6cb75%3A0x1896dfdbaafacaaa!2sPortaria%20de%20Visitantes%20Volkswagen!3m2!1d-23.7296288!2d-46.5486681!4m5!1s0x94ce41a6c6b623af%3A0x3c4b6813d23e82a3!2sVolkswagen%20ala%208!3m2!1d-23.7347221!2d-46.551280899999995!5e0!3m2!1spt-BR!2sbr!4v1669149960329!5m2!1spt-BR!2sbr";
                break;
            case 'visi':
                alert('Verifique seu destino');
                break;
            case 'pormate':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7304.692804609136!2d-46.5499680256291!3d-23.735023638387705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x94ce41a247a6cb75%3A0x1896dfdbaafacaaa!2sPortaria%20de%20Visitantes%20Volkswagen!3m2!1d-23.7296288!2d-46.5486681!4m5!1s0x94ce41b189e23869%3A0x74c01463ae951dc2!2sPortaria%20Materiais%20Volkswagen!3m2!1d-23.7404293!2d-46.543670299999995!5e0!3m2!1spt-BR!2sbr!4v1669150047086!5m2!1spt-BR!2sbr";
                break;
            case 'por':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7304.703800261512!2d-46.54970052562909!3d-23.73482748838808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x94ce41a247a6cb75%3A0x1896dfdbaafacaaa!2sPortaria%20de%20Visitantes%20Volkswagen!3m2!1d-23.7296288!2d-46.5486681!4m5!1s0x94ce41b3d8800211%3A0x280791f734df039d!2sVolkswagen%20do%20Brasil%20-%20Portaria%20F!3m2!1d-23.739003399999998!2d-46.5426992!5e0!3m2!1spt-BR!2sbr!4v1669150128952!5m2!1spt-BR!2sbr";
                break;
            case 'ala3':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1826.227572178259!2d-46.5497652310833!3d-23.73114368432614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m5!1s0x94ce41a247a6cb75%3A0x1896dfdbaafacaaa!2sPortaria%20de%20Visitantes%20Volkswagen%20-%20Jardim%20Andrea%20Demarchi%2C%20S%C3%A3o%20Bernardo%20do%20Campo%20-%20SP!3m2!1d-23.7296288!2d-46.5486681!4m3!3m2!1d-23.732305399999998!2d-46.548052999999996!5e0!3m2!1spt-BR!2sbr!4v1669150267185!5m2!1spt-BR!2sbr";
                break;
            case 'ala5':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d7304.797796561684!2d-46.55057467562891!3d-23.73315063839133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m5!1s0x94ce41a247a6cb75%3A0x1896dfdbaafacaaa!2sPortaria%20de%20Visitantes%20Volkswagen!3m2!1d-23.7296288!2d-46.5486681!4m3!3m2!1d-23.7366478!2d-46.545035!5e0!3m2!1spt-BR!2sbr!4v1669150352105!5m2!1spt-BR!2sbr";
                break;
            case 'ala19':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d7304.665823836034!2d-46.54996802562917!3d-23.73550493838675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m5!1s0x94ce41a247a6cb75%3A0x1896dfdbaafacaaa!2sPortaria%20de%20Visitantes%20Volkswagen!3m2!1d-23.7296288!2d-46.5486681!4m3!3m2!1d-23.7410061!2d-46.5477096!5e0!3m2!1spt-BR!2sbr!4v1669150419393!5m2!1spt-BR!2sbr";
                break;
            case 'ala11':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d7304.715532973839!2d-46.551293925629!3d-23.734618188388495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m5!1s0x94ce41a247a6cb75%3A0x1896dfdbaafacaaa!2sPortaria%20de%20Visitantes%20Volkswagen!3m2!1d-23.7296288!2d-46.5486681!4m3!3m2!1d-23.739508999999998!2d-46.5476649!5e0!3m2!1spt-BR!2sbr!4v1669150487336!5m2!1spt-BR!2sbr";
                break;
            case 'ala20':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d14608.995896341192!2d-46.554345422298894!3d-23.738499403522006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m5!1s0x94ce41a247a6cb75%3A0x1896dfdbaafacaaa!2sPortaria%20de%20Visitantes%20Volkswagen!3m2!1d-23.7296288!2d-46.5486681!4m3!3m2!1d-23.7416366!2d-46.546987699999995!5e0!3m2!1spt-BR!2sbr!4v1669150541548!5m2!1spt-BR!2sbr";
                break;
            case 'ala22':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d7304.759032289279!2d-46.552186625629126!3d-23.733842188390053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m5!1s0x94ce41a247a6cb75%3A0x1896dfdbaafacaaa!2sPortaria%20de%20Visitantes%20Volkswagen%20-%20Jardim%20Andrea%20Demarchi%2C%20S%C3%A3o%20Bernardo%20do%20Campo%20-%20SP!3m2!1d-23.7296288!2d-46.5486681!4m3!3m2!1d-23.7359962!2d-46.5504684!5e0!3m2!1spt-BR!2sbr!4v1669150594658!5m2!1spt-BR!2sbr";
                break;
            case 'ala13':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d7304.780327406312!2d-46.55129302562894!3d-23.73346228839069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m5!1s0x94ce41a247a6cb75%3A0x1896dfdbaafacaaa!2sPortaria%20de%20Visitantes%20Volkswagen!3m2!1d-23.7296288!2d-46.5486681!4m3!3m2!1d-23.7371519!2d-46.547260099999995!5e0!3m2!1spt-BR!2sbr!4v1669149629277!5m2!1spt-BR!2sbr";
                break;
            default:
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d2582.707722495216!2d-46.55011862842946!3d-23.7295327394343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m5!1s0x94ce410d0af2fea3%3A0xf3615f20a8956222!2sAcademia%20Volkswagen!3m2!1d-23.7278447!2d-46.5510522!4m3!3m2!1d-23.729614599999998!2d-46.548658499999995!5e0!3m2!1spt-BR!2sbr!4v1669253867280!5m2!1spt-BR!2sbr";
                break;
              
        }
    }
    else if (par == 'ala8'){
        switch (des){
            case 'polo':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3652.3038524718418!2d-46.54742818143956!3d-23.73654166850571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-23.7347221!2d-46.551280899999995!4m5!1s0x94ce41e1617f54f9%3A0x20889d4ad4e5c17b!2sPolo%20Restaurante!3m2!1d-23.7355372!2d-46.5464558!5e0!3m2!1spt-BR!2sbr!4v1669254462812!5m2!1spt-BR!2sbr";
                break;
            case 'ala14':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3652.2449375470514!2d-46.54692392614476!3d-23.738643397235876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-23.7347221!2d-46.551280899999995!4m5!1s0x94ce41ae3ceb7c99%3A0xbc97adaf780ec412!2sEngenharia%20de%20Processos%20VW!3m2!1d-23.73985!2d-46.5458466!5e0!3m2!1spt-BR!2sbr!4v1669254333678!5m2!1spt-BR!2sbr";
                break;
            case 'fpilo':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3652.3038524718418!2d-46.54742818143956!3d-23.73654166850571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-23.7347221!2d-46.551280899999995!4m5!1s0x94ce41425f8f25e3%3A0x2a21a0f0a5fe747c!2sF%C3%A1brica%20Piloto%20VW%20Anchieta!3m2!1d-23.7345567!2d-46.5457554!5e0!3m2!1spt-BR!2sbr!4v1669254586031!5m2!1spt-BR!2sbr";
                break;
            case 'ala8':
                alert('Verifique seu destino');
                break;
            case 'visi':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d2582.6381191260352!2d-46.549149393238714!3d-23.733045149902054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-23.7347221!2d-46.551280899999995!4m5!1s0x94ce41a247a6cb75%3A0x1896dfdbaafacaaa!2sPortaria%20de%20Visitantes%20Volkswagen!3m2!1d-23.7296288!2d-46.5486681!5e0!3m2!1spt-BR!2sbr!4v1669254678678!5m2!1spt-BR!2sbr";
                break;
            case 'pormate':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d5165.098223834756!2d-46.543652187833125!3d-23.737536027236644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-23.7347221!2d-46.551280899999995!4m5!1s0x94ce41b189e23869%3A0x74c01463ae951dc2!2sPortaria%20Materiais%20Volkswagen!3m2!1d-23.7404293!2d-46.543670299999995!5e0!3m2!1spt-BR!2sbr!4v1669254791368!5m2!1spt-BR!2sbr";
                break;
            case 'por':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d5165.098223834756!2d-46.543652187833125!3d-23.737536027236644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-23.7347221!2d-46.551280899999995!4m5!1s0x94ce41b3d8800211%3A0x280791f734df039d!2sVolkswagen%20do%20Brasil%20-%20Portaria%20F!3m2!1d-23.739003399999998!2d-46.5426992!5e0!3m2!1spt-BR!2sbr!4v1669254891023!5m2!1spt-BR!2sbr";
                break;
            case 'ala3':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3071.245962224183!2d-46.547523589071766!3d-23.734982684188463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-23.7347221!2d-46.551280899999995!4m5!1s0x94ce41a38644c0ff%3A0x604ebfecb66f8d04!2sVolkswagen%20ALA%203!3m2!1d-23.732305399999998!2d-46.548052999999996!5e0!3m2!1spt-BR!2sbr!4v1669254999300!5m2!1spt-BR!2sbr";
                break;
            case 'ala5':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d2582.597649244311!2d-46.550300255959584!3d-23.735087165496815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m5!1s0x94ce41a6c6b623af%3A0x3c4b6813d23e82a3!2sVolkswagen%20ala%208!3m2!1d-23.7347221!2d-46.551280899999995!4m3!3m2!1d-23.7366478!2d-46.545035!5e0!3m2!1spt-BR!2sbr!4v1669255147979!5m2!1spt-BR!2sbr";
                break;
            case 'ala19':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3071.2209597960373!2d-46.55048746588905!3d-23.73604346795459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m5!1s0x94ce41a6c6b623af%3A0x3c4b6813d23e82a3!2sVolkswagen%20ala%208!3m2!1d-23.7347221!2d-46.551280899999995!4m3!3m2!1d-23.7410061!2d-46.5477096!5e0!3m2!1spt-BR!2sbr!4v1669255236030!5m2!1spt-BR!2sbr";
                break;
            case 'ala11':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d2582.571171412313!2d-46.55034925119053!3d-23.736423085416597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m5!1s0x94ce41a6c6b623af%3A0x3c4b6813d23e82a3!2sVolkswagen%20ala%208!3m2!1d-23.7347221!2d-46.551280899999995!4m3!3m2!1d-23.739508999999998!2d-46.5476649!5e0!3m2!1spt-BR!2sbr!4v1669255295772!5m2!1spt-BR!2sbr";
                break;
            case 'ala20':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3071.1289704613937!2d-46.54733087570778!3d-23.739945936201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m5!1s0x94ce41a6c6b623af%3A0x3c4b6813d23e82a3!2sVolkswagen%20ala%208!3m2!1d-23.7347221!2d-46.551280899999995!4m3!3m2!1d-23.7416366!2d-46.546987699999995!5e0!3m2!1spt-BR!2sbr!4v1669255421669!5m2!1spt-BR!2sbr";
                break;
            case 'ala22':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d2582.5955090146786!2d-46.552157664547686!3d-23.735195151871164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m5!1s0x94ce41a6c6b623af%3A0x3c4b6813d23e82a3!2sVolkswagen%20ala%208!3m2!1d-23.7347221!2d-46.551280899999995!4m3!3m2!1d-23.7359962!2d-46.5504684!5e0!3m2!1spt-BR!2sbr!4v1669255490745!5m2!1spt-BR!2sbr";
                break;
            case 'ala13':
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1826.1592298901633!2d-46.550604691744134!3d-23.736020540827905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-23.7347221!2d-46.551280899999995!4m5!1s0x94ce41a64cd4a463%3A0x4e52a3266b4da685!2sQuiosque%20-%20Ala%2013!3m2!1d-23.7371519!2d-46.547260099999995!5e0!3m2!1spt-BR!2sbr!4v1669254240046!5m2!1spt-BR!2sbr";
                break;
            default:
                document.getElementById("stlgeral").src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1535.613838989572!2d-46.551067865106965!3d-23.73575843844396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x94ce41a6c6b623af%3A0x3c4b6813d23e82a3!2sVolkswagen%20ala%208!3m2!1d-23.7347221!2d-46.551280899999995!4m5!1s0x94ce410d0af2fea3%3A0xf3615f20a8956222!2sAcademia%20Volkswagen!3m2!1d-23.7278447!2d-46.5510522!5e0!3m2!1spt-BR!2sbr!4v1669255563445!5m2!1spt-BR!2sbr";
                break;
              
        }
    }
}) 