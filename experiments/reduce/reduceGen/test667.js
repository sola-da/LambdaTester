





var callbackArguments = [];
var argument1 = false;
var argument2 = "R&zx";
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[126] = 4.918764587867755e+307
argument3[655] = {"25":"b","":"","1.5858714572025583e+308":"_","E":5.158167929352815e+307,"-1":"p","-S&:);=PS7J":"(","1.6617816347249792e+307":-1}
return a*b*c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[7.463432409233234e+307] = false
argument6[4] = null
return a+b+c/d
};
var argument6 = null;
var argument7 = 242;
var argument8 = "";
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[2.1869172855352885e+307] = null
return a*b+c-d
};
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[655] = ""
argument11[2] = [59,82,595,-1,627]
return a+b/c/d
};
var argument11 = false;
var argument12 = false;
var base_0 = [0,"29=",823,"[","KV",-100,"K?w","i"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,"29=",823,"[","KV",-100,"K?w","i"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,"29=",823,"[","KV",-100,"K?w","i"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,"29=",823,"[","KV",-100,"K?w","i"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test667.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)