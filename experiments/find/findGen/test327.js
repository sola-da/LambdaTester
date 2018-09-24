





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[893] = {"1.1818007008237016e+308":59,"x":705,"S":"T","":"[","utT8?":122,"-1":"7(rJ8"}
return a+b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1] = {"126":823,"783":"","823":6.731062239147249e+307,"1.5757376492799887e+308":"","":"^","Bl":"]","1.5291086817185e+308":1.7484510713516794e+308}
return a-b/c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][7] = ",w"
return a-b-c
};
var argument4 = null;
var argument5 = "C";
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[3] = ["x"]
return a-b*c
};
var argument7 = true;
var argument8 = {"607":"","1.7976931348623157e+308":"qx","k":122};
var base_0 = ["JzHqbw",157,595,"z4;","AR",-1,893]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["JzHqbw",157,595,"z4;","AR",-1,893]
var r_1= undefined
try {
r_1 = base_1.find(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["JzHqbw",157,595,"z4;","AR",-1,893]
var r_2= undefined
try {
r_2 = base_2.find(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["JzHqbw",157,595,"z4;","AR",-1,893]
var r_3= undefined
try {
r_3 = base_3.find(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findGen/test327.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)