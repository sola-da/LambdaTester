





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.612812046173122e+308] = {"122":"m","213":"F>","U":595,"1.6884601408710649e+308":">"," X":783,"":"","1.3751832283848962e+308":"J'N","(CB":627,"Hp":1.3916889112622687e+308}
argument2[460] = 1.0800186923645086e+308
argument1[7.999889602676851e+307] = {"":1.7976931348623157e+308}
return a/b/c+d
};
var argument2 = null;
var argument3 = null;
var argument4 = [100,"*T","MZ","A=ib"];
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = "WQ"
argument4[1] = {"25":"S","157":"","460":627,"%":"p","2.5351437289986335e+307":"V","1.7534615817332633e+308":157,"2.92146134475335e+307":1.6792131705308402e+308,"":"d0","5.914416467121701e+307":"t_","h":5.470629069136546e+307}
return a+b/c-d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[4] = ""
return a+b-c+d
};
var argument7 = {"969":"","":1.3805098197593922e+308,"g3":"",",":1.1463589873598402e+308,"1.171692140852735e+308":59,"1.7976931348623157e+308":"t"};
var argument8 = "(*V4";
var argument9 = ["D","g41"];
var argument10 = "";
var argument11 = 1.5862309230055502e+308;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[9] = false
argument11[3] = true
argument11[627] = true
return a*b*c/d
};
var base_0 = [618,893,242,59]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,893,242,59]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,893,242,59]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,893,242,59]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test866.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)