





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4][3] = {"893":122,"t":""}
base_0[2] = 460
argument2['{S'] = true
return a*b*c-d
};
var argument2 = false;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1] = {"0":" ","122":9.990687778687148e+307,"460":783,"969":157,"":213,"FIzp":"T","qFpn":"","97i":"","5.568477263969678e+306":""}
return a/b*c*d
};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1] = "J"
return a*b-c*d
};
var argument5 = false;
var argument6 = false;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[5] = {}
argument8['F2nCX>6'] = true
argument8['^N'] = {"157":6.5487667246112065e+307,"403":627,"823":-100,"5.144055343020953e+307":"+","3.7170742390941417e+306":"CI","":"","1.4856450029912693e+308":"[E","DG":4.846879412151112e+306,"#,g":"J5"}
return a+b*c-d
};
var base_0 = [823,25,0,460,403,627,655,-100,627,893]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,25,0,460,403,627,655,-100,627,893]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,25,0,460,403,627,655,-100,627,893]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,25,0,460,403,627,655,-100,627,893]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test354.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)