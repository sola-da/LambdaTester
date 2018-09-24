





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[6] = 3.6513082634841774e+307
argument2['h'] = ["&","_","N","B","Lxs","}6S"]
return a/b*c
};
var argument2 = {"618":100,"627":1.3746811426083933e+308,"":"","+":"6","-1":1.6695764204979805e+308,"1.4652161066718513e+308":6.751188789785484e+307,"6.163232104742726e+307":"","gw":3.15059820363524e+307};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[7] = ["q","d",")"]
argument5[5] = null
base_1[1] = null
return a/b/c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[7] = true
argument5[1.7121211182125595e+308] = {"0":6.531748146095468e+307,"Z":"","2.5725694108941143e+306":1.0454095889878548e+308,"!G":"8","2.64744018376041e+307":"I","":213,"@@c%":"","1.6701848014953511e+308":100,"5e-324":"d"}
argument5['K'] = 242
return a*b+c
};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = {"122":1.172633912428888e+308,"3.068704069596794e+307":"","7.469146188592346e+307":1.138784297350255e+308,"rJ":4.034722119988351e+307,"":"-","Sh":""}
argument7[4.224481734419934e+307] = null
return a+b-c
};
var argument7 = r_3;
var base_0 = ["d","*4"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["d","*4"]
var r_1= undefined
try {
r_1 = base_1.filter(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["d","*4"]
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["d","*4"]
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test567.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)