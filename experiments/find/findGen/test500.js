





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = ""
base_0[0][3] = null
argument2[242] = 595
return a*b/c
};
var argument2 = false;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['j'] = true
argument6[403] = 122
base_1[3][1] = 705
return a/b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[893] = -1
argument7['W'] = true
return a-b/c
};
var argument6 = r_1;
var argument7 = true;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[893] = ""
argument9[3][6] = null
argument9['j'] = 893
return a+b/c
};
var argument9 = true;
var argument10 = true;
var base_0 = [705,705,49,213,403,122,783,213,82]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,705,49,213,403,122,783,213,82]
var r_1= undefined
try {
r_1 = base_1.find(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,705,49,213,403,122,783,213,82]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,705,49,213,403,122,783,213,82]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/find/findGen/test500.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)