





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3] = {"4.5268641508461876e+306":"","1.6969172905801011e+308":-100}
return a+b-c
};
var argument2 = {"4":2.738162128172362e+307,"e":"C","3.477336919734759e+307":"Br","z":82,"3.22536091584024e+307":-1};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[5] = ""
return a/b+c
};
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[3] = [403,126,893,783,122,-100,893,49]
base_2[1] = {"595":"","9.299636621413339e+307":3.2183437465566857e+307,"":6.217913462937438e+307,"2.037821352266221e+307":""}
return a-b*c
};
var argument6 = true;
var argument7 = ["H","]","3","ec=Dmx","{","gT","t7",":!"];
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = null
argument9[403] = 1.8540156540324104e+307
argument8 = 618
return a-b*c
};
var base_0 = [-1,893,49,126,460]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,893,49,126,460]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,893,49,126,460]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,893,49,126,460]
var r_3= undefined
try {
r_3 = base_3.every(argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test992.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)