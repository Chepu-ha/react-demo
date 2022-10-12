// const user = {
//     name:"Max",
//     age:18,
//     gender:'male'
// }
//
// function sum(a,b){
//     return a+b
// }
//
// function showSum(a,b){
//     console.log(a + b);
// }
//
// function incAge(someUser, inc){
//     someUser.age+=inc
//     return someUser
// }
//
// console.log(sum(1, 2));
// showSum(2,3)
// incAge(user, 2)

const user: { name: string, age: number, gender: string } = {
    name: "Max",
    age: 18,
    gender: "male"
}

const sum = (a: number, b: number): number => {
    return a * b
}

const showSum = (a: number, b: number) => {
    console.log(a + b)
}

const incAge = (someUser: object, inc: number): object => {
    someUser["age"] += inc
    return someUser
}

export {user, sum, showSum, incAge}