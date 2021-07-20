function add(num1,num2){
    var sum=num1+num2;
    return sum;
};
function sub(num1,num2){
    var sub=num1-num2;
    return sub;
};
function div(num1,num2){
    var divid=num1/num2;
    return divid;
};
function mul(num1,num2){
    var mul=num1*num2;
    return mul;
};
function main(){
    
    console.log("Addition = "+add(10,20));
    console.log("subtracion = "+sub(50,20));
    console.log("division = "+div(90,3));
    console.log("mulitiplication = "+mul(10,20));
}
main();
console.log("----last statement execution-------");