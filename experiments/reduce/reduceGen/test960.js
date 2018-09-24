





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2] = null
return a*b+c+d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[126] = false
base_1[9] = {"25":627,"213":1.1433705544282106e+308,"893":"","5.174635752151522e+307":213,"1.0810283232124534e+308":"Q","":6.850357052657851e+307,"1.0648569631235111e+307":"I","^'":"gf<V_"}
argument4 = null
return a-b*c+d
};
var argument3 = null;
var argument4 = true;
var argument5 = true;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3] = 607
argument4 = {"100":1.413718564498484e+308,"655":"","893":100,"2.6453503730310284e+306":"7","%_R":"`%","#":"1","r5=D:3<":"","7.027174693836314e+307":"","":1.3569486978919052e+308,"!":"V"}
return a-b*c-d
};
var argument7 = null;
var argument8 = true;
var argument9 = null;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9 = false
return a/b-c-d
};
var base_0 = [49,655,59,-1,969,893,823,242]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,655,59,-1,969,893,823,242]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,655,59,-1,969,893,823,242]
var r_2= undefined
try {
r_2 = base_2.reduce(argument3,argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,655,59,-1,969,893,823,242]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7,argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test960.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)