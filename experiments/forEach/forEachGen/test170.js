





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[0] = 1.7306834191204768e+308
base_0[6] = "eh"
return a/b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][1] = ""
argument3[1] = true
base_1[3] = [100,"G","w ",823,"OGWRI^",460]
return a-b*c
};
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[6] = false
return a/b/c
};
var argument5 = "";
var argument6 = true;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[126] = 1.6993606283064535e+308
argument9[1.4034744228995816e+308] = {"595":618,"":"","N":"K","N*V":6.827824184568651e+306,"9.929648174212228e+307":"","1.9189199539311864e+307":1.6587949909746016e+308,"z":"","1.3626005317479464e+308":1.7143114809741155e+308}
return a-b-c
};
var argument8 = r_3;
var argument9 = {"8":714,"$8vE":"","":"W","1.3292109974834713e+308":82};
var base_0 = [714,823,122,5e-324,655,893,1.7976931348623157e+308,460]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,823,122,5e-324,655,893,1.7976931348623157e+308,460]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,823,122,5e-324,655,893,1.7976931348623157e+308,460]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,823,122,5e-324,655,893,1.7976931348623157e+308,460]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test170.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)