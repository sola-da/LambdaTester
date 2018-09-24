





var callbackArguments = [];
var argument1 = null;
var argument2 = {"3":"6Mo]5:","-":213};
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.359136872727139e+308] = {"100":2.775296243701774e+307,"714":"4 ","":49}
argument2[82] = 705
return a-b*c/d
};
var argument5 = 783;
var argument6 = r_0;
var argument7 = 9.637422217894685e+307;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[2] = false
argument6[2] = ""
argument7[1] = false
return a*b/c/d
};
var argument9 = null;
var argument10 = "";
var argument11 = null;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[7] = {"4.752263137592441e+307":""}
return a*b+c*d
};
var argument13 = [82,157,126,49,403,242,213];
var argument14 = r_3;
var argument15 = "";
var argument16 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument15[1.359136872727139e+308] = ["2","O",969,"g",969,"$"]
argument15['HMm'] = {"":"","5.009845743866708e+307":""}
argument15['*c'] = null
return a/b-c/d
};
var base_0 = [0,0,157,969,705]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,0,157,969,705]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,0,157,969,705]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,0,157,969,705]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test662.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)