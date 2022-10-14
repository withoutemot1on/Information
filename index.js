// class Employee
// {
//     name = " "
//     surname = " "
//     constructor(name = 'Henri',surname = 'Ford') {
//         this.name = name;
//         this.surname = surname;
//     }
//
//     PrintName()
//     {
//         return this.name
//     }
//     cape(str) {
//         return str[0].toUpperCase() + str.slice(1);
//     }
// }
//
//
//  let user = new Employee();
//  let user2 = new Employee();
//  let user3 = new Employee();
//
//
//
// console.log(user.PrintName())



class Employee
{
    #name;
    #salary;
    #age;
    constructor(name,salary,age) {

        this.#name = name;
        this.#salary = salary;
        this.#age = age;
    }
    getPrintName(){
        return this.#name
    }
    getPrintSalary(){
        return this.#salary
    }
    getPrintAge(){
        return this.#age
    }
    setPrintAge(age){
    if(this.#age >0 && this.#age <120)
    {
        return  this.#age = age
    }
    else {
       throw new Error('age is incorrect');
    }
    }
    // UpSalary(str){
    //     return (str += str*0.1)
    //
    // }
    // show(){
    //     return this.#name
    // }
}

let user = new Employee('Tom', 15000,20);

console.log(user.getPrintSalary(),user.getPrintAge(),user.setPrintAge(120));

//
// class User {
//     #name;
//     #surn;
//
//     setName(name) {
//         this.#name = name;
//     }
//     setSurn(surn) {
//         this.#surn = surn;
//     }
//
//     getName() {
//         return this.#name;
//     }
//     getSurn() {
//         return this.#surn;
//     }
//
// }
// let Usser = new User;
// Usser.setName('john');
// Usser.setSurn('smit');
// console.log(Usser.getName());
// console.log(Usser.getSurn());










