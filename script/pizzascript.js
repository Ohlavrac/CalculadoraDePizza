//BY: João Victor Rodrigues Carvalho
//25/07/2020

function enviar(){
    //Puxa o que foi digitiado dentro do input:number
    var comiloesTx = Number(document.getElementById('comiloesNum').value);
    var regimeTx = Number(document.getElementById('regimeNum').value);
    var adultosTx = Number(document.getElementById('adultosNum').value);
    var criancasTx = Number(document.getElementById('criancasNum').value);
    
    var fatiasDePizza = document.getElementById('fatias')
    var tamanhosPizzaTx = document.getElementById('tamanhosPizza')
    var restoFatias = document.getElementById('restoDeFatias')

    //Faz o calculo para saber a quantidade de fatias sera necessario

    var fatiasComiloes = comiloesTx * 4
    var fatiasRegime = regimeTx * 1
    var fatiasAdultos = adultosTx * 2
    var fatiasCriancas = criancasTx * 2

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