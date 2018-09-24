





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[4] = [893,823,655,1.7976931348623157e+308,122,-100]
argument3['*c'] = false
return a/b+c/d
};
var argument2 = 7.725654402974496e+307;
var argument3 = r_0;
var argument4 = ["Yc","SY U","Oi","7","fW:","[","%"];
var argument5 = {"49":618,"82":618,"":122,"o":"","1.4611232111029848e+308":-1,"9.05902708388046e+307":893,"1.0068466106386927e+308":"?k","-1":"BC2Yd","1.7976931348623157e+308":460,"1.3731297817606337e+308":4.3366828451463473e+307};
var argument6 = false;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['*c'] = ["<","F","J7"]
argument5[3] = [403,"Bb"]
return a-b+c/d
};
var argument8 = true;
var argument9 = null;
var argument10 = r_2;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][9.12287810829114e+307] = false
return a/b/c+d
};
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13[1.1277822633002616e+308] = "C"
base_3[4] = "Z"
argument13[25] = 1.1481121372416885e+308
return a-b+c+d
};
var base_0 = [157,5e-324]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,5e-324]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,5e-324]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,5e-324]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test843.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)