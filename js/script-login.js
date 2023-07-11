const loginButton = document.getElementById('Cadastro');
const cadastroButton = document.getElementById('Login');

const container = document.getElementById('container');


// SE APERTAR EM "ENTRAR", ADICIONA A CLASSE:
loginButton.addEventListener('click', () => {
	container.classList.add("painel-ativo");
});

//SE APERTAR EM "CADASTRAR-SE", REMOVE A CLASSE:
cadastroButton.addEventListener('click', () => {
	container.classList.remove("painel-ativo");
});

