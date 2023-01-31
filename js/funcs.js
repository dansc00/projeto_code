function mudaPlano(){
    var cab = document.getElementById('cabecalho');
    var bot = document.getElementById('bot');
    var tit = document.getElementById('main_tit');
    var desc = document.getElementById('desc_tit');
    var corpo = document.getElementById('corpo');
    cab.style.height= '150px';
    cab.style.opacity= '.9';
    cab.style.transition= '1s';
    bot.style.top= '-45px';
    bot.style.transition= '1s';
    tit.style.top= '15px';
    tit.style.fontSize= '30pt';
    tit.style.transition= '1s';
    desc.style.left= '-800px';
    corpo.style.overflow= 'auto';    
}
     



