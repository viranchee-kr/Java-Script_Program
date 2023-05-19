//shallow

let obj = {
    name:"ketan"
}
let user = {
    ...obj
}
user.name = "kaushtav"
console.log("obj",obj)
console.log("user",user)

//Deep
// let obj  = {
//     name:"ketan",
//   let adderss = {
//     city:"gurgaon",
//     state:"delhi"
//   }
// }
// let user = JSON.parse(JSON.stringify(obj));
// user.adderss.city= "noida"
// console.log("obj is : ", obj)

// let obj = {
//     name: "ketan",
//     let adderss = {
//        city:"gurgaon",
//        state:"delhi"
//     },
//     getData : function(){
//         return("all data is set ")
//     }
// }
// let user = JSON.parse(JSON.stringify(obj));
// user.adderss.city= "noida"
// console.log("obj is : ", obj)