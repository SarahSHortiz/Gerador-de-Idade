document.getElementById("verificarBNT").addEventListener("click", function(){
    // ele pegou p botão do html
var idade= document.getElementById("idadeInput").value;
    //  ele pegou a idade no html

      // se ele tiver + ou = a 18 anos então ele "será maior de idade" se não for "sera menor"
if (idade >= 18){
    document.getElementById("resultado").textContent = "você é maior de idade"
}     

else{
    document.getElementById("resultado").textContent = "você é menor"
}
})