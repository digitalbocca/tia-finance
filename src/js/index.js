const mensalidades = document.querySelector('#mensalidades')
const btnPagar = document.querySelector('#btnPagar')

const meses = [
  {
    nome: 'Janeiro',
    status: false
  },
  {
    nome: 'Fevereiro',
    status: false
  },
  {
    nome: 'Março',
    status: false
  },
  {
    nome: 'Abril',
    status: false
  },
  {
    nome: 'Maio',
    status: false
  },
  {
    nome: 'Junho',
    status: false
  },
  {
    nome: 'Julho',
    status: false
  },
  {
    nome: 'Agosto',
    status: false
  },
  {
    nome: 'Setembro',
    status: false
  },
  {
    nome: 'Outubro',
    status: false
  },
  {
    nome: 'Novembro',
    status: false
  },
  {
    nome: 'Dezembro',
    status: false
  }
]

window.meses = meses

btnPagar.addEventListener('click', () => {
  for (const mes in meses) {
    if (!meses[mes].status) {
      meses[mes].status = true
      atualizarLayout()
      return;
    }
  }
})

function atualizarLayout() {
  mensalidades.innerHTML = ''
  for (const mes of meses) {
    const divMes = document.createElement('div')
    divMes.classList.add('mes')
    if (mes.status) {
      divMes.classList.add('pago')
    }
    divMes.innerText = mes.nome
  
    mensalidades.appendChild(divMes)
  }
}

atualizarLayout()
