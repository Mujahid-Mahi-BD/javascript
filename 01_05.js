//"use strict"

// const vs let vs var vs ''
    //const stands for constant(cannot change the value of a variable after declaration)
        const userID = 23210211 //{usually we don't change userID}
        //userID = 23213232 // it's not possible
    // let can be changed but the main purpose of let is block scope
        let country = 'Bangladesh'
        country = 'Srilanka' // country can be a changable variable
    // var is exactly same as let but a global scope and it's odd to use
        var name = 'mujahid'
        name = 'mahi' // we will not use var
    // '' means no declaration just directly input values
        age = 20;
        age = 21; // extremely odd to use. plz don't use it
    // Let's print all the variables
        console.table([userID, country, name, age])
// Finished 

// Data types
    // number => 2 to the power 53:
        let number = 23120323
    // string => anything between ''/"":
        let string = "Alex's age is 20. He is a true guy"
    // bolean => true/false:
        let isMale = true
    // bigint => more than number:
        let gdp = 22n
    // null => empty object:
        let money = null
    // undefined => value isn't inserted yet:
        let result
    // Let's see all the types of these variables:
        console.table([typeof(number), typeof string, typeof isMale, typeof gdp, typeof money, typeof result])
        console.log(typeof(typeof(typeof 100)))
// Finished



// Thank you very much his majesty, and his greatness for learning something new. I hope you are enjoying whenever you read this file again. Till then, keep learning and all the very best for your future projects. Be the superior. Greatness has no boundaries. 