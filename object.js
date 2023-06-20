
let a={
    firstName:"Esha",
    lastName:"Patel",
    city:"Mumbai",
    fullName:function(){
        return this.firstName + " " + this.lastName;
    }
};
console.log(a.fullName());