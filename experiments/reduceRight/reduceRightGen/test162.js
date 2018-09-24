





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[0] = null
return a+b*c*d
};
var argument2 = [0,122,0];
var argument3 = [213,460,714,1.7976931348623157e+308,1.7976931348623157e+308,25,783,460];
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[2] = ""
base_1['length'] = {"213":126,"":"X>","L]":1.437186133221307e+308,")":"0","0f":1.542994459195303e+308,"1.0333036211286918e+308":8.325633599369436e+307,"1.0193921682455973e+306":893,"-1":"g","1.7934322767504782e+308":""}
argument6[2] = null
return a/b-c*d
};
var argument5 = null;
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0] = {"25":8.158331452717304e+306,"":1.745658935362702e+307,"-,":1.7444305205166846e+307,"}":1.063813162096575e+308,"1.743192451803031e+308":783}
return a*b-c/d
};
var argument8 = {"1.205367971338158e+307":"^","3.2189715807195713e+307":"","x":"4","":100,"1.5718259859830486e+308":"","K":"Vc1","P":1.1091887941940969e+308};
var argument9 = null;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[7] = 403
return a*b-c+d
};
var argument11 = true;
var argument12 = {"eF":1.6170168564071e+308,"t*H":"","'":"An51",",wo":3.4160175559733943e+307,"4.911628389754153e+307":7.468527650277227e+307,"":1.5365479653206503e+308};
var base_0 = [100,460,843,783]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,460,843,783]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,460,843,783]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,460,843,783]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test162.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)