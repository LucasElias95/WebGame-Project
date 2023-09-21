const Fire = document.getElementById('poderFogo');
const resistencia = document.getElementById('resistencia')

const custoArmas = {
'soco': 50,
'taco': 80,
'faca': 100,
'taurus': 200,
'glock': 350,
'magnun': 600,
'desert': 1500,
'uzi': 3000,
'mp5': 6000,
'762': 15000,
'ak47': 20000,
'ar15': 35000,
'm16': 50000,
  };

  const forcaArmas = {
    'soco': 1,
    'taco': 3,
    'faca': 5,
    'taurus': 10,
    'glock': 20,
    'magnun': 30,
    'desert': 70,
    'uzi': 140,
    'mp5': 280,
    '762': 500,
    'ak47': 600,
    'ar15': 750,
    'm16': 1000,
      };


      const custoEquip = {
        'simples': 500,
        'reforcado': 800,
        'completo': 1000,
      }
    const forcaEquip ={
        'simples': 30,
        'reforcado': 50,
        'completo': 80,
    }



      // Função para obter o valor atual da Poder de Fogo do armazenamento local
function getPoderFogo() {
    const fogo = localStorage.getItem('poderFogo');
    return fogo ? parseInt(fogo) : 0;
}

// Função para atualizar o valor da Poder de Fogo na página e no armazenamento local
function atualizarFire(novoValor) {
    localStorage.setItem('poderFogo', novoValor.toString());
    Fire.textContent = novoValor;
}

// Função para obter o valor atual de Resistencia do armazenamento local
function getReistencia() {
    const resist = localStorage.getItem('resistencia');
    return resist ? parseInt(resist) : 0;
}

// Função para atualizar o valor de resistencia na página e no armazenamento local
function atualizarResistencia(novoValor) {
    localStorage.setItem('resistencia', novoValor.toString());
    equip.textContent = novoValor;
}

// Função para verificar se uma arma já foi comprada
function armaJaComprada(arma) {
    const armasCompradas = JSON.parse(localStorage.getItem('armasCompradas')) || [];
    return armasCompradas.includes(arma);
}

// Função para marcar uma arma como comprada
function marcarArmaComoComprada(arma) {
    const armasCompradas = JSON.parse(localStorage.getItem('armasCompradas')) || [];
    armasCompradas.push(arma);
    localStorage.setItem('armasCompradas', JSON.stringify(armasCompradas));
}


// Adicione um evento de clique para o botão "Comprar" de armas
document.getElementById('comprarArmaForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const armaSelecionada = document.getElementById('armasSelect').value;
    const custoDaArma = custoArmas[armaSelecionada];
    const dinheiroAtual = getDinheiro();

    if (dinheiroAtual >= custoDaArma) {
        if (!armaJaComprada(armaSelecionada)) {
            // O jogador tem dinheiro suficiente e a arma ainda não foi comprada
            const novoDinheiro = dinheiroAtual - custoDaArma;
            atualizarDinheiro(novoDinheiro);

            const poderDaArma = forcaArmas[armaSelecionada];
            atualizarFire(poderDaArma);

            marcarArmaComoComprada(armaSelecionada);

            alert(`Você comprou uma ${armaSelecionada}!`);
        } else {
            // A arma já foi comprada
            alert(`Você já possui uma ${armaSelecionada}.`);
        }
    } else {
        // O jogador não possui dinheiro suficiente
        alert("Você não possui dinheiro suficiente para comprar essa arma!");
    }
})

document.getElementById('comprarEquipamentosForm').addEventListener('submit', function (e) {
    e.preventDefault();
const equipamentoSelecionado = document.getElementById('equipamentoSelect').value;
const custoDoEquipamento = custoEquip[equipamentoSelecionado];
const dinheiroAtual = getDinheiro();

if (dinheiroAtual >= custoDoEquipamento) {
        
        const novoDinheiro = dinheiroAtual - custoDoEquipamento;
        atualizarDinheiro(novoDinheiro);

        const poderEquipamento = forcaEquip[equipamentoSelecionado];
        atualizarResistencia(poderEquipamento);

        alert(`Você comprou uma ${equipamentoSelecionado}!`);
    } 
 else {
    // O jogador não possui dinheiro suficiente
    alert("Você não possui dinheiro suficiente para comprar esse equipamento!");
}})
