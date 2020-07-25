//BY: João Victor Rodrigues Carvalho
//25/07/2020

function enviar(){
    //Puxa o que foi digitiado dentro do input:number
    var comiloesTx = document.getElementById('comiloesNum')
    var regimeTx = document.getElementById('regimeNum')
    var adultosTx = document.getElementById('adultosNum')
    var criancasTx = document.getElementById('criancasNum')
    
    var fatiasDePizza = document.getElementById('fatias')
    var tamanhosPizzaTx = document.getElementById('tamanhosPizza')
    var restoFatias = document.getElementById('restoDeFatias')

    //Converte as variaves que foram puxadas do html(innerhtml) para Number

    var comiloesNumb = Number(comiloesTx.value)
    var regimeNumb = Number(regimeTx.value)
    var adultosNumb = Number(adultosTx.value)
    var criancasNumb = Number(criancasTx.value)

    //Faz o calculo para saber a quantidade de fatias sera necessario

    var fatiasComiloes = comiloesNumb * 4
    var fatiasRegime = regimeNumb * 1
    var fatiasAdultos = adultosNumb * 2
    var fatiasCriancas = criancasNumb * 2

    var totalFatias = fatiasComiloes + fatiasRegime + fatiasAdultos + fatiasCriancas
 
    
    fatiasDePizza.innerHTML = `Quantidade de fatias: ${totalFatias} Fatias` // Mostra a quantidade de fatias na pagina

    //Converte o numero de total de fatias em tamanhos de pizza

    var tamanhoFamilia = Math.floor(totalFatias / 10)
    totalFatias %= 10
    var tamanhoGrande = Math.floor(totalFatias / 8)
    totalFatias %= 8
    var tamanhoPequeno = Math.floor(totalFatias / 6)
    totalFatias %= 6
    var restoDeFatias = totalFatias //O resto de fatias que não entraram nos tamanhos das pizzas

    tamanhosPizzaTx.innerHTML = `Tamanho Familia = ${tamanhoFamilia} | Grande = ${tamanhoGrande} | Pequena = ${tamanhoPequeno}`
    restoFatias.innerHTML = `Fatias separadas: ${restoDeFatias}`
}