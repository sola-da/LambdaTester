





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[655] = [705,595,714,0]
argument2[3] = false
return a+b-c*d
};
var argument2 = ["{",49,705];
var argument3 = 1.417388159406586e+308;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3] = null
base_1 = null
base_1[0][9.12287810829114e+307] = {"n":"Bq`E","1sB":"`","":-100}
return a+b/c-d
};
var argument5 = "x";
var argument6 = -100;
var argument7 = r_0;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[2] = true
return a/b+c*d
};
var argument9 = r_0;
var argument10 = 2.565021540672811e+307;
var argument11 = {"595":-1,"3.2076197619118055e+307":893,"":655,"1.5232395215999079e+308":1.7582177976479734e+308,"1.4543044519907014e+308":";","g3P":3.352095584702617e+307,"5.031665293636634e+307":"d^"};
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][3] = 3.3566954997417653e+307
return a-b/c/d
};
var base_0 = [893,893,1.7976931348623157e+308,627,969,893]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,893,1.7976931348623157e+308,627,969,893]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,893,1.7976931348623157e+308,627,969,893]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,893,1.7976931348623157e+308,627,969,893]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test670.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)