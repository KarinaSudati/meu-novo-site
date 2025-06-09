document
  .getElementById("botaoEnviar")
  .addEventListener("click", function (event) {
    event.preventDefault();
    validarFormulario();
  });
// Função para validar formulário de envio
function validarFormulario() {
  if (
    document.getElementById("nome").value != "" &&
    document.getElementById("email").value != ""
  ) {
    alert("Prontinho! Você receberá as novidades por email.");
  } else {
    alert("Por favor, preencha os campos nome e email!");
  }
}
