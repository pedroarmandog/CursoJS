var idade = 15
console.log (`Você tem ${idade} anos`)
if (idade < 12) {
    console.log ('Você não pode entrar na festa')
}
else if (idade >= 12 && idade <= 17) {
    console.log ('Você pode entrar mas somente com um acompanhante')
}
else if (idade >= 18 && idade <= 65) {
    console.log ('Você pode entrar na festa, seja bem vindo!')
}