
let x=function(birthyear,currentyear){
    let age = currentyear-birthyear;
    return age; 
}
console.log(x(2005,2023))



<tr>
<th>
    <p id="fname"></p>
</th>
<th>
    <p id="ftime"></p>
</th>
<th>
    <p id="fcity"></p>
</th>
<th>
    <p id="fnumber"></p>
</th>
<th>
    <p id="fperson"></p>
</th>
<th>
    <p id="femail"></p>
</th>
<th>
    <p id="ftextarea"></p>
</th>
</tr>




let form = document.querySelector('.sign-up-Form');

 form.addEventListener('submit', e=>{
    e.preventDefault();
    document.getElementById("fname").innerHTML=form.username.value;
    document.getElementById("ftime").innerHTML=form.usertime.value;
    document.getElementById("fcity").innerHTML=form.usercity.value ;
    document.getElementById("fnumber").innerHTML=form.usernumber.value;
    document.getElementById("fperson").innerHTML=form.userperson.value;
    document.getElementById("femail").innerHTML=form.useremail.value;
    document.getElementById("ftextarea").innerHTML=form.textarea.value;
 })