





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][1] = "<"
base_0[0][0] = ["S))]","K","k","y"]
return a-b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0] = ""
base_1[2] = [-1,242,627,1.7976931348623157e+308,"]*c",714,627,"[`|"]
argument2 = "&d"
return a+b-c
};
var argument3 = [460,403];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['io'] = false
argument6[4] = [242,82,122,0,893,242,-100,25]
return a-b-c
};
var argument5 = true;
var argument6 = {"157":"","213":1.6032908404211115e+308,"1.5198480075412814e+308":1.1532724588285191e+308,"":9.006589204671255e+307,"vY&":"","'":655,"{":"_kO","1.6984288894166079e+308":"*"};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][6] = true
return a-b*c
};
var base_0 = [969,"<t",-100,"+u"," K",213,"Q"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,"<t",-100,"+u"," K",213,"Q"]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,"<t",-100,"+u"," K",213,"Q"]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,"<t",-100,"+u"," K",213,"Q"]
var r_3= undefined
try {
r_3 = base_3.every(argument7)
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
require("fs").writeFileSync("./experiments/every/everyGen/test650.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)