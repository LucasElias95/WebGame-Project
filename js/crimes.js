const dinheiroElement = document.getElementById('dinheiro');
const idadeElement = document.getElementById('idade');
const anosElement = document.getElementById('anos')

const tempoCrime ={
  'none': 0,
  'rua': 1,
  'conveniencia': 1,
  'casa': 1,
  'carro': 1,
  'superMercado': 2,
  'caixa': 2,
  'consecionaria': 3,
  'carroForte': 3,
  'joalheria': 4,
  'banco': 6,
}

function toggleDescription(button) {
  var descricao = button.nextElementSibling;
  if (descricao.style.display === "none") {
    descricao.style.display = "block";
  } else {
    descricao.style.display = "none";
  }
}

    function calcularPoderPersonagem() {
      const forca = getForca(); 
      const inteligencia = getInteligencia(); 
      const poderDeFogo = getPoderFogo(); 
      
      return forca + inteligencia + (poderDeFogo * 0.5);
    }

    function calcularPoderPersonagemGang() {
      const forca = getForca(); 
      const inteligencia = getInteligencia(); 
      const poderDeFogo = getPoderFogo(); 
      
      return (forca*0.5) + inteligencia + (poderDeFogo * 0.5);
    }
//  Botão "Cometer crime"
document.querySelector('.crimes form').addEventListener('submit', function (e) {
  e.preventDefault();
  const crimeSelecionado = document.querySelector('#solo').value;
  const poderPersonagemAtual = calcularPoderPersonagem();
  var textoSolo = document.getElementById('textoSolo');

  const valoresDosCrimes = {
    'none': 0,
    'rua': Math.floor(Math.random() * 70) + 30,
    'casa': Math.floor(Math.random() * 200) + 150,
    'conveniencia': Math.floor(Math.random() * 200) + 400,
    'carro': Math.floor(Math.random() * 300) + 600,
    'superMercado': Math.floor(Math.random()* 300) + 1000
  };

  const dano = {
    'none': 0,
    'rua': Math.floor(Math.random() * 4) + 1,
    'casa': Math.floor(Math.random() * 3) + 5,
    'conveniencia': Math.floor(Math.random() * 5) + 8,
    'carro': Math.floor(Math.random() * 5) + 15, 
    'superMercado': Math.floor(Math.random()* 5) + 20,
  }
  
  const dificuldade = {
    'rua': 5 + Math.floor(Math.random() * 5),
    'casa': 50 + Math.floor(Math.random() * 20),
    'conveniencia': 90 + Math.floor(Math.random() * 20),
    'carro': 130 + Math.floor(Math.random() * 30),
    'superMercado': 170 + Math.floor(Math.random() * 30),
  };

  

  if (poderPersonagemAtual > dificuldade[crimeSelecionado]) {
    // Calcular os valores aleatórios a cada vez que um crime é cometido
    const valorDoCrime = valoresDosCrimes[crimeSelecionado];
    const dinheiroAtual = getDinheiro();
    const novoDinheiro = dinheiroAtual + valorDoCrime;
    atualizarDinheiro(novoDinheiro);

    const textSucessed = [
      `<p>Você botou para quebrar e ganho ${`$`+valorDoCrime}, talvez você leve jeito para a coisa!</p>`,
      `<p>É assim que se faz, "Tudo mundo no chão, isso é um assalto! Você faturou ${`$`+valorDoCrime}.</p>`,
      `<p>Mas quem diria que você irira conseguir? Não era eu... você ganhou ${`$`+valorDoCrime}</p>`,
      `<p>Seria você o próximo Jesse James? Acho que também não é para tanto, mas você conseguiu ${`$`+valorDoCrime}</p>`,
      `<p>Ninguém viu nada, ninguém sabe de nada. Você é um gênio do crime e arrecadou ${`$`+valorDoCrime}!</p>`,
      `<p>Você se saiu tão bem que até Al CApone se orgulharia de você além de ganhar ${`$`+valorDoCrime}</p>`
    ];
    
  const mensagemSucesso = textSucessed[Math.floor(Math.random() * textSucessed.length)];
  textoSolo.innerHTML = mensagemSucesso;

  //atualizar idade
const tempoDoCrime = tempoCrime[crimeSelecionado];
const idadeAtual = getIdade();
const mesesAtuais = idadeAtual % 12; // Calcula os meses atuais
const anosAtuais = getAnos();

if (mesesAtuais + tempoDoCrime >= 12) {
  const novosAnos = anosAtuais + 1;
  const novaIdade = mesesAtuais + tempoDoCrime - 12;
  atualizarAnos(novosAnos);
  atualizarIdade(novaIdade);
} else {
  const novaIdade = idadeAtual + tempoDoCrime;
  atualizarIdade(novaIdade);
}

 //danos
 const danoCausado = dano[crimeSelecionado];
 const resistenciaAtual = getResistencia();
 const vidaAtual = getVida();
 
 let novaResistencia = resistenciaAtual; // Inicialize com o valor atual
 let novaVida = vidaAtual; // Inicialize com o valor atual
 
 if (danoCausado <= resistenciaAtual) {
   // Se o dano for menor ou igual à resistência, a resistência absorve todo o dano.
   novaResistencia = resistenciaAtual - danoCausado;
 } else {
   // Se o dano for maior que a resistência, a resistência é zerada e o excesso de dano é subtraído da vida.
   novaResistencia = 0;
   novaVida = vidaAtual - (danoCausado - resistenciaAtual);
 }
 
 atualizarVida(novaVida);
 atualizarResistencia(novaResistencia);

//--------------------Mal Sucedido----------------------------------------------//
}else{
  const textFail = [
    `<p>Você é um idiota, acha mesmo que consegue viver do crime?!</p>`,
    `<p>Sabê qual é o seu grande problema? Você!.</p>`,
    `<p>Você só pode estar de brincadeira, obvio que vocÊ fracassaria</p>`,
    `<p>Não, não, não é assim!</p>`,
    `<p>O crime não compensa, mas pelo menos você nos proporcionou boas risadas</p>`,
    `<p>Fracassar no crime é um talento em si. Parabéns, você é um artista!</p>`,
    `<p>Parece que você assistiu muitos filmes de ação, mas esqueceu de estudar como os criminosos de verdade operam.</p>`,
    `<p>Sua tentativa de crime foi tão ruim que até mesmo a polícia está rindo.</p.`
  ];
  
const mensagemFail = textFail[Math.floor(Math.random() * textFail.length)];
textoSolo.innerHTML = mensagemFail;
  //atualizar idade
const tempoDoCrime = tempoCrime[crimeSelecionado];
const idadeAtual = getIdade();
const mesesAtuais = idadeAtual % 12; // Calcula os meses atuais
const anosAtuais = getAnos();

if (mesesAtuais + tempoDoCrime >= 12) {
  const novosAnos = anosAtuais + 1;
  const novaIdade = mesesAtuais + tempoDoCrime - 12;
  atualizarAnos(novosAnos);
  atualizarIdade(novaIdade);
} else {
  const novaIdade = idadeAtual + tempoDoCrime;
  atualizarIdade(novaIdade);
}

 //danos
 const danoCausado = dano[crimeSelecionado];
 const resistenciaAtual = getResistencia();
 const vidaAtual = getVida();
 
 let novaResistencia = resistenciaAtual; // Inicialize com o valor atual
 let novaVida = vidaAtual; // Inicialize com o valor atual
 
 if (danoCausado <= resistenciaAtual) {
   // Se o dano for menor ou igual à resistência, a resistência absorve todo o dano.
   novaResistencia = resistenciaAtual - danoCausado;
 } else {
   // Se o dano for maior que a resistência, a resistência é zerada e o excesso de dano é subtraído da vida.
   novaResistencia = 0;
   novaVida = vidaAtual - (danoCausado - resistenciaAtual);
 }
 
 atualizarVida(novaVida);
 atualizarResistencia(novaResistencia);
 

 }});
 

 

