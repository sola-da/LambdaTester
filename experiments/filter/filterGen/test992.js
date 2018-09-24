





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[8][3] = ""
argument2['jo'] = [655,714,5e-324,213,-1,122,1.7976931348623157e+308,25,213]
argument2[714] = [595,618,1.7976931348623157e+308,618,705,705,1.7976931348623157e+308]
return a+b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1] = {"3":823,"100":1.2161948118838115e+308,"618":"Z","783":1.6619409595152823e+308,"":1.6170492974521074e+308,"-1":1.487561527825731e+308,"mr|;":"b","5.893849174545687e+307":"","X":""}
argument3[1] = {"1":"","5.386311361562893e+307":6.507628885551045e+307}
return a/b+c
};
var argument3 = "";
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2 = ""
return a/b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[7] = {"122":"","":";eN","]":3.5498495862870363e+307,"2=":"s)","1.2096753749181296e+307":"","O":"","]U^3-":"2@2yd"}
argument6[714] = true
return a+b+c
};
var argument6 = false;
var base_0 = [655,843,705,-1,213]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,843,705,-1,213]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,843,705,-1,213]
var r_3= undefined
try {
r_3 = base_3.filter(argument5,argument6)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test992.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)