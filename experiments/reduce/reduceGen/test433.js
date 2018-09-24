





var callbackArguments = [];
var argument1 = r_0;
var argument2 = 126;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1['s'] = ""
return a+b*c-d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = ["@8nO{f","1f","cd?3","9b","Rf"]
argument6[1.1277822633002616e+308] = 9.536519805187538e+307
return a*b+c/d
};
var argument6 = {"25":5.821172748577782e+307,"460":49,"595":"","6.319551334121757e+307":"y","a8":"I","8.325897879441089e+307":"","X5&SSF":"|"};
var argument7 = [59,"T","u","7","MPt","V[","I","d["];
var argument8 = true;
var argument9 = [126,705,1.7976931348623157e+308,843,893];
var argument10 = {"823":"z]H9","F":126,"1.7380993708293174e+308":"","1.1253412491040125e+308":9.642433251927089e+306,"":"","1.0567050988550038e+308":""};
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2][0] = false
argument10 = 618
return a/b-c/d
};
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12 = 1.566780354301423e+308
argument14[90] = null
return a+b-c/d
};
var argument13 = true;
var base_0 = [843,460,"]"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [843,460,"]"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [843,460,"]"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = [843,460,"]"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test433.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)