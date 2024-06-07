/*batalha naval*/

//function createBattleField - cria o campo de batalha de acordo. O parâmetro 'qnt' obtém o número da matriz do jogo

var  qntCasas  =  0  //Recebe a quantidade de casas que o jogo terá para fazer a distribuição dos barcos
var  jogoIniciado  =  false ;  //Variavel que determina que o jogo já começou ou não, a fim de evitar a criação de novos tabuleiros
var  tiros  =  0 ;  //contador do total de tiros dados no jogo
var  certos  =  0 ;  //contador de acerto de tiros em barcos

function  criarCampoBatalha ( qnt ) {
	qntCasas = qnt ;  //a variável qntCasas recebe o valor da quantidade de casas que o jogo terá, recebido do HTML index.html
		if ( jogoIniciado == false ) {  //se o jogo não tiver iniciado
		var  novoBr  =  documento . criarElemento ( 'br' ) ;  //espaço
		documento . corpo . anexarChild ( newBr ) ;

		for  ( var  x  =  0 ;  x  <  qnt ;  x ++ )  { 
			for  ( var  y  =  0 ;  y  <  qnt ;  y ++ )  {
				varitem  =  "div " .  concat ( x.toString ( ) , y.toString ( ) ) ;​​​​ // cada div deve ter um id único, formado pela palavra div e seu eixo xey  
				var  novaDiv  =  documento . criarElemento ( 'div' ) ;  //cria uma nova div
				novoDiv . setAttribute ( "classe" ,  "água" ) ;
				novoDiv . setAttribute ( "id" ,  item ) ;  //atribui ao id da div seu id exclusivo
				novoDiv . setAttribute ( "valor" ,  "água" ) ;  //por padrão todo valor da div é inicialmente água
				novoDiv . setAttribute ( "onclick" ,  "letsPlay(this)" ) ;  //ao clicar em uma div, é chamado a função letPlay, passando a div clicada por parâmetro
				novoDiv . estilo . largura  =  "50px" ;  //tamanho
				novoDiv . estilo . altura  =  "50px" ;  //tamanho		 
				novoDiv . estilo . fundo  =  "ciano" ;  //cor da água sem clicar
				novoDiv . estilo . display  =  "bloco embutido" ;
				novoDiv . estilo . margem  =  "1px" ;
				documento . corpo . anexarCriança ( newDiv ) ;  //adiciona a div ao html
			} ;
			var  novoBr  =  documento . criarElemento ( 'br' ) ;
			documento . corpo . anexarChild ( newBr ) ;
		} ;
		criarNavios ( ) ;  //chama a função que cria os barcos no jogo
		jogoIniciado = true ;  //define que o jogo já foi iniciado para impedir novos jogos
	}
}


/*
function createShips - cria os navios que serão utilizados no jogo:
uma porta avião, que possui 5 casas
um destruidor, que possui 2
dois cruzadores, que possuem 4 casas
*/
function  criarNavios ( ) {
	//a função delega a criação dos barcos para funções exclusivas
	definePortaAviao ( ) ;
	defineDestruidor ( ) ;
	defineCruzador1 ( ) ;
	defineCruzador2 ( ) ;
}

function  definePortaAviao ( ) {
	console . log ( "definePortaAviao" ) ;
	//define o início do barco, descendo a posição inicial
	var  inicioPortaAviaoX  =  Math . floor ( Math . random ( )  *  qntCasas )  //segue os índices do vetor, de 0-5
	var  inicioPortaAviaoY  =  Math . floor ( Math . random ( )  *  qntCasas )  //segue os índices do vetor, de 0-5
	//escolhe se o barco será desenhado no eixo x ou no eixo y
	var  eixoPortaAviao  =  Math . chão ( Math.random ( ) * 2 ) ;​​ //0 = x, 1 = y   
	//cria a porta do avião
	createPortaAviao ( inicioPortaAviaoX ,  inicioPortaAviaoX ,  eixoPortaAviao ) ;
}

