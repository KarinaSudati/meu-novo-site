document
  .getElementById("botaoEnviar")
  .addEventListener("click", function (event) {
    event.preventDefault();
    validarFormulario();
  });
// Função para validar formulário de envio
function validarFormulario() {
  
    const nome = document.getElementById("nome").value.trim(); 
    const email = document.getElementById("email").value.trim();
    if (nome !== "" && email !== "") {
      alert("Prontinho! Você receberá as novidades por email.");
  } else {
    alert("Por favor, preencha os campos nome e email!");
  }
    }
   
    
  

