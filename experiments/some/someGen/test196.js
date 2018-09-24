





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0['length'] = [893,-100]
base_0[1]['{X'] = [618,122,82,403,100,25,823,-1,100,403]
return a+b+c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[618] = {"25":655,"U":4.2647208516352077e+307,";gpA":7.31504213596933e+307,"e":1.5264462277837654e+308,"":"","-1":-100,"&":"","^F":3.575309215254387e+307,"1.6472513269129763e+307":"#x"}
return a/b+c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[6] = [1.7976931348623157e+308,"0A:",618,213,"q","VjN","g","J",969,"G"]
argument5[9] = 2.1698533662875962e+307
return a/b+c
};
var argument5 = [823,969,242,157,1.7976931348623157e+308,122,0];
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[4] = ""
argument7[3] = [0,242,100,49,157,893,-1,-1,595,213]
return a-b-c
};
var base_0 = ["O","e%u!","q(","*","L","u","i]"," $"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["O","e%u!","q(","*","L","u","i]"," $"]
var r_1= undefined
try {
r_1 = base_1.some(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["O","e%u!","q(","*","L","u","i]"," $"]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["O","e%u!","q(","*","L","u","i]"," $"]
var r_3= undefined
try {
r_3 = base_3.some(argument6)
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
require("fs").writeFileSync("./experiments/some/someGen/test196.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)