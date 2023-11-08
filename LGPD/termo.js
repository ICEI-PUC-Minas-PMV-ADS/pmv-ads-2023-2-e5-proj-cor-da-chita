$(document).ready(function() {
   
    $("#botao-aceitar").click(function() {
 
      var mensagem = "Você confirma que leu e concorda com o presente termo de consentimento para tratamento de dados pessoais?";
      var resposta = confirm(mensagem);
  
      if (resposta) {
     
        var mensagemConfirmacao = "Obrigado! Seu consentimento foi registrado.";
        window.alert(mensagemConfirmacao);
      } else {
        // O usuário não aceitou o termo de consentimento

      }
    });
  });
  