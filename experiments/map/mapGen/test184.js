





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3] = null
argument2[49] = false
return a+b-c
};
var argument2 = true;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[8] = "A"
argument5[82] = [823,460,618,122,59,5e-324]
argument5 = false
return a*b/c
};
var argument5 = true;
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['A'] = 6.957285929159473e+307
return a/b/c
};
var argument8 = [714,-1,49,893,5e-324,618,49,126];
var argument9 = {"25":"","59":1.7869164845049369e+308,"126":"5","595":"4","627":1.2399090881743311e+308,"714":"n[J@Ga","969":"","":"U","V":"s","vuy":""};
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[5] = 82
return a*b/c
};
var base_0 = [5e-324,"EUO-",705,607,126,655,-1,783]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [5e-324,"EUO-",705,607,126,655,-1,783]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [5e-324,"EUO-",705,607,126,655,-1,783]
var r_3= undefined
try {
r_3 = base_3.map(argument10)
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
require("fs").writeFileSync("./experiments/map/mapGen/test184.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)