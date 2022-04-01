function pegaHashTags(frase) {
    let fraseArray = frase.toLowerCase();
        
        fraseArray = fraseArray.replace(/[^a-z ]/gi, "")
        fraseArray = fraseArray.split(" ")
        fraseArray = fraseArray.sort((a, b) => b.length - a.length)
        fraseArray = fraseArray.map((word) => "#" + word);
    return fraseArray.splice(0, 3);
}

console.log(pegaHashTags('How the Avocado Became the Fruit of the Global Trade'));