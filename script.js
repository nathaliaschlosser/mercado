document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formCadastro');
  const mensagemSucesso = document.getElementById('mensagemSucesso');

  form.addEventListener('submit', (event) => {
    // Impede o recarregamento padrão da página ao enviar
    event.preventDefault();

    // Captura os dados digitados
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    // Exibe a mensagem de confirmação personalizada
    mensagemSucesso.style.display = 'block';
    mensagemSucesso.innerHTML = `✨ <strong>Obrigado(a), ${nome}!</strong><br>Seu cadastro foi realizado com sucesso. Enviamos a confirmação para <em>${email}</em>.`;

    // Limpa os campos do formulário
    form.reset();

    // Oculta a mensagem de sucesso após 6 segundos
    setTimeout(() => {
      mensagemSucesso.style.display = 'none';
    }, 6000);
  });
});