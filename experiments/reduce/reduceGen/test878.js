





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[1] = 1.0832630327842354e+308
argument3[7.889879335222838e+307] = false
return a+b*c+d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][3] = ""
argument4[1.3938918493123786e+308] = false
argument4[403] = ""
return a/b-c/d
};
var argument3 = false;
var argument4 = r_1;
var argument5 = r_1;
var argument6 = true;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4 = null
return a+b+c+d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[0] = 8.738765757923e+307
return a/b/c+d
};
var argument9 = ["*FdC","k"];
var argument10 = null;
var base_0 = [1.7976931348623157e+308,655,"(","(`",969,"r6",";","m"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,655,"(","(`",969,"r6",";","m"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,655,"(","(`",969,"r6",";","m"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,655,"(","(`",969,"r6",";","m"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test878.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)