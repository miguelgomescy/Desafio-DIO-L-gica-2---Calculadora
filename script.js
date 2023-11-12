let level = ""

function historic(wins, lost){
let historic = wins-lost


    if (historic<10){
     level = "nivel ferro"
    }


    if ((historic >= 11) && (historic <= 20)){
       level =  "nivel Bronze"
        }

    if ((historic >=21) && (historic <= 50)){
      level = "nivel Prata"
    }


    if ((historic >=51) && (historic <= 80)){
        level =  "nivel Ouro"
    }


    if ((historic >=81) && (historic <= 90)){
        level = "nivel Diamante"
    }


    if ((historic >=91) && (historic <= 100)){
        level = "nivel Lendário"
    }

    if(historic>=101){
       level = "nível Imortal"
    }

return historic
}

let result = historic(116,5)
console.log(
    "O Herói tem de saldo de " + result + " vitórias.\nE está no: " + level + ".")


/*
Existem vários caminhos para a solução*/
