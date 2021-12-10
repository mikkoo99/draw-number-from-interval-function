// Liczba z przedziału 
const numberRandom = (min, max) => {
    const number = Math.random() * (max - min) + min
    return number
}
console.log(numberRandom(20, 36)); 

// Liczba całkowita z przedziału
const integerNumberRandom = (min,max)=>{
    const number = Math.floor(Math.random()*(max-min+1)+min)
    return number
}
console.log(integerNumberRandom(3,17));