function apiCep() {
  const inputCep = document.querySelector('#cep')
  const btnCep = document.querySelector('#btnCep')
  
  const resultado = document.querySelector('.resultado')
  const cep = resultado.querySelector('.cep') 
  const logradouro = resultado.querySelector('.logradouro') 
  const bairro = resultado.querySelector('.bairro') 
  const localidade = resultado.querySelector('.localidade') 
  const uf = resultado.querySelector('.uf') 
  const ddd = resultado.querySelector('.ddd') 
  
  function exibirResultado(event) {
    event.preventDefault()
    const inputValue = inputCep.value
    buscarCep(inputValue)
  }
  
  function buscarCep(valorInput) {
    fetch(`https://viacep.com.br/ws/${valorInput}/json/`)
    .then(response => response.json())
    .then(infoCep => {
      if('erro' in infoCep) {
        alert('Cep não encontrado')
        return
      } 
  
      cep.innerText = infoCep.cep
      logradouro.innerText = infoCep.logradouro
      bairro.innerText = infoCep.bairro
      localidade.innerText = infoCep.localidade
      uf.innerText = infoCep.uf
      ddd.innerText = infoCep.ddd
      
    })
  }
  
  btnCep.addEventListener('click', exibirResultado)
}

apiCep()
