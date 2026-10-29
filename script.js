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
function createGhost() {
  const ghost = document.createElement('div');
  ghost.classList.add('ghost');
  ghost.innerHTML = '👻';

  const startY = Math.random() * window.innerHeight;
  const endY = startY + (Math.random() * 200 - 100);

  ghost.style.setProperty('--start-y', `${startY}px`);
  ghost.style.setProperty('--end-y', `${endY}px`);

  const duration = Math.random() * 4 + 3;
  const size = Math.random() * 2 + 2;

  ghost.style.animationDuration = `${duration}s, 0.3s`;
  ghost.style.fontSize = `${size}rem`;
  ghost.style.top = '0px';

  document.body.appendChild(ghost);

  setTimeout(() => {
    ghost.remove();
  }, duration * 1000);
}

setInterval(createGhost, 400);