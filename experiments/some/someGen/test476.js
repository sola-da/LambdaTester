





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1] = [403,595]
argument2[2.249941463060761e+307] = false
return a+b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['j'] = [655,460,25]
base_1[0] = 1.0222203118496676e+307
return a*b-c
};
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1.6798476101238045e+308] = null
return a/b-c
};
var argument5 = "nq";
var argument6 = r_2;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9['^h'] = null
return a-b+c
};
var argument8 = null;
var argument9 = null;
var base_0 = [460,100,1.7976931348623157e+308,627,893,59,49,705]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,100,1.7976931348623157e+308,627,893,59,49,705]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,100,1.7976931348623157e+308,627,893,59,49,705]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,100,1.7976931348623157e+308,627,893,59,49,705]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someGen/test476.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)