

//apply() method


function saySomething(message){
    return this.name + " is " + message;
    }
    var person4 = {name: "Esha"};
    saySomething.apply(person4, ["awesome"]);