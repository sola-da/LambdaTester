





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][3] = 49
return a/b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[6] = "s"
argument3[1] = null
return a*b+c
};
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[8] = "z!"
base_2[1][8] = null
base_2[1] = null
return a+b-c
};
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.7976931348623157e+308] = [157,157,823,1.7976931348623157e+308,82,607,627]
argument8[5] = null
return a-b*c
};
var base_0 = ["|]#","4","#","khU","(lR{","?"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["|]#","4","#","khU","(lR{","?"]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["|]#","4","#","khU","(lR{","?"]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["|]#","4","#","khU","(lR{","?"]
var r_3= undefined
try {
r_3 = base_3.some(argument6)
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
require("fs").writeFileSync("./experiments/some/someGen/test841.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)