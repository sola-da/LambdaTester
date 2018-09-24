





var callbackArguments = [];
var argument1 = null;
var argument2 = r_0;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[7] = {"}80)Q|":"}","":"","1.7406774573501522e+308":403,"3.312781626398577e+307":403,"1.5911113257915319e+308":1.7976931348623157e+308,"P":"-E","1.2870422650913905e+308":"","1.3649788945551594e+308":1.1756931231874504e+308,"{S":""}
return a*b*c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1] = [82,969,843,460,893,100]
base_1[0][9.12287810829114e+307] = null
return a-b*c/d
};
var argument6 = null;
var argument7 = null;
var argument8 = false;
var argument9 = r_0;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3] = ["b","|",213,893,627,460,59,"i"]
base_2[1] = true
return a+b-c+d
};
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = [607,823,403,595,25]
base_3[4] = null
base_3[7] = 1.0264848266146062e+308
return a-b/c*d
};
var argument12 = false;
var base_0 = [783,"q","F",595,655,25,126,823]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,"q","F",595,655,25,126,823]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,"q","F",595,655,25,126,823]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,"q","F",595,655,25,126,823]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test123.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)