//Parent Class

class Car{
    constructor(color,model){
        this.color = color;
        this.model = model;
    }
    startEngin(){
        console.log("This is strat engin method of Car class");
    }
}

//child class
class Bike extends Car{

}
let newBike = new Bike("Black",2023)
console.log(newBike);

let honda = new Car("red", 2023);
console.log(honda);



//project 2
let a=[1,3,4,5,2];
let b=7;
for(i=1;i<a.length;i++){
  let num1 = a[i];
  for(j=i+1;j<a.length;j++){
    let num2 = a[j];
    if(num1+num2==b){
        console.log(num1);
        console.log(num2)
       console.log("Matched");
    }
  }
}

////increment and decrement
<body>
  <h1 id="output-area"></h1>
  <input type=button value="increment" onclick="button1()">
  <input type=button value="decrement" onclick="button2()">
  
  <script>
    var x = 0;

    document.getElementById('output-area').innerHTML = x;

    function button1() {
      document.getElementById('output-area').innerHTML = ++x;
    }

    function button2() {
      if(x!=0){
        document.getElementById('output-area').innerHTML = --x;
      }

      else{
        alert("no! you can't decrement");
      }
      
    }

  </script>
</body>