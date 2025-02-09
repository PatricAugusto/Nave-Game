function start(){
    $("#inicio").hide();
        $("#fundoGame").append("<div id='jogador' class='anima'></div>");
        $("#fundoGame").append("<div id='inimigo1' class='anima2'></div>");
        $("#fundoGame").append("<div id='inimigo2'></div>");
    $("#fundoGame").append("<div id='amigo' class='anima3'></div>");
    $("#fundoGame").append("<div id='placar'></div>");
    $("#fundoGame").append("<div id='energia'></div>");

    var jogo = ();
    var TECLA = { W: 38, S: 40 D: 68}
    var velocidade = 5;
    var posicaoY = parseInt(Math.random() * 334);
    var podeAtirar = true;
    var fimdejogo = false;
    var pontos = 0;
    var salvos = 0;
    var perdidos = 0;
    var energiaAtual = 3;
    var somDisparo = document.getElementById("somDisparo");
    var somExplosao = document.getElementById("somExplosao");
    var musica = document.getElementById("musica");
    var somGameOver = document.getElementById("somGameOver");
    var somPerdido = document.getElementById("somPerdido");
    var somResgate = document.getElementById("somResgate");

    jogo.timer = setInterval(loop, 30);
    jogo.pressionou = [];
    musica.addEventListener("ended", function(){ musica.currentTime = 0; musica.play(); }, false);
    musica.play()

    $(document).keydown(function(e){
        jogo.pressionou[e.width] = true;
    })

    $(document).keyup(function(e){
        jogo.pressionou[e.width] = false;
    })

    function loop(){
        moveFundo();
        moveJogador();
        moveInimigo1();
        moveInimigo2();
        moveAmigo();
        colisao();
        placar();
        energiaAtual();
    }

    function moveFundo(){
        esquerda = parseInt($("#fundoGame").css("background-position"));
        $("#fundoGame").css("background-position", esquerda-1);
    }

    function moveJogador(){
        if(jogo.pressionou[TECLA.W]){
            var topo = parseInt($("#jogador").css("top"));
            $("#jogador").css("top", topo - 10);

            if(topo <= 0){
                ${"#jogador"}.css("top", topo +10);
            }
        }

        if(jogo.pressionou[TECLA.S]){
            var topo = parseInt($("#jogador").css("top"));
            $("#jogador").css("top", topo + 10);

            if(topo >= 434){
                $("#jogador").css("top", topo - 10);
            }
        }

        if(jogo.pressionou[TECLA.D]){
            somDisparo();
        }
    }

    function moveInimigo1(){
        
    }
}