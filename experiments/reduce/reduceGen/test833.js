





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[5] = true
argument1[4] = ""
argument2[-1] = {}
return a/b*c/d
};
var argument2 = null;
var argument3 = true;
var argument4 = true;
var argument5 = null;
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[5] = 460
base_1 = "QMClt!"
return a+b+c-d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[1.1532786076532189e+308] = {"1.1581318578172977e+308":1.2587035028886288e+307}
argument9[';N'] = ["|","He","a$","N","f","t","f"]
return a+b+c+d
};
var argument9 = null;
var argument10 = null;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[5] = {"595":1.5032510040176565e+308,"":"<IM","WF+;eo1-":"+L","1.5461302893782525e+308":100,"Lt":403}
argument13[1.359136872727139e+308] = {"893":-1,"8.810409369083871e+307":403,"h":"n]S","":1.5421272919977366e+308}
argument12[627] = [893,595,213,893,607,82]
return a-b-c/d
};
var argument12 = null;
var argument13 = r_2;
var base_0 = [100,843,25,823,-100,893,705]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,843,25,823,-100,893,705]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,843,25,823,-100,893,705]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,843,25,823,-100,893,705]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test833.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)