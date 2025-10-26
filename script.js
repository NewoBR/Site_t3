document.getElementById('contact-form').addEventListener('submit', function(e){
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);

  document.getElementById('form-result').textContent = 'Obrigado — sua mensagem foi recebida (exemplo local).';
  form.reset();
});
