





var callbackArguments = [];
var argument1 = false;
var argument2 = false;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][0] = {"X-M":"Z","1.1014282312943739e+308":"","":"w","0p":"="}
argument3[59] = 9.55121261582859e+307
return a*b/c*d
};
var argument5 = false;
var argument6 = r_1;
var argument7 = ["v*","p","S","x"];
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.3938918493123786e+308] = null
return a+b-c-d
};
var argument9 = "HP";
var argument10 = false;
var argument11 = 126;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[893] = null
argument9[0] = {"0":"+w","":1.2133273120401463e+308,"2.809770966311633e+307":"","5e-324":"","1.7976931348623157e+308":969,"5.554737320035566e+307":"","9.36023792787431e+307":-100}
return a/b+c-d
};
var argument13 = [893];
var argument14 = r_1;
var argument15 = 1.1003954861909541e+308;
var argument16 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13[3] = 3.7944259038163015e+306
argument15[2] = {"8":1.2990130922987188e+308,"403":126,"595":627,"823":"","7.394347880713446e+307":9.928820969773253e+307,"1.3157686163008465e+308":"e","9.384122219458179e+307":"^","":5.782340446867427e+307,"a":6.447718668315338e+307}
argument15 = null
return a+b+c+d
};
var base_0 = [157,"7","Lqk","#","u",823,"c7","HM#M"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,"7","Lqk","#","u",823,"c7","HM#M"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,"7","Lqk","#","u",823,"c7","HM#M"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,"7","Lqk","#","u",823,"c7","HM#M"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15,argument16)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test598.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)