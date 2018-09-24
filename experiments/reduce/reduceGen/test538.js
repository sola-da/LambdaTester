





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[893] = null
argument3[403] = ["m","T","BpFR","36J","q",893,100]
argument2[1] = {"9":403,"618":"M","6.755945195221693e+306":893,"wQhwn--":403,"o":5.700905761553108e+307,"2#%":"d","":1.6665137550210811e+308,"4.687907533596729e+307":893,"=D6":"n&H$y"}
return a/b+c-d
};
var argument2 = true;
var argument3 = ["K","rUo",">","muU2","^!_","98","t","x&P","J%"];
var argument4 = 3.324757454485085e+307;
var argument5 = false;
var argument6 = 7.944013203642287e+307;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[893] = 2.2055656543779144e+307
return a+b/c+d
};
var argument8 = r_2;
var argument9 = r_2;
var argument10 = null;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[403] = "+F"
return a*b-c+d
};
var argument12 = null;
var argument13 = [59,714,25,242,618];
var argument14 = null;
var argument15 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][9.12287810829114e+307] = 1.2079924680212302e+308
base_3[3] = ""
return a+b+c/d
};
var base_0 = [-100,242,"H","CI","*",";"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,242,"H","CI","*",";"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,242,"H","CI","*",";"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,242,"H","CI","*",";"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13,argument14,argument15)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test538.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)