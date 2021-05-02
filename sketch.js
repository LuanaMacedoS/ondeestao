//Prova3:
//https://www.youtube.com/watch?v=s7TIa6PkG38

/*O jogo é controlado dentro da função draw por vários if's, e principalmente pela variavel "tela" que 
vai sendo incrementada ao longo do jogo.

Telas de 0 a 3, são telas que não são questões do jogo própriamente ditas, são instruções, créditos e 
etc.

Apartir da tela 4 a variavel "tela" vai sendo salva (em cada nível) na variavel "stela", pois quando o jogador acerta ou erra, a variavel tela é jogada para as funções de parabens ou de erro, após isso é 
possível resgatar em que nível o jogador estava apartir da variável "stela"
Em caso de erro retornar para onde estava
Em caso de acerto seguir para o próximo nível */
let aplausos
let sadsong
let musicafundo
let colorr = ['orange','cyan', 'yellow']
let palmas
let sad 
let escola
let fundomenu
let fundo2
let material1
let material2
let fundocreditos
let fundodase1
let positivo = ['É isso aí', 'Incrível', 'Parabéns', 'Fantástico']
let negativo = ['Tente novamente', 'Não foi dessa vez','Na próxima você consegue']
let wordn
let word  
var stela=0
var x = 133
var y = 170
var x1 = 300
var y1 = 300
var tela = 0
var opcao = 1
var robstaculo = 80, rjogador=25;
var ycerto , xcerto, yerro, xerro
var erro = 4444
var parabens = 5555
var cont=0 
var contseg = 0
var rate = 30
var i = 0

function preload() {
  palmas = loadImage('palmas.gif')
  fundomenu = loadImage('meninomenu1.png');
  fundo2 = loadImage('fundo2.png');
  fundocreditos = loadImage('fundocreditos1.png');
  fundofase1 = loadImage('fase_1.png');
  sad = loadImage('bobsad.gif')
  escola = loadImage('escola.png')
  musicafundo = createAudio('musica.mp3')  
  sadsong = createAudio('asad.mp3')
  aplausos = createAudio('aplausos.mp3')
  material1 = loadImage('material1.png')
  material2 = loadImage('material2.png')

 }


function setup() {
  createCanvas(625,625);
  frameRate(30)
  /*variaveis aléatórias são setadas a primeira vez*/
  word = random(positivo);
  wordn = random(negativo);
  cor = random(colorr);
  i=100
  
}



  function draw() {
  if (tela == 0){
   musicafundo.loop()
   menu()   
  }
    
  if (tela == 1) {
    stela=tela
   inicio()  
     if(contseg<5){
      cont++
      contseg=parseInt(cont/rate)
                    }
      else{
      tela=stela+3
      cont=0
      contseg=0
           }
  }

  if (tela == 2){
    instrucoes()
  }
    
 if (tela == 3){
    creditos()   
  }
    if (tela==4){
      stela=tela
      fase1()
      movimentação()

      
    }
    
    if (tela==5){
      stela=tela
      fase2()
      movimentação()
      
    }
    
    
  if (tela == 6){
    /*o valor de tela está sendo armazenado na variável stela, pois dependendo da resposta o programa direcionará a 
    variavel tela para parabens ou erro, e para o valor do nível atual não ser perdido, armazenamos aí*/
      stela=tela
    fase3() 
    movimentação()
  }
  
  if(tela==7){
    stela=tela
    fase4()
     movimentação()
    }
    
    if(tela==8){
      stela=tela
      fase5explica()
      
      if(contseg<5){
      cont++
      contseg=parseInt(cont/rate)
                    }
      else{
      tela=stela+1
      cont=0
      contseg=0
           }
      
    }   
    if(tela==9){
    stela=tela
    fase5()
    movimentação()

    }
    if(tela==10){
    stela=tela
    fase6()
    movimentação()

    }
    
     if(tela==11){
    stela=tela
    fase7()
        if(contseg<5){
      cont++
      contseg=parseInt(cont/rate)
                    }
      else{
      tela=parabens
      cont=0
      contseg=0

    }
    
     }
     if(tela==12){
    fase8()
 if(contseg<10){
       stela=tela
      cont++
      contseg=parseInt(cont/rate)
                    }
      else{
      tela=0
      cont=0
      contseg=0
       
    }
       
     }
  
    
  /*Sempre que o usuário acertar a pergunta a variável "parabens" será armazenado na variável tela
  o que faz com que o programa inicie o if abaixo, que é responsável por mostrar o gif da platéia batendo palma e 
  uma mensagem motivadora aleatória, que será armazenada na variável word, essas frases aleatórias estão descritas no 
  vertor chamado "positivo" no inicio do programa, nas declarações de váriáveis*/
  
  if( tela == parabens ){
  background(palmas)
    musicafundo.stop()
    aplausos.loop()
    
    /*o For a seguir repete um uma quantidade de vezes na tela as frases aleatórias que serão selecionadas*/
    for(i=100;i<700;i=i+100){
  fill(cor);
  textSize(60);
  text(word,180,i)
    }
    
    /*o if abaixo realiza o papel de um contador, dividindo o número de vezes que o programa lê o código, pela váriável "rate", que foi definida como 30 na declaração das variáveis e que também define a taxa de atualização, fazendo assim com que a variável contseg seja igual a quantidade de segundos, e permitindo que o programa fique na tela de "parabéns" por no máx 3 segundos*/
    if(contseg<3){
      cont++
      contseg=parseInt(cont/rate)
    }
    /* quando o if acima não for lido o else resetará as variáveis utilizadas nesses trechos do código para que 
    quando em próximos níveis o usuário acerte a questão, o programa faça a leitura normalmente deste trecho do 
    código*/
    else{
      
    tela=stela+1
    cont=0
    contseg=0
   /*variaveis aléatórias são resetadas aleatóriamente novamente*/
    word = random(positivo);
    cor = random(colorr);
    musicafundo.loop()
    aplausos.stop()

    }
    

    }
    
   
  if(tela==erro){
    background(sad);
    musicafundo.stop()
    sadsong.loop()

     for(i=100;i<600;i=i+100){
  fill(cor);
  textSize(30);
  text(wordn,150,i)
    }
    if(contseg<3){
      cont++
      contseg=parseInt(cont/rate)
    }
    
    else{
    tela=stela
    cont=0
    contseg=0  
        /*variaveis aléatórias são resetadas aleatóriamente novamente*/
    wordn = random(negativo);
    cor = random(colorr);
    sadsong.stop()
    musicafundo.loop()


    }
 
}

  }