function  defineDestroyer ( ) {
	console . log ( "defineDestroyer" ) ;
	//define o início do barco, descendo a posição inicial
	var  inicioDestroyerX  =  Math . floor ( Math . random ( )  *  qntCasas )  //segue os índices do vetor, de 0-5
	var  inicioDestroyerY  =  Math . floor ( Math . random ( )  *  qntCasas )  //segue os índices do vetor, de 0-5
	//escolhe se o barco será desenhado no eixo x ou no eixo y
	var  eixoDestroyer  =  Math . chão ( Math.random ( ) * 2 ) ;​​ //0 = x, 1 = y   
	//como já há um barco no jogo, é preciso verificar se o novo barco não fica sobreposto a ele, então chama a função que faz a conferência
	//e dependendo do resultado, novamente definirá outros valores para a posição inicial além da recursividade
	ans  =  conferir ( inícioDestroyerX ,  inicioDestroyerY ,  eixoDestroyer ,  2 ) ;
	if  ( resposta == falso ) {
		defineDestruidor ( ) ;
	}  outro  {
		createDestroyer ( inicioDestroyerX ,  inicioDestroyerY ,  eixoDestroyer ) ;	
	}

}
function  defineCruzador1 ( ) {
	console . log ( "defineCruzador1" ) ;
	var  inicioCruzador1X  =  Math . floor ( Math . random ( )  *  qntCasas )  //segue os índices do vetor, de 0-5
	var  inicioCruzador1Y  =  Math . floor ( Math . random ( )  *  qntCasas )  //segue os índices do vetor, de 0-5
	var  eixoCruzador1  =  Math . chão ( Math.random ( ) * 2 ) ;​​ //0 = x, 1 = y   
	ans  =  confer ( inicioCruzador1X ,  inicioCruzador1Y ,  eixoCruzador1 ,  4 ) ;
	if  ( resposta == falso ) {
		defineCruzador1 ( ) ;
	}  outro  {
		createCruzador1 ( inicioCruzador1X , inicioCruzador1Y ,  eixoCruzador1 ) ;
	}
}
function  defineCruzador2 ( ) {
	console . log ( "defineCruzador2" ) ;
	var  inicioCruzador2X  =  Math . floor ( Math . random ( )  *  qntCasas )  //segue os índices do vetor, de 0-5
	var  inicioCruzador2Y  =  Math . floor ( Math . random ( )  *  qntCasas )  //segue os índices do vetor, de 0-5
	var  eixoCruzador2  =  Math . chão ( Math.random ( ) * 2 ) ;​​ //0 = x, 1 = y   
	ans  =  confer ( inicioCruzador2X ,  inicioCruzador2Y ,  eixoCruzador2 ,  4 ) ;
	if  ( resposta == falso ) {
		defineCruzador2 ( ) ;
	}  outro  {
		createCruzador2 ( inicioCruzador2X , inicioCruzador2Y ,  eixoCruzador2 ) ;
	}
}

function  criarPortaAviao ( x ,  y ,  eixo ) {
	if ( eixo == 0 ) {  // (x) a barra fica deitada
		para ( eu = 0 ;  eu < 5 ;  eu ++ ) {
			//pega o elemento através da div com as posições sorteadas na função de definir
			var  div  =  documento . getElementById ( " div " .concat ( x.toString ( ) , i.toString ( ) ) ) ) ;​​ 
			//muda o seu atributo "value" para o tipo de barco indicado
			divisão . setAttribute ( "valor" ,  "portaAviao" ) ;
		}

	}  else  {  // (y) o barco fica em pe
		para ( eu = 0 ;  eu < 5 ;  eu ++ ) {
			var  div  =  documento . getElementById ( " div " .concat ( i.toString ( ) , y.toString ( ) ) ) ;​​​ 
			divisão . setAttribute ( "valor" ,  "portaAviao" ) ;
		}
	}
}

function  criarDestruidor ( x ,  y ,  eixo ) {
	if ( eixo == 0 ) {  // (x) a barra fica deitada
		console . log ( "criarDestroyer" ) ;
		para ( i = 0 ;  i < 2 ;  i ++ ) {
			var  div  =  documento . getElementById ( " div " .concat ( x.toString ( ) , i.toString ( ) ) ) ) ;​​ 
			//div.style.background = 'preto';
			divisão . setAttribute ( "valor" ,  "destruidor" ) ;
		}
	}  else  {  // (y) o barco fica em pe
		para ( i = 0 ;  i < 2 ;  i ++ ) {
			var  div  =  documento . getElementById ( " div " .concat ( i.toString ( ) , y.toString ( ) ) ) ;​​​ 
			//div.style.background = 'preto';
			divisão . setAttribute ( "valor" ,  "destruidor" ) ;
		}
	}
}

function  criarCruzador1 ( x ,  y ,  eixo ) {
	console . log ( 'criarCruzador1' ) ;
	if ( eixo == 0 ) {  // (x) a barra fica deitada
		para ( i = 0 ;  i < 4 ;  i ++ ) {
			var  div  =  documento . getElementById ( " div " .concat ( x.toString ( ) , i.toString ( ) ) ) ) ;​​ 
			//div.style.background = 'verde';
			divisão . setAttribute ( "valor" ,  "cruzador1" ) ;
		}
	}  else  {  // (y) o barco fica em pe
		para ( i = 0 ;  i < 4 ;  i ++ ) {
			var  div  =  documento . getElementById ( " div " .concat ( i.toString ( ) , y.toString ( ) ) ) ;​​​ 
			//div.style.background = 'verde';
			divisão . setAttribute ( "valor" ,  "cruzador1" ) ;
		}
	}
}

