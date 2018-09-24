





var callbackArguments = [];
var argument1 = null;
var argument2 = 100;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[2.1869172855352885e+307] = false
base_0[5] = ["DbKKX=",100,"<Yz","<",59]
base_0 = [157,-1,1.7976931348623157e+308,618,1.7976931348623157e+308,969]
return a-b+c*d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['*c'] = ["zc",":"]
base_1[1][3] = 8.710050233309854e+307
return a+b*c+d
};
var argument6 = true;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[';N'] = {"25":7.073303402162049e+307,"783":59,"":"EyC","_":1.5283570673008667e+308,"1.6303216941705314e+308":6.709271927971657e+307,"3.180503561755713e+306":59,"L":"E`","y{}{W":"","1.1085587655579634e+308":0,"2.2668140190793684e+307":49}
return a/b/c*d
};
var argument8 = r_1;
var argument9 = null;
var argument10 = true;
var argument11 = null;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[5] = [1.7976931348623157e+308,823,-100,-1,25]
argument11[5] = [122,59,-100,655]
base_3[5] = [607,100,126,157,460,49,893,705,0,893]
return a*b-c*d
};
var base_0 = ["PC^Ae[",655,25,655,"-N"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["PC^Ae[",655,25,655,"-N"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["PC^Ae[",655,25,655,"-N"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["PC^Ae[",655,25,655,"-N"]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test344.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)