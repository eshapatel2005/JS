let a={
    firstName:"Esha",
    lastName:"Patel",
    city:"Surat",
    fullName:function(){
        return this.firstName + " " + this.lastName;
    }
}

let b={
    firstName:"John",
    lastName:"Doe"
}

let fullName=a.fullName.bind(b);

console.log(fullName());
