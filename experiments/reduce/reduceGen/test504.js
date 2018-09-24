





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = ["r#","_Ed`","b+^-","6","zR"]
argument3[1.359136872727139e+308] = null
return a/b/c*d
};
var argument2 = "";
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0] = 893
return a-b*c-d
};
var argument5 = 714;
var argument6 = [607,"&"];
var argument7 = null;
var argument8 = {"82":607,"":460,"n":""};
var argument9 = "Yl";
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[2] = {}
return a+b+c-d
};
var argument11 = null;
var argument12 = r_3;
var argument13 = 1.054450667773607e+308;
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[2] = 242
argument13[0] = ""
argument13[4] = ""
return a/b*c-d
};
var base_0 = [0,49,242,655,157,122,82,783,25,618]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,49,242,655,157,122,82,783,25,618]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,49,242,655,157,122,82,783,25,618]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,49,242,655,157,122,82,783,25,618]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test504.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)