





var callbackArguments = [];
var argument1 = null;
var argument2 = "2'ge";
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3] = [1.7976931348623157e+308,25,893,460,893]
argument3[4] = false
return a-b+c*d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = 595
return a+b-c-d
};
var argument6 = "";
var argument7 = "n";
var argument8 = null;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2 = null
argument7[2] = null
return a-b/c*d
};
var argument10 = {"7.159498104103924e+307":9.458457676230653e+307};
var argument11 = r_2;
var argument12 = {"Q":8.114142201060255e+307,"3.526878894767696e+307":705,"":1.0928980909311949e+308,"7.080746991583843e+307":2.349375789630748e+307};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2] = true
argument10[9] = null
argument11[627] = null
return a/b*c-d
};
var base_0 = [969,126,59,213,783,705,-1,607]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,126,59,213,783,705,-1,607]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,126,59,213,783,705,-1,607]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,126,59,213,783,705,-1,607]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test245.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)