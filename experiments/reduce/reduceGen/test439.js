





var callbackArguments = [];
var argument1 = null;
var argument2 = true;
var argument3 = {"213":"","655":25,"893":82,"1.655055312033454e+306":""};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2] = 1.271816630746851e+308
argument1[1] = false
return a-b/c*d
};
var argument5 = true;
var argument6 = "";
var argument7 = 1.7976931348623157e+308;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[7] = true
return a*b-c*d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1] = [783,627,627,627,"G"]
return a+b-c*d
};
var argument10 = true;
var argument11 = -100;
var argument12 = null;
var argument13 = true;
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = [100,607,"b c<>",893,"vb%","h","-","V1",122,595]
argument13 = {"4.940260842812911e+307":"]KM9","":"S&","5qN":""}
return a/b-c-d
};
var base_0 = [242]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test439.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)