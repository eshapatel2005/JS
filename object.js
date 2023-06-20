let a={
    firstName:"Esha",
    lastName:"Patel",
    city:"Surat",
    fullName:function(){
        return this.firstName + " " + this.lastName;
    }
};
console.log(a.fullName());