function  criarCruzador2 ( x ,  y ,  eixo ) {
	console . log ( "criarCruzador2" ) ;
	if ( eixo == 0 ) {  // (x) a barra fica deitada
		para ( i = 0 ;  i < 4 ;  i ++ ) {
			var  div  =  documento . getElementById ( " div " .concat ( x.toString ( ) , i.toString ( ) ) ) ) ;​​ 
			//div.style.background = 'roxo';
			divisão . setAttribute ( "valor" ,  "cruzador2" ) ;
		}
	}  else  {  // (y) o barco fica em pe
		para ( i = 0 ;  i < 4 ;  i ++ ) {
			var  div  =  documento . getElementById ( " div " .concat ( i.toString ( ) , y.toString ( ) ) ) ;​​​ 
			//div.style.background = 'roxo';
			divisão . setAttribute ( "valor" ,  "cruzador2" ) ;
		}
	}
}

function  confer ( x ,  y ,  eixo ,  tamanho ) {
	//confere se o barco vai ficar com alguma peça sobreposta a outro barco que já está no jogo
	console . log ( "conferindo" )
	if ( eixo == 0 ) {  // (x) a barra fica deitada
		for ( i = 0 ;  i < tamanho ;  i ++ ) {
			//se alguma peça ficar em uma posição que o valor seja diferente de "agua", é preciso novamente classificar posições
			var  div  =  documento . getElementById ( " div " .concat ( x.toString ( ) , i.toString ( ) ) ) ) ;​​ 
			if  ( div.getAttribute ( " valor" ) != ' água' ) {  
				retorna  falso ;  //retorna false para que o jogo sorteie novas posições
			}
		}
	}  else  {  // (y) o barco fica em pe
		for ( i = 0 ;  i < tamanho ;  i ++ ) {
			var  div  =  documento . getElementById ( " div " .concat ( i.toString ( ) , y.toString ( ) ) ) ;​​​ 
			if  ( div.getAttribute ( " valor" ) != ' água' ) {  
				retorna  falso ;
			}
		}
	}
	retornar  verdadeiro ;
}

//função que recebe o clique do jogador sobre uma das divs e informa se ele acertou a água ou algum barco
function  letPlay ( div ) {  //recebeu o objeto clicado "this"
	tipo  =  div . getAttribute ( "valor" ) ;   //pega o valor para conferir se é água ou um barco
	switch  ( tipo ) {
		case  "portaAviao" :
			alerta ( “Atingiu Porta Avião” ) ;
			divisão . estilo . fundo  =  'vermelho' ;  //altera o cor da div para indicar que é um barco
			acertos += 1 ;  //adiciona +1 ao total de acertos
			divisão . setAttribute ( "valor" ,  "portaAviaoX" ) ;
		quebrar ;
		caso  "destruidor" :
			alerta ( "Atingiu Destruidor" ) ;
			divisão . estilo . fundo  =  'verde' ;
			acertos += 1 ;
			divisão . setAttribute ( "valor" ,  "destruidorX" ) ;
		quebrar ;
		caso  "cruzador1" :
			alerta ( "Atingiu Cruzador" ) ;
			divisão . estilo . fundo  =  'amarelo' ;
			acertos += 1 ;
			divisão . setAttribute ( "valor" ,  "cruzador1X" ) ;
		quebrar ;
		caso  "cruzador2" :
			alerta ( "Atingiu Cruzador" ) ;
			divisão . estilo . fundo  =  'roxo' ;
			acertos += 1 ;
			divisão . setAttribute ( "valor" ,  "cruzador2X" ) ;
		quebrar ;
		caso  "água" :
			alerta ( "Tiro na água" ) ;  //casos tenham errado
			divisão . estilo . fundo  =  'azul' ;  //muda a tonalidade da div para um tom mais escuro de azul
		quebrar ;
	}
	tiros += 1 ;  //adiciona +1 ao total de tiros

	if ( acertos >= 15 ) {  //caso tenha acertado + de 15 tiros (a soma de todos os pedaços de todos os barcos)
		alert ( "Parabéns! Você ganhou com " + tiros + " tiros!" ) ;
		if  ( confirm ( 'Deseja continuar jogando?' ) )  {  //pergunta se o usuário deseja jogar uma nova batalha
    		localização . recarregar ( ) ;  //em caso afirmativo, reinicie a página
		}
	}
}
