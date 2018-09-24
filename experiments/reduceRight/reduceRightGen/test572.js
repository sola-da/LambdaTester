





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[0] = {"893":"%+x","":"","m":""}
base_0[3] = {"59":1.2942851428807114e+308,"157":"0Hg=C","823":"f","1.5662802340822946e+308":5e-324,"Ue":1.6525831431404438e+308,"Fk":1.6337711644853863e+308,"7.532737685494146e+306":9.659580130157542e+307,"1.7245377870655897e+308":"","4.020207868476994e+307":"!`"}
argument2['L'] = null
return a-b/c+d
};
var argument2 = r_0;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['F2nCX>6'] = true
argument5[655] = ["7"]
argument4[1.738403780925446e+308] = ["H",460,705,"yZ","(sCc",655,"pR",0,126]
return a/b-c/d
};
var argument4 = r_1;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0] = [242,122,893,-1,1.7976931348623157e+308,1.7976931348623157e+308,783,59]
return a*b+c*d
};
var argument6 = r_2;
var argument7 = r_1;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3 = {"213":49,"1.151243161446159e+308":2.9679619949640434e+307,"1.5118173517307163e+308":1.021315614490685e+308,"":213,"1.6496452698489395e+308":"","eiZX(_T^":969,"Pk":3.5512277209310213e+307,"t":"","8.881959842233924e+307":969}
argument9[1.1207829086460726e+308] = false
return a+b-c+d
};
var base_0 = [893,49,242,627]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,49,242,627]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,49,242,627]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,49,242,627]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test572.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)