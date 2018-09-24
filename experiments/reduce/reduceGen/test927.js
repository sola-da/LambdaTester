





var callbackArguments = [];
var argument1 = 627;
var argument2 = [25,"A&","&",100];
var argument3 = [59];
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.4205726959827606e+308] = {"122":49,"1.2837333047647678e+308":"","&":"","X":"","Y":"","-100":4.825621662846249e+307,"9.984015950966249e+307":6.099386932740876e+307,"(":2.822252393614999e+307}
return a/b-c-d
};
var argument5 = true;
var argument6 = [25,843,403,893];
var argument7 = "";
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3] = [157,595,157,714,-1,157,893]
argument7[403] = "Y8"
argument7['(R'] = ["CU","<6","?","q","+","Uc","v","H!fj"]
return a-b+c-d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9['A'] = [-1,0]
return a/b+c*d
};
var argument10 = true;
var argument11 = true;
var argument12 = null;
var argument13 = null;
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13['HMm'] = [82,122,242,1.7976931348623157e+308]
return a*b/c*d
};
var base_0 = ["%","Jc","x","A","9","r"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["%","Jc","x","A","9","r"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["%","Jc","x","A","9","r"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["%","Jc","x","A","9","r"]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test927.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)