//menu do jogo
    
function menu (){
  background(fundomenu);
  fill('White');
  rect(x,y, 170,45)
  fill('Black');
  textSize(35)
  text("Onde estão?",160,100)
  textSize(25)
  text("Jogar",180,200)
  text("Instruções",158,300)
  text("Créditos",168,400)
  textSize(15)
  fill('White')
  text("Utilize as setas do teclado",430,20)

  
}
//Página inicial ao clicar em jogar
function inicio (){
  background(fundo2);
  fill('Black')   
  textSize(40)
  text("Onde estão?",200,100)
  textSize(30)
  text("Ajude José escolher e encontrar \nos itens que ele deve levar para \nescola!",100,220)
  textSize(15)
  fill('Black')
  text("Pressione Esc para sair",450,20)

  
}
// página das instruções
    
function instrucoes() {
  background(fundo2);
  fill('Black')
  textSize(40)
  text("Instruções",200,50)
  textSize(20)
  text("2º ano do ensino fundamental - Geografia",50,100)
  text("Habilidade: Aplicar princípios de localização e posição de ob-\njetos (referenciais espaciais, como frente e atrás, esquerda e\ndireita, em cima e embaixo, dentro e fora) por meio de repre-\nsentações espaciais da sala de aula e da escola.",50,150)
  text("José irá para escola pela primeira vez, você deve ajudá-lo\n a escolher os materiais que ele deve levar, assim como en-\ncontrá-los, após isso José também precisará da sua ajuda\n para encontrar o caminho até a escola. \n\nVocê deve utilizar as setas no teclado para mover o cursor\n e confirmar qual a opção correta.  ",50,280)
  textSize(40)
  text("Vamos lá?",200,550)
  textSize(15)
  text("Pressione Esc para sair",450,20)
  
}
//Página dos créditos 
function creditos() {
  background(fundocreditos);
  fill('Black')
  textSize(40)
  text("Créditos",220,100)
  textSize(18)
  text("Luana de Macedo Silva\n Aluna do Curso de CET",70,380)
   textSize(18)
  text("Rosângela Maria de Moura \n                  Silva\nPedagoga com habilitação \nem Orientação Educacional, \nEspecializada em Educação\n       de Jovens e Adultos.\n",350,380)
  textSize(15)
  text("Pressione Esc para sair",450,20)
}


//Página da fase1
    
    function fase1(){
        background(material1);
  yerro = 445
  xerro = 435
  ycerto = 155
  xcerto = 455
  fill('white')
  rect(80,70, 470,45)
  textSize(30)
  fill('Black')
  text("Qual dos itens é material escolar? ",90,100)
      
    }
     function fase2(){
        background(material2);
      
  ycerto = 440
  xcerto = 450
  yerro = 180
  xerro = 430
  fill('white')
  rect(80,70, 470,45)
  textSize(30)
  fill('Black')
  text("Qual dos itens é material escolar? ",90,100)
    }
    
  function fase3(){
  /*nomação os pontos corretos e errados para comparação 
  na fase 1*/
  ycerto = 380
  xcerto = 450
  yerro = 170
  xerro = 450
  
  
  background(fundofase1);
  fill('white')
  rect(80,70, 450,45)
  fill('Black')
  textSize(25)
  text("O Material escolar está próximo à? ",90,100)
  textSize(15)
  text("Pressione Esc para sair",450,20)
  textSize(40)
  fill('White');
  rect(100,415, 145,45)
  fill('White');
  rect(305,415, 145,45)
  fill('Black')
  text(" Mesa",320,450)
  textSize(40)
  text("Cama",110,450)
  
  /*a elipse do jogador tem suas cordenadas x e y definidas 
  pelas váriáveis x1 e y1, que são controladas dentro da 
  função "movimentação", fazendo com que o cursor do 
  jogador se movimente pela tela.*/ 
  
 
  }

