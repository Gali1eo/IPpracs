console.log('iterator prgram');

function fruitsIterator(values) {
    let nextIndex = 0;

    return {
        next: function() {
            if (nextIndex < values.length) {
                return {
                    value: values[nextIndex++],
                    done: false
                }
            } else {
                return {
                    done: true
                }
            }
        }
    }
}

const myArray = ['Apples', 'Grapes', 'Oranges', 'cherry'];
console.log("My array is", myArray)

//using the ir=terator
const fruits = fruitsIterator(myArray);
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)