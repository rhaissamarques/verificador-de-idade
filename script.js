function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERROR] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        // res.innerHTML = `Idade calculada: ${idade}`
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 15 ) {
                //criança
                img.setAttribute('src', 'fotocriancamenino.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'fotohomemadulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'fotoidoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 15 ) {
                //criança
                img.setAttribute('src', 'fotocriancamenina.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'fotomulheradulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'fotoidosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos: ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}