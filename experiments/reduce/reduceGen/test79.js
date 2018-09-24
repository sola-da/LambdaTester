





var callbackArguments = [];
var argument1 = true;
var argument2 = true;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2] = ["oJw*<{","z"," l-","V","[","p","K81x","L!"]
return a+b/c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = null
argument7[5] = 8.020312178824071e+307
argument6[3] = {"49":"R","82":1.0871665587814736e+308,"m":"","x":"","":705,"7.228437453784962e+307":969,"1.035121476063674e+308":"","n]":"A`3"}
return a/b-c*d
};
var argument6 = true;
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9 = ""
base_2[2] = 3.634855607606808e+307
base_2[1][3] = 1.6577079905084508e+308
return a+b-c+d
};
var argument9 = "Fc";
var argument10 = true;
var argument11 = "";
var argument12 = true;
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3 = true
base_3[1][0] = 59
return a/b*c*d
};
var base_0 = [-100,242,823,627,5e-324,-1,157,-100,5e-324,82]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,242,823,627,5e-324,-1,157,-100,5e-324,82]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,242,823,627,5e-324,-1,157,-100,5e-324,82]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,242,823,627,5e-324,-1,157,-100,5e-324,82]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test79.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)