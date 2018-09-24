





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][1.4677087964888306e+308] = 5.367798110293054e+307
base_0['length'] = 9.687491817513533e+307
return a*b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3] = true
argument4[157] = ["Sda",607,"H5>*m","Z",59,126,0]
base_1[5] = {"49":1.7152186069107576e+308,"126":5.441487820734536e+307,"FX":"0TOJ","":843,"1.0943166209001831e+308":";","8.017633214005706e+307":"","T;":1.0649488299276588e+308,"3.872163366382164e+306":783,"$eDV":"<"}
return a*b*c
};
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['A'] = {"403":595,"":100,"2.923788569477153e+307":783,"1.7572664759159699e+308":"","bl":":I","yO":""}
argument5[403] = {"0":893,"59":2.7603434586499894e+307,"9=Vq":"&","":655,"f":"z","Js":122,"1.287842975824052e+308":"O","V":""}
return a*b-c
};
var argument5 = true;
var argument6 = r_0;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7 = {"5e-324":1.7976931348623157e+308,"G":1.3038263301892557e+308,"l":1.5879717380597334e+308,"1.1361589939477603e+308":"["}
return a-b-c
};
var argument8 = null;
var base_0 = ["Gq","NP","Q","-e","Q","-","h","vsK4","A"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Gq","NP","Q","-e","Q","-","h","vsK4","A"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Gq","NP","Q","-e","Q","-","h","vsK4","A"]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Gq","NP","Q","-e","Q","-","h","vsK4","A"]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapGen/test111.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)