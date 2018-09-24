





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][3] = "v"
base_0[3][1] = 969
argument2[82] = {"":8.739875159650393e+307,"1.1115216713398506e+308":"","1.1218157356713039e+308":122}
return a-b/c+d
};
var argument2 = false;
var argument3 = r_0;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[7] = true
base_1[3][1] = ""
return a+b-c/d
};
var argument5 = false;
var argument6 = false;
var argument7 = "";
var argument8 = false;
var argument9 = r_0;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[25] = null
return a/b+c+d
};
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[7.463432409233234e+307] = 82
base_3[9] = 595
return a/b-c+d
};
var argument12 = r_0;
var base_0 = [460,783,705,0,25,49,157,49]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,783,705,0,25,49,157,49]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,783,705,0,25,49,157,49]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,783,705,0,25,49,157,49]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test549.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)