





var callbackArguments = [];
var argument1 = {"25":242};
var argument2 = null;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2][0] = ""
argument2 = false
argument2[627] = [969,705,969,655]
return a-b*c/d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[7.463432409233234e+307] = "o5"
argument6[1] = null
return a/b-c/d
};
var argument6 = false;
var argument7 = true;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8] = false
argument9[2] = null
return a-b/c-d
};
var argument9 = null;
var argument10 = 82;
var argument11 = "";
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[1] = {"q@A":655,"Kc":59,"1.4222511071076676e+308":607,"-1":"y5","":"7GF%","8!X<(B":595,"2.6271833911607946e+306":"","1.605412757276924e+308":"T"}
return a*b*c*d
};
var base_0 = [460,0,100,595,25,0]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,0,100,595,25,0]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,0,100,595,25,0]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,0,100,595,25,0]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test184.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)