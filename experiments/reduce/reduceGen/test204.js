





var callbackArguments = [];
var argument1 = null;
var argument2 = [823,705,49,783,655,655];
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2] = ""
argument1[0] = "z+"
argument1[0] = {"1.6021304744720281e+308":"","*":"m","":1.3815630028756644e+308}
return a+b-c/d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[2.1869172855352885e+307] = 6.925222864799092e+307
argument6 = [823,122]
argument5['Cb'] = null
return a-b/c/d
};
var argument6 = r_1;
var argument7 = [-100,122];
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[0] = [893,"NNo1",49,"e(Z","+","_BulD","j"]
argument9[7.463432409233234e+307] = {}
return a+b/c/d
};
var argument9 = [-100,783,1.7976931348623157e+308,823,5e-324,618,49,714];
var argument10 = null;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13['*c'] = 595
argument13['*c'] = {"893":"","6.314977065895576e+307":9.45830820284826e+307}
base_3[5] = {"82":1.4271787713939543e+308,"e":"!","F9":"","1.5337618256219294e+308":"$","":"","1.4671973240191204e+308":"^J2","7.707164032840628e+306":"","3.768641008927007e+307":""}
return a+b-c/d
};
var argument12 = null;
var argument13 = null;
var base_0 = [157,618,-1,627,460,59,823,122,49,618]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,618,-1,627,460,59,823,122,49,618]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,618,-1,627,460,59,823,122,49,618]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,618,-1,627,460,59,823,122,49,618]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test204.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)