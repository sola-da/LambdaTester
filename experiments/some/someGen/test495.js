





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][2] = null
argument3 = [1.7976931348623157e+308,49,714,655,607,82]
argument2['f9zgt4n!ZJR]W'] = 893
return a-b-c
};
var argument2 = [-1,49,618,823,-1,460,460,823];
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = null
base_1[1][2] = {"460":4.860824284440036e+306,"":157,"1.675106134669796e+307":1.498383096069384e+308,"O":"",">*LN":""}
argument5[1.6798476101238045e+308] = 607
return a*b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1.6798476101238045e+308] = [-100,213,627,655,705]
base_2[5] = 122
return a-b*c
};
var argument6 = null;
var argument7 = r_2;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][0] = false
base_3[5] = false
argument8[3] = false
return a+b+c
};
var base_0 = [969]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969]
var r_1= undefined
try {
r_1 = base_1.some(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969]
var r_3= undefined
try {
r_3 = base_3.some(argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test495.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)