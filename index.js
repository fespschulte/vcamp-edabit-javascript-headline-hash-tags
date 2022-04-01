function pegaHashTags(frase) {
    // Transforma todas os caracteres da string em minúsculo
    let fraseArray = frase.toLowerCase();
        //Utilizando expressão regular, remove todos os caracteres que não estejam localizados entre A e Z
        fraseArray = fraseArray.replace(/[^a-z ]/gi, "")
        //Cria um array de cada palavra da string que estava separada por espaços
        fraseArray = fraseArray.split(" ")
        //Ordena o array de acordo com o comprimento de cada palavra
        fraseArray = fraseArray.sort((a, b) => b.length - a.length)
        //Concatena uma hashtag antes de cada elemento do array
        fraseArray = fraseArray.map((word) => "#" + word);
    //Retorna uma string com os 3 primeiros elementos do array
    return fraseArray.splice(0, 3);
}

console.log(pegaHashTags('How the Avocado Became the Fruit of the Global Trade'));