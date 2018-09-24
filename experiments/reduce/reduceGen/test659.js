





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[82] = 7.254294061404661e+307
argument1['s'] = "XHG"
argument3[1] = [460,122,100]
return a*b+c-d
};
var argument2 = false;
var argument3 = null;
var argument4 = null;
var argument5 = null;
var argument6 = ["rR]"];
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[9.331954948603684e+307] = "-"
argument6['*c'] = null
return a+b+c-d
};
var argument8 = null;
var argument9 = ["a","gH"];
var argument10 = r_2;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10 = [126,25,969,"u","z",893,"jgy=I",126,"G"]
argument8[0] = "u:"
argument9[213] = ""
return a+b-c/d
};
var argument12 = false;
var argument13 = "";
var argument14 = "";
var argument15 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][3] = 100
base_3[1] = [595,5e-324,59,843,157]
return a*b/c*d
};
var base_0 = ["<","wGA","Di","T","L?I"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["<","wGA","Di","T","L?I"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["<","wGA","Di","T","L?I"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["<","wGA","Di","T","L?I"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13,argument14,argument15)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test659.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)