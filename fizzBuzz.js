// Write your solution below this line:
for(let i = 0; i <= 50; i++) {
    if((i % 3 === 0) && (i % 5 === 0)) {
        console.log('Fizzbuzz')
    } else if(i % 3 === 0) {
        console.log('Fizz')
    } else if(i % 5 === 0) {
        console.log('buzz')
    } else {
        console.log(i)
    }
}
