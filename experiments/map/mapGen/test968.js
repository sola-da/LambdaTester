





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[0] = "E"
base_0[5][2] = 969
base_0 = null
return a*b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][0] = false
base_1[0][1] = {"0":"Q'6_","242":"#k","Zq":"","oja>=^":2.453212896965727e+307,"":"","8.158041564573878e+307":"","1.5876135323092918e+308":""}
return a/b+c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1.7173047913506838e+308] = [122,100,627]
return a-b*c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[8] = {"49":"MU","595":595,"607":"","":"2","1.7318783550579225e+308":"","8.857669581674346e+306":"","z":714,"1.5821374616628213e+308":1.1724829488193527e+308,"?":893}
argument5[1]['d'] = [607,403,122,82,157]
base_3[0][2] = "f+k"
return a/b/c
};
var argument5 = false;
var base_0 = [783,783,783,618,893,49,403,460,969]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,783,783,618,893,49,403,460,969]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,783,783,618,893,49,403,460,969]
var r_2= undefined
try {
r_2 = base_2.map(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument4,argument5)
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
require("fs").writeFileSync("./experiments/map/mapGen/test968.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)