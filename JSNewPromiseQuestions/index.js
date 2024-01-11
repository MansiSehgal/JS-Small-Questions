//Ques 1: // Prmoises
// ------->  wait(2000).then(res => console.log("yes, I'm in."))

// const solvePromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
        
//           resolve()
//     },2000)
// })

// solvePromise.then(res=>{
//     console.log("Yes,I am In")
// }).catch(err=>{console.log(err)})


// Ques 2 : fetchData((error, data) => {
//   if (error) {
//     console.error('Error:', error);
//   } else {
//     console.log('Data:', data);
//   }
// }); 
//  -----------> Solve using callback

// Ans
// function fetchData(cb){
//     // const data = "hello world"
//     const data=""
// try{
//      if(data){
//         cb(null,data)
//     }else{
//         cb("not defined", null)
//     } 
// }catch(error){
//     console.log(error)
// }
// }

// fetchData((error, data) => {
//   if (error) {
//     console.error('Error:', error);
//   } else {
//     console.log('Data:', data);
//   }
// });


// Ques 3 : sum(5)(5)(5)() //  need to sum for n level data

// Ans : 
// function sum(value) {
//   // Base case: when the function is called without an argument, return the current value
//   if (value === undefined) {
//       return 0;
//   }
  
//   // Recursive case: return a new function that can be called with another value or parentheses
//   return function(nextValue) {
//     // If the nextValue is provided, add it to the current value and return a new sum function
//     if (nextValue !== undefined) {
//       return sum(value + nextValue);
//     }
    
//     // If no nextValue is provided, return the current value
//     return value;
//   };
// }

// // Example usage:
// const result = sum(5)(5)(5)(2)(); // You can keep adding parentheses for more levels
// console.log(result); 

// ---------->  Statically Currying 
// function sum(){
//     console.log('parent',n)
//     return function outer(m){
//         console.log('outer',m)
//         return function inner(o){
//             console.log('inner',o)
//             return m+n+o
//         }
//     }
// }