//----------------CRIMES EM GANG-----------------------

document.querySelector('.crimesGangue form').addEventListener('submit', function (e) {
  e.preventDefault();

  const crimeSelecionado = document.querySelector('#gang').value;
  const poderPersonagemAtual = calcularPoderPersonagemGang();
  const poderM = getPoderM();
  
  var textoGang = document.getElementById('textoGang');

  const  mercenariosNecessarios ={
    'caixa': 1,
    'consecionaria': 2,
    'carroForte':2,
    'joalheria': 3,
    'banco':3,
   };
  
  const valoresDosCrimes = {
    'none': 0,
    'caixa': Math.floor(Math.random() * 1000) + 3000,
    'consecionaria': Math.floor(Math.random() * 2000) + 5000,
    'carroForte': Math.floor(Math.random() * 5000) + 8000,
    'joalheria': Math.floor(Math.random() * 10000) + 2000,
    'banco': Math.floor(Math.random() * 20000) + 50000,
  };
 
 const dano = {
    'none': 0,
    'caixa': Math.floor(Math.random() * 15) + 10, 
    'consecionaria': Math.floor(Math.random() * 5) + 30,
    'carroForte': Math.floor(Math.random() * 5) + 40, 
    'joalheria': Math.floor(Math.random() * 10) + 50, 
    'banco': Math.floor(Math.random() * 10) + 60, 
  }

  const dificuldade = {
    'caixa': 400 + Math.floor(Math.random() * 100),
    'consecionaria': 600 + Math.floor(Math.random() * 100),
    'carroForte': 800 + Math.floor(Math.random() * 200),
    'joalheria': 1200 + Math.floor(Math.random() * 200),
    'banco': 1700 + Math.floor(Math.random() * 300),
  };

  if (poderPersonagemAtual + poderM > dificuldade[crimeSelecionado] && localStorage.getItem("mercenarios") >= mercenariosNecessarios[crimeSelecionado]){
  
    // Calcular os valores aleatórios a cada vez que um crime é cometido
    const valorDoCrime = valoresDosCrimes[crimeSelecionado];
    const dinheiroAtual = getDinheiro();
    const novoDinheiro = dinheiroAtual + valorDoCrime;
    atualizarDinheiro(novoDinheiro);

    const textSucessed = [
      `<p>Você botou para quebrar e ganho ${`$`+valorDoCrime}, talvez você leve jeito para a coisa!</p>`,
      `<p>É assim que se faz, "Tudo mundo no chão, isso é um assalto! Você faturou ${`$`+valorDoCrime}.</p>`,
      `<p>Mas quem diria que você irira conseguir? Não era eu... você ganhou ${`$`+valorDoCrime}</p>`,
      `<p>Seria você o próximo Jesse James? Acho que também não é para tanto, mas você conseguiu ${`$`+valorDoCrime}</p>`,
      `<p>Ninguém viu nada, ninguém sabe de nada. Você é um gênio do crime e arrecadou ${`$`+valorDoCrime}!</p>`,
      `<p>Você se saiu tão bem que até Al CApone se orgulharia de você além de ganhar ${`$`+valorDoCrime}</p>`
    ];
    
  const mensagemSucesso = textSucessed[Math.floor(Math.random() * textSucessed.length)];
  textoGang.innerHTML = mensagemSucesso;
  

   // Atualizar idade
 const tempoDoCrime = tempoCrime[crimeSelecionado];
 const idadeAtual = getIdade();
 const mesesAtuais = idadeAtual % 12; // Calcula os meses atuais
 const anosAtuais = getAnos();
 
 if (mesesAtuais + tempoDoCrime >= 12) {
   const novosAnos = anosAtuais + 1;
   const novaIdade = mesesAtuais + tempoDoCrime - 12;
   atualizarAnos(novosAnos);
   atualizarIdade(novaIdade);
 } else {
   const novaIdade = idadeAtual + tempoDoCrime;
   atualizarIdade(novaIdade);
 }
  
  localStorage.setItem("mercenarios", 0);
  localStorage.setItem("poderM", 0);

// danos
const danoCausado = dano[crimeSelecionado];
const resistenciaAtual = getResistencia();
const vidaAtual = getVida();

let novaResistencia = resistenciaAtual; // Inicialize com o valor atual
let novaVida = vidaAtual; // Inicialize com o valor atual

if (danoCausado <= resistenciaAtual) {
  // Se o dano for menor ou igual à resistência, a resistência absorve todo o dano.
  novaResistencia = resistenciaAtual - danoCausado;
} else {
  // Se o dano for maior que a resistência, a resistência é zerada e o excesso de dano é subtraído da vida.
  novaResistencia = 0;
  novaVida = vidaAtual - (danoCausado - resistenciaAtual);
}

atualizarVida(novaVida);
atualizarResistencia(novaResistencia);
 


//--------------------Mal Sucedido----------------------------------------------//
} else if (poderPersonagemAtual + poderM <= dificuldade[crimeSelecionado] && localStorage.getItem("mercenarios") >= mercenariosNecessarios[crimeSelecionado]) {
  const textFail = [
    `<p>Você é um idiota, acha mesmo que consegue viver do crime?!</p>`,
    `<p>Sabê qual é o seu grande problema? Você!.</p>`,
    `<p>Você só pode estar de brincadeira, obvio que vocÊ fracassaria</p>`,
    `<p>Não, não, não é assim!</p>`,
    `<p>O crime não compensa, mas pelo menos você nos proporcionou boas risadas</p>`,
    `<p>Fracassar no crime é um talento em si. Parabéns, você é um artista!</p>`,
    `<p>Parece que você assistiu muitos filmes de ação, mas esqueceu de estudar como os criminosos de verdade operam.</p>`,
    `<p>Sua tentativa de crime foi tão ruim que até mesmo a polícia está rindo.</p.`
  ];
  const mensagemFail = textFail[Math.floor(Math.random() * textFail.length)];
textoGang.innerHTML = mensagemFail;
    //atualizar idade
  const tempoDoCrime = tempoCrime[crimeSelecionado];
  const idadeAtual = getIdade();
  const mesesAtuais = idadeAtual % 12; // Calcula os meses atuais
  const anosAtuais = getAnos();
  
  if (mesesAtuais + tempoDoCrime >= 12) {
    const novosAnos = anosAtuais + 1;
    const novaIdade = mesesAtuais + tempoDoCrime - 12;
    atualizarAnos(novosAnos);
    atualizarIdade(novaIdade);
  } else {
    const novaIdade = idadeAtual + tempoDoCrime;
    atualizarIdade(novaIdade);
  }

  localStorage.setItem("mercenarios", 0);
  localStorage.setItem("poderM", 0);
   
   //danos
   const danoCausado = dano[crimeSelecionado];
   const resistenciaAtual = getResistencia();
   const vidaAtual = getVida();
   
   let novaResistencia = resistenciaAtual; // Inicialize com o valor atual
   let novaVida = vidaAtual; // Inicialize com o valor atual
   
   if (danoCausado <= resistenciaAtual) {
     // Se o dano for menor ou igual à resistência, a resistência absorve todo o dano.
     novaResistencia = resistenciaAtual - danoCausado;
   } else {
     // Se o dano for maior que a resistência, a resistência é zerada e o excesso de dano é subtraído da vida.
     novaResistencia = 0;
     novaVida = vidaAtual - (danoCausado - resistenciaAtual);
   }

    atualizarVida(novaVida);
    atualizarResistencia(novaResistencia);
  
    localStorage.setItem("mercenarios", 0);
    localStorage.setItem("poderM", 0);

  }else{
    textoGang.innerHTML= `<p>"Você não possui a quantiidade de mercenários necessários você precisa ter ${mercenariosNecessarios[crimeSelecionado]}"</p>`;
  }
  
/* NÃO LEMBRO PARA O QUE ERA, MAS PARECE NÃO FAZER DIFERENÇA
// Verifique se o dinheiro já está armazenado no armazenamento local
const dinheiroAtual = getDinheiro();
if (dinheiroAtual === 0) {
  localStorage.setItem('dinheiro', ''); // Defina um valor inicial de dinheiro aqui
}

// Atualize o valor do dinheiro na página
atualizarDinheiro(dinheiroAtual);
*/
});
