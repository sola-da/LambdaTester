





var callbackArguments = [];
var argument1 = true;
var argument2 = r_0;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.612812046173122e+308] = [-100,823,"%Yq","K#Wh6",969,",","dR#=","YJW",1.7976931348623157e+308]
argument2[2] = null
return a*b*c-d
};
var argument5 = true;
var argument6 = null;
var argument7 = r_1;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[59] = ["+","9","g"]
return a+b+c*d
};
var argument9 = "?E";
var argument10 = [705,25,705,893,5e-324,213];
var argument11 = r_0;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[4] = [82,100,893,783,627,59,-100,783]
argument10[403] = false
argument10[2] = {"403":"5[","969":"#","1.4464973236833357e+308":893,"6.426721239204682e+307":783,"]":"","":6.518508923389424e+307,"4.464936367497225e+307":1.2626535060489396e+308,"c":"","8.291174058912292e+306":"znS"}
return a+b+c+d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument14[2] = null
return a-b+c-d
};
var argument14 = null;
var base_0 = [595,403]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,403]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,403]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,403]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test724.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)