





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[4.953791384496108e+307] = [627,100]
argument2[7] = [0,49,460,705]
argument3['V'] = null
return a/b-c
};
var argument2 = null;
var argument3 = 2.4002893734675064e+307;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][2] = {"6":460,"100":82,"714":"yy","783":403,"-100":2.0688636459522927e+307,"N)E]>":5.447061975900939e+307,"pK":0,"":823,"^{":8.393216708082758e+307}
argument6['LK'] = "4PaG"
return a-b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][0] = 2.3602234223914543e+307
return a/b*c
};
var argument6 = [655,242,126,618];
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[4.953791384496108e+307] = null
argument9['LK'] = true
return a+b*c
};
var base_0 = [100,655,655,100,100,893,0,893]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,655,655,100,100,893,0,893]
var r_1= undefined
try {
r_1 = base_1.find(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,655,655,100,100,893,0,893]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,655,655,100,100,893,0,893]
var r_3= undefined
try {
r_3 = base_3.find(argument7)
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
require("fs").writeFileSync("./experiments/find/findGen/test721.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)