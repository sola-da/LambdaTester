





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6] = {"969":82,"":"","+":1.3361540715798495e+307,"G":"","5.356560907402237e+306":"Of",",1":"v5J","1.1478313629623202e+308":9.071239471454317e+306,"R":7.043811462265621e+307,"5.560763940920911e+307":1.5597475704880763e+308,"n<":""}
base_0 = ["g!U[","!0|","UG","a"]
argument3[1] = -100
return a-b*c*d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['!j'] = {"2.295362145602913e+307":""}
base_1[2][2.819898637310108e+307] = "U>"
base_1[3] = ["e","y","eI","-","|"]
return a*b+c/d
};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[4] = [1.7976931348623157e+308,49,969,403,705]
return a*b+c+d
};
var argument4 = r_2;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[5] = {"714":893,"":"","1.6183444314988099e+308":-1,"wu":"B'5","-100":"^>","1.1446973942704105e+308":8.028223200280866e+307,"5e-324":627,"V#":"","1.7976931348623157e+308":"#U","1.0221361535808346e+308":-1}
base_3 = {"82":"vu","460":7.139402546658857e+307,",yf^-=":714,"1.5534257997069265e+308":"","5.571603677606849e+307":1.5125220943799077e+308,"":":","L":"F","q)^+h0X":""}
argument6[4] = null
return a+b*c-d
};
var argument6 = "uI;";
var base_0 = [595,213,403,"$",783,893]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,213,403,"$",783,893]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,213,403,"$",783,893]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,213,403,"$",783,893]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument5,argument6)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test302.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)