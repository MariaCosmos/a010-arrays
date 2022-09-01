//exercicio 3

let array1 = [3,9,5]
let array2 = ["banana", "maça", "melancia"]
let array3 = [9,true,"melão"]

console.log(array1)
console.log(array2)
console.log(array3)

//exercicio 2

console.log("quantidade de itens da 1° lista:", array1.length)
console.log("quantidade de itens da 2° lista:", array2.length)
console.log("quantidade de itens da 3° lista:", array3.length)

console.log("1° item da 1° lista:", array1[0])
console.log("2° item da 2° lista:", array2[1])
console.log("3° item da 3° lista:", array3[2])

console.log(array1.includes(9))
console.log(array3.includes(666))

//exercicio 3 

let array1Copia = array1.slice() 
let array2Copia = array2.slice()
let array3Copia = array3.slice()

array1Copia.push(333)
console.log(array1)
console.log(array1Copia)

array2Copia.splice(2,1)
console.log(array2)
console.log(array2Copia)

array3Copia.splice(1,1)
console.log(array3)
console.log(array3Copia)