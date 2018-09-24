





var callbackArguments = [];
var argument1 = null;
var argument2 = true;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2][0] = false
base_0[1] = null
base_0[3] = false
return a-b/c*d
};
var argument5 = true;
var argument6 = null;
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[7.889879335222838e+307] = null
argument7[1.359136872727139e+308] = [714,"=`LD","a",618,460,82,607,"H"]
return a/b-c+d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[0] = [705,157,783,823]
return a*b/c+d
};
var argument10 = "#d";
var argument11 = r_2;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1] = 705
argument13 = false
return a+b*c/d
};
var base_0 = [655,213,"4",122,"U9)","m","[",49,"=","*"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,213,"4",122,"U9)","m","[",49,"=","*"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,213,"4",122,"U9)","m","[",49,"=","*"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,213,"4",122,"U9)","m","[",49,"=","*"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test558.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)