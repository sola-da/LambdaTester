





var callbackArguments = [];
var argument1 = false;
var argument2 = null;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['18{'] = null
argument3[25] = 213
argument3 = null
return a*b*c/d
};
var argument5 = r_0;
var argument6 = r_0;
var argument7 = {"0":595,"157":"","1.2800771525840365e+308":9.195209211242952e+307,"_K?:":8.154143700358065e+307,"3.4327721140021677e+307":893,",#":783,"":"","J":1.8241596051246003e+307,"1.2714209598097229e+308":6.132654860904094e+307};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2][0] = {"V":1.5701157743527745e+308,"1.0195899508019878e+308":"m"}
argument7[1] = 1.0642937736978663e+308
base_1[0][4] = {"783":"^","":1.5236267103225899e+308,"-Do+":"","7.259741911957959e+307":"","X^":""}
return a/b*c*d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][0] = false
base_2[6] = {"82":"","242":"y","tbL":"","":">ac","w<AC":"aP","1.684538637410213e+308":1.7813397646710416e+307,"5.8582171153706e+307":82,"<v":25,"7OE":"p"}
argument11[5] = true
return a/b*c+d
};
var argument10 = false;
var argument11 = null;
var argument12 = r_2;
var argument13 = null;
var argument14 = r_0;
var argument15 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument14['18{'] = ""
base_3[6] = ["@ej","Q","S",607,-1]
argument12[2.1869172855352885e+307] = {"595":126}
return a/b-c/d
};
var base_0 = ["V","@","dx"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["V","@","dx"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["V","@","dx"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["V","@","dx"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13,argument14,argument15)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test308.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)