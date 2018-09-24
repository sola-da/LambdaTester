





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[2.1869172855352885e+307] = ["p",823,607,":3","L("]
argument1['s'] = -100
return a-b+c/d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[403] = 9.690362064859622e+307
base_1[3] = {"607":"s","5.182180873963224e+307":122,"5.169658554792841e+307":"X","Zy":"2%","A":1.4607846884486041e+308,"^":893,"cf":"$B&|9","8.187779899755737e+307":7.466808351651738e+307,"":705}
return a/b+c+d
};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[4] = null
base_2[7] = true
return a+b+c+d
};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[3] = "}Yru"
argument5[213] = null
argument6[1.3938918493123786e+308] = ""
return a*b+c+d
};
var base_0 = [1.7976931348623157e+308,242,122,460,-100,460,100,1.7976931348623157e+308,595,705]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,242,122,460,-100,460,100,1.7976931348623157e+308,595,705]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,242,122,460,-100,460,100,1.7976931348623157e+308,595,705]
var r_2= undefined
try {
r_2 = base_2.reduce(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,242,122,460,-100,460,100,1.7976931348623157e+308,595,705]
var r_3= undefined
try {
r_3 = base_3.reduce(argument4)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test624.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)