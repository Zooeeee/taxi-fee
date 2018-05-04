module.exports = function main(inputs){
//判断函数
function judge(num){
    if (num<=2 && num >=0)
    return fee_1(num);
    else if (n>2 && n<=8)
    return fee_2(num);
    else if(n>8)
    return fee_3(num);
    else 
    return "Error"}
//取整(四舍五入)
function int(num){
    num = num + 0.5;
    return parseInt(num);
}
//加入waiting time 计费
function add_wait_time(num1,num2){
return num1 + num2*0.25;
}

function fee_1(num){
    return 6 ;
}
function fee_2(num){
    var n = num-2;
    return n*0.8+6;
}
function fee_3(num){
    var n = num-8;
    return n*1.2 + 10.8
}

var n = int(inputs[0]);
n = judge(n);
n = add_wait_time(n , inputs[1]);
n = int(n);
return n ;

};