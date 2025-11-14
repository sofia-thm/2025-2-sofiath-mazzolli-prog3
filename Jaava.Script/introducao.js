/*introducao javascript*/
/*referncia um elemento do html sla
se referenciar elemento do html q nao foi adicionado, bglh buga
nao é qq situação q bota script!!!!!!!

javascript: ajuda a deixar a pagina mais dinamica
nao é compilada -> pode nao aparecer alguma coisa na hora, mas uma hora vai aparecer
javascript -> muitos elementos do python

javascript =/= java
script - front end
java - back end

atributo = propriedade

objeto: cachorro
atributos: peso, tamanho, cor
movimentação: latir(), correr()

no browser: document. muito usado

debugar bug usando firebug. nao da pra usar o vs
tem q inspecionar

ex de imagem:
<img id="cara" onclick="alert('triste');src="images/cara_triste.jpg"/>

onclick - quando crica (evento de cricar)
oncontextmenu - quando crica co direito (evento de cricar)
ondblclick - quando crica duas veis (evento de cricar)
onmouseleave - quando tira o mause (evento de mouse)
etc
tabela na net: https://www.w3schools.com/js/js_events.asp
vai tomando

<script>
    function sorrir(){
        document.getElementById("cara").src = "images/cara_feliz.jpg";
    }
</script>

parentesis de sorrir ta vazio pq sim <3 nao entendi oq ele falou
document.getElementById -> um elemento definido no html q ce ta puxando pro java. nesse caso, "cara" :P


declaração de variavel
pode ser var, let ou const. mas vamos usar let por ora
só pode criar um simbolo em um dos jeitos. nao da pra fazer var a, let a, const a. Só da pra fazer em um só
case sensitive
tipagem dinamica
--> variavel mesmas regras do C e python. exceto q nao da pra usar numero no começo.
--> ta podendo usar _ e $ no começo da variavel

var a = "exemplo"
var b = 'exemplo';
var c = 543
var d = ["ex1", 43, 'ex2', true]
var D = function(){console.log("Olá mundo!")}
    */
