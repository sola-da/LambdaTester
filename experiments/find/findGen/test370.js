





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.399309004356655e+308] = "X"
argument2[8.748669805137695e+307] = {"213":"S;","843":"","9.878906227811046e+307":"7Ce","u-^":9.853272981432464e+307,"k`7":"FW","5.390187881902632e+307":"%T9X%="}
argument2['f-d'] = {"8":""}
return a*b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][1] = null
argument2 = null
base_1[1][0] = {"3":893,"8.220654273454443e+307":"","6.751609182046444e+307":"","":""}
return a*b*c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0] = [25,607,893]
argument5[969] = 59
argument5[0] = null
return a+b+c
};
var argument4 = 714;
var argument5 = r_0;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['length'] = {"":8.799610226783049e+307,"9.507338618902309e+307":""}
argument8[1] = {"0":"","":2.6995921532013214e+307,"1.8737789527523484e+307":1.1741274363096973e+308}
return a/b/c
};
var argument7 = null;
var base_0 = [100,122,893,-1,843,403,893,25]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,122,893,-1,843,403,893,25]
var r_1= undefined
try {
r_1 = base_1.find(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,122,893,-1,843,403,893,25]
var r_2= undefined
try {
r_2 = base_2.find(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,122,893,-1,843,403,893,25]
var r_3= undefined
try {
r_3 = base_3.find(argument6,argument7)
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
require("fs").writeFileSync("./experiments/find/findGen/test370.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)