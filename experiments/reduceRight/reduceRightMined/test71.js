





var callbackArguments = [];
var argument1 = function (a, b) {
 callbackArguments.push(arguments) 

    return (a || '').toString() + (b || '').toString();
};
var argument2 = r_0;
var argument3 = function (a, b) {
 callbackArguments.push(arguments) 

    i++;
    if (i <= 4) {
        arr.push(a + 3);
    }
    ;
    return b;
};
var argument4 = {"242":"","607":"","618":"Fn","823":59,"":"","w":7.727264949600663e+307,"1.7976931348623157e+308":"*","6.273761714418071e+307":893,"8.648006311092279e+307":"oMV","2.2536728476945566e+307":"w"};
var argument5 = null;
var argument6 = function (a, b) {
 callbackArguments.push(arguments) 

    if (a)
        visited[a] = true;
    if (b)
        visited[b] = true;
    return 0;
};
var argument7 = 1.191052319695789e+308;
var argument8 = {"7":1.7781979659972651e+308,"100":1.4786242199779435e+308,"627":8.786098120522511e+307,"714":1.204477070740724e+308,"843":"","s":242,"b":126,"":""};
var argument9 = function (a, b) {
 callbackArguments.push(arguments) 

    return (a || '').toString() + (b || '').toString();
};
var base_0 = ["=","sxr","r","V","l","M","F","@","D"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["=","sxr","r","V","l","M","F","@","D"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["=","sxr","r","V","l","M","F","@","D"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["=","sxr","r","V","l","M","F","@","D"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument9)
}
catch(e) {
r_3= "Error"
}
function serialize(array){
return array.map(function(a){
if (a === null || a == undefined) return a;
var name = a.constructor.name;
if (name==='Object' || name=='Boolean'|| name=='Array'||name=='Number'||name=='String')
return JSON.stringify(a);
return name;
 });
}
setTimeout(function(){
require("fs").writeFileSync("./experiments/reduceRight/reduceRightMined/test71.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)