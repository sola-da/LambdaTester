





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[5.262931091360336e+307] = ["bs8","_lP",1.7976931348623157e+308,607,705]
return a*b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[-100] = ["&M",";Z","{[","LVy","*X","B",">"]
return a-b-c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8] = [213]
argument4['7q('] = null
return a*b+c
};
var argument4 = false;
var argument5 = {"893":"c","1.4540009349770659e+308":"T]","":-1,"1.661587867688265e+308":"e","4.1377431933723163e+307":1.6124291475625615e+308,"*'-":"",")h":""};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[3] = false
argument6 = [5e-324,403]
return a-b-c
};
var argument7 = r_1;
var argument8 = r_1;
var base_0 = [126,1.7976931348623157e+308,126,59,460,403,627,823,-1]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,1.7976931348623157e+308,126,59,460,403,627,823,-1]
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,1.7976931348623157e+308,126,59,460,403,627,823,-1]
var r_2= undefined
try {
r_2 = base_2.filter(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,1.7976931348623157e+308,126,59,460,403,627,823,-1]
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test773.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)