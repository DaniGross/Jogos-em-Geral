function pesquisar() {
    // Seleciona a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa")
 
    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML ="<p>Nada foi Encontrado. Você precisa digitar nome de um jogo ou genero.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

  

    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let genero = "";

    // Itera sobre cada item de dados (assumindo que 'dados' é um array de objetos)
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        genero =  dado.genero.toLowerCase()
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) ||
        descricao.includes(campoPesquisa) || 
        genero.includes(campoPesquisa)) {
            // Cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `
        }
        
    }
    
    if (!resultados){
        resultados = "<p> Nada foi Encontrado.</p>"
    }
    
    // Insere o HTML gerado na seção HTML selecionada
    section.innerHTML = resultados
}