





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[7] = ["`9;_","K","L","X","F","R","K","X]"]
base_0 = null
argument2[1.6798476101238045e+308] = [595,627]
return a+b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[9] = 0
return a+b*c
};
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2] = "9"
base_2[9] = 7.403510193902522e+307
return a+b*c
};
var argument5 = {"122":6.691386064796363e+307,"":"5","1.2042931258039751e+308":""};
var argument6 = r_1;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['length'] = [0,-100,607,705,705,823,607]
return a/b+c
};
var argument8 = null;
var base_0 = [595,595,1.7976931348623157e+308,595,-100,82,627,-1]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,595,1.7976931348623157e+308,595,-100,82,627,-1]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,595,1.7976931348623157e+308,595,-100,82,627,-1]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,595,1.7976931348623157e+308,595,-100,82,627,-1]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test25.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)