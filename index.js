 let input=document.getElementById("date");
 let result=document.getElementById("result");
 function getbirth(){
    let birthdate=new Date(input.value);
    d1=birthdate.getDate();
    m1=birthdate.getMonth();
    y1=birthdate.getFullYear();
    let curdate=new Date();
d2=curdate.getDate();
m2=curdate.getMonth()+1;
y2=curdate.getFullYear();
let y3,m3,d3;
y3=y2-y1;
if(m2>=m1){
    m3=m2-m1;
}else{
    y3--;
    m3=12+m2-m1;
}
if(d2>=d1){
d3=d2-d1;
}else{
    m3--;
    d3=getdaysinmonth(y1,m1)+d2-d1;
}
if(m3<0){
    m3=11;
    y3--;
}
result.value=`Your age is ${y3} Year and ${m3} Month and ${d3} days`;
};

function getdaysinmonth(year,month){
    return new Date(year,month,0).getDate();
}
