





var callbackArguments = [];
var argument1 = "";
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2] = "?D"
argument3[2] = null
return a/b+c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3] = true
base_1[3][1] = 783
argument7[2] = null
return a+b/c+d
};
var argument6 = r_0;
var argument7 = null;
var argument8 = false;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['(R'] = [49,1.7976931348623157e+308,126,25,242,607,607]
argument7[-1] = [">+","2",")","ho","C","Kw","9j","79"]
argument7[4] = {"59":9.118369951447458e+307,"6.73962525869685e+307":213}
return a*b/c-d
};
var argument10 = null;
var argument11 = false;
var argument12 = null;
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][0] = 714
return a+b*c+d
};
var base_0 = [126,-100,783,618,714,607,100,-100,100]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,-100,783,618,714,607,100,-100,100]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,-100,783,618,714,607,100,-100,100]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,-100,783,618,714,607,100,-100,100]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test980.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)