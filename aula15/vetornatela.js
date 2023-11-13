var num = [5, 8, 2, 9, 3]
num.push(7)
console.log(num)
console.log(num.length)

console.log(`O primeiro valor do vetor é ${num[0]}`)


/* segundo exemplo */

var valores = [8, 4, 2, 5, 7, 9]
console.log(valores)
console.log(valores[1])


for(pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}



/* terceiro exemplo */ 

for(var pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

/* Exemplo indexOf() */

var valores = [8, 4, 2, 5, 7, 9]
console.log(valores)
var pos = valores.indexOf(8)
console.log(`O valor 8 está na posição  ${pos}`)

/* Ou podemos escrever assim */

var valores = [8, 4, 2, 5, 7, 9]
console.log(valores)
var pos = valores.indexOf(8)

if (pos == -1) {
    window.alert('O valor não foi encontrado')
} else {
    console.log(`O valor 8 está na posição  ${pos}`)
}

