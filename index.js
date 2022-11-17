// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push("Ralph");
}
console.log (destructivelyAppendCat())

cats.length = 0;
cats.push("Milo", "Otis", "Garfield")

function destructivelyPrependCat(name){
    cats.unshift("Bob");
}
cats.length = 0;
cats.push("Milo", "Otis", "Garfield")

function destructivelyRemoveLastCat(){
    cats.pop()
}
cats.length = 0;
cats.push("Milo", "Otis", "Garfield")

function destructivelyRemoveFirstCat(){
    cats.shift()
}

cats.length = 0;
cats.push("Milo", "Otis", "Garfield")

function appendCat(name){
   let copyOfCatName = [...cats,"Broom"]
   return copyOfCatName
}

function prependCat(name){
    let spreadFront = ["Arnold",...cats]
    return spreadFront
}

function removeLastCat(){
    let sliceLastCat = cats.slice(0,2)
    return sliceLastCat
}

console.log(removeLastCat())

function removeFirstCat(){
    let sliceFirstCat = cats.slice(1)
    return sliceFirstCat
}












