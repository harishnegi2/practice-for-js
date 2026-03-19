let users = {
    getFullName: function(){
    return this.name + "" + this.surname;
    },

    getAge: function(){
    let  age = new Date().getFullYear() - this.yearOfBirth;
    return age
    }

}
let student ={
    name : "HARISH",
    lastName : "Negi",
    brith : 1999,
}
let teacher ={
    name : "Arti",
    lastName : "Rawat",
    sun : "Maths",
    brith : 1980,
}