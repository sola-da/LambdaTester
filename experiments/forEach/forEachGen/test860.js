





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[8] = null
base_0['length'] = 25
argument2[4.224481734419934e+307] = null
return a*b+c
};
var argument2 = {"126":"UK","":"","1.7976931348623157e+308":460,"1.2153029408957428e+308":"#NO","Q]":"si","7.528294534245123e+307":122,"2.640725102866449e+307":"","-":"","-100":7.558413402364882e+307};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[3] = {"49":"","213":"","714":"Q","Dr":1.6545899298106146e+308,"3.2416166400331386e+307":"","VE,v}":"","@d`":"","1.77856732206893e+307":595,"":595,"FQ":1.092374126766535e+308}
return a+b+c
};
var argument4 = false;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['D'] = "k6m5p"
base_2[1] = 5.1323661660510645e+306
return a*b*c
};
var argument6 = false;
var argument7 = null;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[1.3107131183454087e+308] = null
argument10[0] = "m"
base_3[5] = ":{"
return a*b*c
};
var argument9 = r_1;
var argument10 = 403;
var base_0 = [213,59]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,59]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,59]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,59]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test860.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)