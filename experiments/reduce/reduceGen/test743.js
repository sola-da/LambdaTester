





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.3938918493123786e+308] = [969,595,126,0,-1,157,1.7976931348623157e+308,823,823,618]
base_0[0][4] = false
argument3[403] = {"242":"","":"m(","8.591092654248734e+307":595,"2KCS":25,"h":126,"1.702653220601827e+308":"]%*kt"}
return a/b*c/d
};
var argument2 = null;
var argument3 = null;
var argument4 = null;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[9.331954948603684e+307] = [-1,122,893,893,1.7976931348623157e+308,126,607]
base_1[3][1] = false
argument3[1] = false
return a-b*c/d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.612812046173122e+308] = 969
base_2[0][3] = ""
return a/b-c/d
};
var argument7 = null;
var argument8 = r_0;
var argument9 = r_3;
var argument10 = 607;
var argument11 = -100;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[627][126] = [607]
return a+b+c+d
};
var base_0 = [100,595,460,607,25,823,59,1.7976931348623157e+308,595]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,595,460,607,25,823,59,1.7976931348623157e+308,595]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,595,460,607,25,823,59,1.7976931348623157e+308,595]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,595,460,607,25,823,59,1.7976931348623157e+308,595]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test743.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)