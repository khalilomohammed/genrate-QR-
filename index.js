let compute=document.getElementById("compute");
let height=document.getElementById("height");
let weight=document.getElementById("weight");
let result=document.getElementById("result");
let output=document.getElementById("output");
console.log(output);



// security anti hack
function security(){
    var myrequest=new XMLHttpRequest();
    myrequest.onreadystatechange=function(){
if(this.readyState === 4 &&this.status){
}

    }
    myrequest.open("GET","http://127.0.0.2:5500/index.html",false);
    myrequest.send()
};
       


// validtion form
function validtion(){
    if(height.value===""&&weight.value===""){
        confirm("sorry full the gabs");
    }
}



function getinputs(){
  security();
validtion();
 result.value=weight.value/height.value*height.value;
 if(result.value < 18.5){
  output.innerHTML="Under Weight";
 }else if(result.value >= 18.5 && result.value<=24.9){
    output.innerHTML="Normal Weight"
 }else if(result.value >= 25&&result.value<=29.9){
    output.innerHTML="Over Weight";
 }else{
    output.innerHTML="Obseity";
 }

};
