

//call() method


function sayHello(){
    return "Hello " + this.name;
    }
    var obj = {name: "Esha"};
    sayHello.call(obj);
    // Returns "Hello Esha