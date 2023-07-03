//matched two array sum using for loop

let a=[1,3,4,5,2];
let b=7;
  for(i=1;i<a.length;i++){
    const num1 = a[i];
    for(j=i+1;j<a.length;j++){
      const num2 = a[j];
      if(num1+num2===b){
          console.log(num1);
          console.log(num2)
         console.log("Matched");
      }
    }
  }