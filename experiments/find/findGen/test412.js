





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['j'] = 705
argument3[5] = true
base_0[0][1] = null
return a+b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3][7] = 242
return a*b-c
};
var argument3 = r_0;
var argument4 = r_1;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2['length'] = [242,714,0,705,49,59,1.7976931348623157e+308]
argument6[1.399309004356655e+308] = 595
base_2[1] = 1.5463033657306687e+308
return a/b*c
};
var argument6 = {"1":-100,"100":705,"1.4941420913680117e+308":3.018438590212804e+307,"m@LS":618,"-100":"","":59,"RM{":4.322137494485838e+307,"1.6193494939289956e+308":595,"<,":1.1533627603519955e+308,"1.323978735126642e+308":1.5095523775324306e+308};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[460] = ""
return a/b+c
};
var base_0 = [25,100,59,655,-1,893,705]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,100,59,655,-1,893,705]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,100,59,655,-1,893,705]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,100,59,655,-1,893,705]
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
require("fs").writeFileSync("./experiments/find/findGen/test412.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)