





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][4] = [607,82,618,-1,49,893,893]
argument3['18{'] = {"4":82,"8":"l","627":"I=","6.556083881648483e+306":"fVhJ?","9.076779842012696e+306":"J","":"*","9.67956879932981e+307":"","i$":1.704667436471395e+307,"9.450703821314395e+307":1.10875744447949e+308}
argument3[595] = "{4"
return a+b-c+d
};
var argument2 = true;
var argument3 = "WyDU9";
var argument4 = "L";
var argument5 = true;
var argument6 = [-1,"m",126];
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[627] = ""
return a*b/c+d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10['*c'] = 1.1868402512584122e+308
argument10['18{'] = {"969":"2"}
return a*b+c-d
};
var argument9 = 8.001180396137511e+307;
var argument10 = 403;
var argument11 = null;
var argument12 = r_0;
var argument13 = r_3;
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13[595] = {"3":1.2125220863858367e+308,"403":"9jv","E":893,"1.4450192944001616e+308":"&th?","[":9.32581590410869e+307,"9.008320725445931e+307":"v"}
base_3[0][3] = null
base_3[8] = null
return a-b-c/d
};
var base_0 = ["*",242]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["*",242]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["*",242]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["*",242]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test573.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)