function fase4 (){
  yerro = 500
  xerro = 450
  ycerto = 140
  xcerto = 450
  background(fundo2);
   fill('white');
  rect(70,70, 500,90)
  fill('Black');
  textSize(27)
  text("Na imagem anterior onde se encontra \n                    o material?",100,100)
  textSize(27)
  text("Em baixo\nda mesa",450,450)
  textSize(27)
  text("Em cima\n da mesa",80,450)
  
}
    function fase5explica(){
        background(fundo2);
        fill('white');
        rect(70,70, 500,130)
        fill('Black');
        textSize(30)
        text("Agora ajude José a identificar as \nplacas de transito para chegar até \n              a escola!",100,100)

      
    }
    
     function fase5(){
  ycerto = 500
  xcerto = 550
  yerro = 140
  xerro = 550
       
  background(escola);
  fill('white');
  rect(70,70, 500,90)
  fill('Black');
  textSize(27)
  text("A placa que indica para onde está a \nescola está em baixo ou em cima?",100,100)
  textSize(50)
  text("Escola",200,390) 
  textSize(50)
  text("Hospital",250,250) 
    textSize(27)
  text("Em baixo",450,550)
  textSize(27)
  text("Em cima",80,550)
          
          
        }
    
  function fase6(){
  yerro = 500
  xerro = 550
  ycerto = 140
  xcerto = 550
  background(escola);
  fill('white');
  rect(70,70, 500,45)
  fill('Black');
  textSize(27)
  text("Indique para que lado fica a escola!",100,100)
  textSize(50)
  text("Escola",200,390) 
  textSize(50)
  text("Hospital",250,250) 
    textSize(27)
  text("Direita",450,550)
  textSize(27)
  text("Esquerda",80,550)
          
          
        }
    
    function fase7(){
     background(palmas)
    musicafundo.stop()
    aplausos.loop()

   fill('white');
  rect(70,70, 530,150)
  fill('Black');
  textSize(27)
  text("Parabéns, agora joão já sabe o que levar\npara a escola e como localizar os objetos\ne lugares!",80,100)  
    }
    
    function fase8(){
     background(fundo2)
       fill('white');
  rect(70,70, 500,300)
  fill('Black');
  textSize(27)
  text("\nLembre-se, quando as aulas presenciais\nvoltarem, leve álcool em gel e máscara, \naté que todos já tenham tomado a vaci-\nna ein! \n\n                   Proteja aos seus \n       colegas e quem você mais ama!",80,100)
      
      
    }

    
  
/*função de movimentação do cursor do jogador que será usado em todas a
fases, as setas são as responsáveis pela movimntação.*/

function movimentação(){
 if (keyIsDown(UP_ARROW)&&x1>20){
    x1=x1-10
    } 
  if (keyIsDown(DOWN_ARROW)&&x1<620) {
        x1=x1+10
  }
  
  if (keyIsDown(LEFT_ARROW)&&y1>20){
        y1=y1-10
  }
 if (keyIsDown(RIGHT_ARROW)&&y1<620){
        y1=y1+10
  }
  
  // A nomeação dos objetos, correto e errado, será feita no início de cada fase, assim os pontos serão 
  //sendo sempre subscritos e a lógica abaixo será utilizada em todas as fases com vários pontos 
  //diferentes
  
  /* Quando a distância entre o cursor do jogador e a opção correta da 
  fase colidem, o if abaixo direcionam para a tela de "Parabéns"*/
  
  
  if (dist(x1,y1,xcerto,ycerto)<=(rjogador+robstaculo)){
     x1 = 300
     y1 = 300
    tela = parabens
  }
  
  /*Quando a distância entre o cursor do jogador e a opção errada da fase 
  colidem, o if abaixo direcionam para a tela de "Erro - sad"*/
  
   if (dist(x1,y1,xerro,yerro)<=(rjogador+robstaculo)){
     x1 = 300
     y1 = 300
    tela = erro
  }
  fill(cor)
  ellipse(y1, x1, 2*rjogador);
  noFill()
  ellipse(ycerto,xcerto, 2*robstaculo,2*robstaculo);
  ellipse(yerro, xerro, 2*robstaculo,2*robstaculo);
}



//função a captura das teclas do teclado dentro do menu
function keyPressed(){
  
  if (key=="ArrowUp"&& y>200){
    y=y-100
    opcao--
  }  
  if (key=="ArrowDown"&& y<300){
        y=y+100
    opcao++
  }  
  if(key=="Enter"&&tela==0){
    tela = opcao
  }
  if(key=="Escape"){
    tela = 0
  }
  if(key=="m"&&tela==1){
    tela = 4  
  }
    
}