function verificar() {
    var data = new Date()
    //var dia = data.getDay()
    //var mês = data.getMonth()
    var ano = data.getFullYear()
    var nAno = document.getElementById('textano')
    var res = document.getElementById('res')

    if (nAno.value.length == 0 || Number(nAno.value) > ano) {
        alert('[ERRO] verifique os dados e tente novamente!')
    } else {
        var fontsex = document.getElementsByName('radsex') //não foi atribuído o qual radsex nesse caso para porder ser usado lá em baixo de uma melhor forma.
        var idade = ano - Number(nAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fontsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/foto-bebe-m.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/foto-jovem-m.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/foto-adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/foto-idoso-m.png')
            }
        } else if (fontsex[1]) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/foto-bebe-f.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/foto-jovem-f.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/foto-adulto-f.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/foto-idoso-f.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        img.style.padding = '15px'
        res.appendChild(img)
    }

}