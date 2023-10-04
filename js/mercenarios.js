const botaoDaRua = document.getElementById('daRua');
const botaoProfissional = document.getElementById('profissional');
const botaoMilitar = document.getElementById('militar');
const mercenariosElement = document.getElementById('mercenarios');
const poderMercenariosElement = document.getElementById('poderMercenarios');

const preços = {
    'daRua': 100,
    'profissional':200,
    'militar':300,
};

botaoDaRua.addEventListener('click', function () {
    if (localStorage.getItem("dinheiro") >= preços['daRua'] && localStorage.getItem("mercenarios") < 3) {
     
    // Diminuir o dinheiro
    const dinheiroAtual = getDinheiro();
    const novoDinheiro = dinheiroAtual - preços['daRua']; 
    atualizarDinheiro(novoDinheiro);

    //Mercenarios
    const mercenarios = getMercenarios();
    const nMercenarios = mercenarios + 1;
    atualizarMercenarios(nMercenarios);

    const poderMercenariosAtual = getPoderMercenarios();
    const forçaDaRua = 100;
    const novoPoderMercenarios = poderMercenariosAtual + forçaDaRua;
    atualizarPoderMercenarios(novoPoderMercenarios);

;

    } else if (localStorage.getItem("dinheiro") < preços['daRua']){
        
        alert("Você não possui dinheiro!");
    }
    else {
        alert("Você já possui 3 mercenários, cometa um crime para finalizar o contrato com eles e só depois você poderá contratar mais algum!");
    }
});


botaoProfissional.addEventListener('click', function () {
    if (localStorage.getItem("dinheiro") >= preços['profissional'] && localStorage.getItem("mercenarios") < 3) {
     
    // Diminuir o dinheiro
    const dinheiroAtual = getDinheiro();
    const novoDinheiro = dinheiroAtual - preços['profissional']; 
    atualizarDinheiro(novoDinheiro);

    //Mercenarios
    const mercenarios = getMercenarios();
    const nMercenarios = mercenarios + 1
    atualizarMercenarios(nMercenarios)
    
    const poderMercenariosAtual = getPoderMercenarios();
    const forçaDaRua = 200;
    const novoPoderMercenarios = poderMercenariosAtual + forçaDaRua;
    atualizarPoderMercenarios(novoPoderMercenarios);


    } else if (localStorage.getItem("dinheiro") < preços['profissional']){
        
        alert("Você não possui dinheiro!");
    }
    else {
        alert("Você já possui 3 mercenários, cometa um crime para finalizar o contrato com eles e só depois você poderá contratar mais algum!");
    }
});

botaoMilitar.addEventListener('click', function () {
    if (localStorage.getItem("dinheiro") >= preços['militar'] && localStorage.getItem("mercenarios") < 3) {
     
    // Diminuir o dinheiro
    const dinheiroAtual = getDinheiro();
    const novoDinheiro = dinheiroAtual - preços['militar']; 
    atualizarDinheiro(novoDinheiro);

    //Mercenarios
    const mercenarios = getMercenarios();
    const nMercenarios = mercenarios + 1
    atualizarMercenarios(nMercenarios)

    const poderMercenariosAtual = getPoderMercenarios();
    const forçaDaRua = 300;
    const novoPoderMercenarios = poderMercenariosAtual + forçaDaRua;
    atualizarPoderMercenarios(novoPoderMercenarios);


    } else if (localStorage.getItem("dinheiro") < preços['militar']){
        
        alert("Você não possui dinheiro!");
    }
    else {
        alert("Você já possui 3 mercenários, cometa um crime para finalizar o contrato com eles e só depois você poderá contratar mais algum!");
    }
});

atualizarMercenarios(nMercenarios);
atualizarPoderMercenarios(novoPoderMercenarios);