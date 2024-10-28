

let person = {
    firstName: "John",
    lastName: "Wick",
    age: 42,
    greet: function(){
        return "Hello my name is"+ " " + this.firstName + " " + this.lastName;
    }
};
console.log(person.greet());




