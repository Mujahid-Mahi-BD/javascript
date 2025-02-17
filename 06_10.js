// Date types = [Primitive, Reference(Non-Primitive)]
    //Primitive = [String, Number, BigInt, Boolean, Null, Symbol, Undefined]
        {
            let name = 'mahi' // string
            let age = 20 // number
            let valueation = 254n // bigint
            let isAdult = true // boolean
            let savings = null // null {which is an empty object}
            let id = Symbol('mahi') // symbol
            let nothing // undefined
            console.table([typeof name, typeof age, typeof valueation, typeof isAdult, typeof savings, typeof id, typeof nothing])
        }
        // Finished
    //Reference(Non-Primitive) = [array, object, function]
        {
            let names = ['alex', 'frigeman', 'curl'] // array
            let user = {
                id: 20021,
                name: 'mahi',
                email: 'mahi@mahi.com'
            } // object
            function print(){
                console.log('Function is made by mahi')
            } // function/ function-object
            console.table([typeof names, typeof user, typeof print])
        }
        // Finished
// Finished

// Data-type conversion:
    {
        let id = '22'
        let stringToNumber = Number(id); // str-num
        console.table([typeof id, typeof stringToNumber])
        let age = 20
        let year = String(age) // num-str
        console.table([typeof age, typeof year])
        /**
          we cannot do the same for undefined or null. It cannot be converted. Rest we can no vice-versa
        */
        let stringToboolean = Boolean(stringToNumber) // num-bool
        let stringToBigInt = BigInt(stringToNumber) // num-BI
        let stringToSymbol = Symbol(stringToNumber) // num-sym
        console.table([typeof stringToboolean, typeof stringToBigInt, typeof stringToSymbol])
    }
// Finished

//Operations:
    {
        console.log(5+2, 5-2, 5*2, 5/2, 5%2, 5**2) // addition, substraction, multiplication, division, reminder, power
        console.log('Mahi'+ ' is a man')
        console.log(23 + '21')
        console.log('21' + 23)
        console.log('21' + '23')
        console.log(true + false)
    }
// Finished

//Comparison = [<, >, ==, ===, <=, >=]:
    {
        console.log('21' > '23') // checks whether it's bigger or not
        console.log('21' < 23) // smaller or not
        console.log(23 == '23') // equal or not
        console.log('23' === '23') // same data-type with equal or not
        console.log(23 <= 21) //smaller or equal or not
        console.log(23 >= 21) //greater or equal or not
    }
// Finished

// Stack and Heap
    // Stack memory contains primitive data-type: [doesn't change the reference]
        {
            let name1 = 'mahi'
            let name2 = name1
            name2 = 'mujahid'
            console.table([name1, name2])
        }
        // Finished
    // Heap memory contains reference data-type: [change the reference too]
        {
            let user1 = {
                name: 'mahi',
                age: 20
            }
            console.log(user1)
            let user2 = user1
            user2.name = 'mujahid'
            user2.age = 19
            console.table([user1, user2])
        }
        // Finished
// Finished


// Thank you very much his majesty, and his greatness for learning something new. I hope you are enjoying whenever you read this file again. Till then, keep learning and all the very best for your future projects. Be the superior. Greatness has no boundaries.