





var callbackArguments = [];
var argument1 = true;
var argument2 = {"714":"","9.263529668519168e+307":"|"};
var argument3 = [126,213,627,823,242,100];
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2] = true
base_0[0] = false
return a*b*c-d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4] = {"":"O&"}
base_1[6] = {"":"h","1.9887810608221318e+307":7.918015620340516e+307}
argument7[5] = {"":"","5.968070160802235e+307":""}
return a-b/c/d
};
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1] = ""
argument7[4] = ["WDR%","Tr0","Y","j3b","Pq#","U8"]
base_2[1] = -1
return a+b-c-d
};
var argument8 = r_1;
var argument9 = "GeRv#";
var argument10 = r_3;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][0] = null
base_3[4] = [25]
return a/b*c+d
};
var base_0 = [460,-1,82,-1,1.7976931348623157e+308,100,126,49]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,-1,82,-1,1.7976931348623157e+308,100,126,49]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,-1,82,-1,1.7976931348623157e+308,100,126,49]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,-1,82,-1,1.7976931348623157e+308,100,126,49]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test101.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)