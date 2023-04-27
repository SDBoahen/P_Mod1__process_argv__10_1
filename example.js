// console.log( "Hey, look at the process Object: " , process )


console.log( "\n\n\n\n Look at the process.argv array: " , process.argv )

console.log( "\n\n\n\n Where the node software is located: " , process.argv[0] )

console.log( "\n\n\n\n The first parameter/argument after the file we're running: " , process.argv[2] )

//// node someFile.js argument1
//// node someFile.js argument1 argument2




function greetLastArgumentInARVG (){

    console.log( `Hey ${process.argv[2]}! 👋` )

}
greetLastArgumentInARVG()
// greetLastArgumentInARVG()




//// if our greet function DID take in an argument
// function greetLastArgumentInARVG (name){

//     console.log( `Hey ${name}! 👋` )

// }
// greetLastArgumentInARVG(process.argv[2])








//// Some Helpful Tips


//////// Since Y'all Are Just Starting Off - Create a Variable for each process.argv array element

const nodePath = process.argv[0]
const pathToJsFile = process.argv[1]

const arg1ForJsFile = process.argv[2]
// const firstArgForJsFile = process.argv[2]