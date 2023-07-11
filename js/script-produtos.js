let quantProdutos = 1

const formatoReal = (valor) => {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

const formatoMonetario = (valor) => {
    if(valor) {
        return valor.toFixed(2)
    }
}

// JANELA QUE ABRE QUANDO CLICAM EM PRODUTOS:
const abrirJanela = () => {
    document.querySelector('.produtoWindowArea').style.opacity = 0 // 
    document.querySelector('.produtoWindowArea').style.display = 'flex'
    setTimeout(() => document.querySelector('.produtoWindowArea').style.opacity = 1, 150)
}

// PREENCHIMENTO DAS INFORMAÇÕES NA JANELA DOS PRODUTOS:
const preencheDadosJanela = (item) => {
    document.querySelector('.produtoBig img').src = item.img // acessando os elementos do dicionário
    document.querySelector('.produtoInfo h1').innerHTML = item.name
    document.querySelector('.produtoInfo--desc').innerHTML = item.description
    document.querySelector('.produtoInfo--actualPrice').innerHTML = formatoReal(item.price[0])
}

// FECHAMENTO DA JANELA:
const fecharJanela = () => {
    document.querySelector('.produtoWindowArea').style.opacity = 0 // 
    setTimeout(() => document.querySelector('.produtoWindowArea').style.display = 'none', 500)
}

// AÇÃO PRO FECHAMENTO DA JANELA:
const botoesFechar = () => {
    document.querySelectorAll('.produtoInfo--cancelButton').forEach( (item) => item.addEventListener('click', fecharJanela) )
}


//

// PREENCIMENTO DOS DADOS DE PRODUTOS QUE FICAM EXIBIDOS NA TELA:
const preencheDadosProdutos = (produtoItem, item, indice) => {
    // setar um atributo para identificar qual elemento foi clicado
	produtoItem.setAttribute('data-key', indice)
    produtoItem.querySelector('.produto-item--img img').src = item.img
    produtoItem.querySelector('.produto-item--price').innerHTML = formatoReal(item.price[0])
    produtoItem.querySelector('.produto-item--name').innerHTML = item.name
    
}

// MAPEAMENTO DOS PRODUTOS:
produtosJson.map((item, indice) => {
    let produtoItem = document.querySelector('.models .produto-item').cloneNode(true)

    document.querySelector('.produto-area').append(produtoItem)

    // preencher informações dos produtos:
    preencheDadosProdutos(produtoItem, item, indice)
    
    // SE ALGUM PRODUTO FOR CLICADO:
    produtoItem.querySelector('.produto-item a').addEventListener('click', (e) => {

        e.preventDefault()

        abrirJanela()
        
        preencheDadosJanela(item)

		// quantidade inicial (1)
		document.querySelector('.produtoInfo--qt').innerHTML = quantProdutos
        
    })
    
    botoesFechar()
    
})

const mudarQuantidade = () => {
    document.querySelector('.produtoInfo--qtmais').addEventListener('click', () => {
        quantProdutos++
        document.querySelector('.produtoInfo--qt').innerHTML = quantProdutos
    })

    document.querySelector('.produtoInfo--qtmenos').addEventListener('click', () => {
        if(quantProdutos > 1) {
            quantProdutos--
            document.querySelector('.produtoInfo--qt').innerHTML = quantProdutos	
        }
    })
}
// MUDA QUANTIDADE COM OS BOTÕES + E -
mudarQuantidade()

