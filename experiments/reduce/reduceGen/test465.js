





var callbackArguments = [];
var argument1 = true;
var argument2 = true;
var argument3 = ["pR","KR^4Vn&",-100,"U",242,"h%"];
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[627] = ""
argument3[90] = ""
return a*b-c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5] = ["u","{k^8","#U","*","P",1.7976931348623157e+308,"h",49,705]
argument5 = {"0":"'","25":627,"":"4$","{Nu1":1.4965242990698552e+308,";:":"2@n6a"}
argument5 = null
return a-b-c/d
};
var argument6 = r_0;
var argument7 = r_1;
var argument8 = true;
var argument9 = false;
var argument10 = [0,705,0,893,823,783,1.7976931348623157e+308];
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9 = [5e-324,213,823,213,"2"]
base_2[1][3] = ["N","I","R","x","]D","I","Z("]
argument10[2] = [783,"W","J",59,595,"$h-",";","W`_6:"," r"]
return a*b*c+d
};
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument14[2] = null
base_3[6] = ["j",126,0,"5_c",157,655,"_",823]
return a*b*c/d
};
var base_0 = [403,5e-324]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,5e-324]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,5e-324]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,5e-324]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test465.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)