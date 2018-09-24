





var callbackArguments = [];
var argument1 = {"843":783,"893":"n#","k":1.4425375929031849e+308,"1.7080076469296404e+307":"","9.939124660701289e+307":4.162720859130964e+306,"i":"x","1.504185674237413e+308":"-","":""};
var argument2 = 595;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[-1] = 969
base_0[1][0] = [242,627,49,"`LA{",49,-1]
argument3[0] = {"59":705,"595":"","1.4527661244163453e+308":"","":893,"% ":"H","2.6578084194788686e+307":"`","3.5947492976006906e+307":969}
return a+b+c+d
};
var argument5 = null;
var argument6 = [969,627,25,607,157,49,82,403,157];
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[4] = 242
return a/b*c+d
};
var argument9 = {"o":"","1.5691335370577748e+308":"","":1.0519078359694732e+305,"-1":"s{"};
var argument10 = false;
var argument11 = r_0;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[2] = "8"
argument11[5] = "Q"
return a/b-c*d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['length'] = 823
base_3[3][1] = {"":"&","9.497000078503222e+307":"$7}fuC"}
argument13 = "OL"
return a+b*c/d
};
var argument14 = [100,-1,0,-100,157,0,242,82,126];
var argument15 = false;
var base_0 = [59,59,627,618,618]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,59,627,618,618]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,59,627,618,618]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,59,627,618,618]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test446.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)