// Intercepta o submit e mostra mensagem (exemplo local)
document.getElementById('contact-form').addEventListener('submit', function(e){
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  // Aqui você poderia enviar para um backend via fetch()
  // Exemplo: fetch('/api/contact', { method:'POST', body: data })
  document.getElementById('form-result').textContent = 'Obrigado — sua mensagem foi recebida (exemplo local).';
  form.reset();
});
