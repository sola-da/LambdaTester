





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[';N'] = true
base_0['length'] = [-100,595,823,607,59,783]
base_0[0][0] = {"627":5e-324,"J":"1'D1","w":"","1.4710639731813164e+308":"]4!?,","pF":460,"-2b":""}
return a/b-c+d
};
var argument2 = null;
var argument3 = ["$","{","j",-100,783,403];
var argument4 = true;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2 = "'r4QW]-"
return a+b-c-d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[2] = false
argument7[4] = null
return a+b-c*d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[8] = {"82":"'","5.834157367894509e+307":"1|((","ib55o;":157,"#":-100,"":"","y":242}
argument9[2] = [893,82,460]
return a-b/c+d
};
var base_0 = [126,403]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,403]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,403]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,403]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test311.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)