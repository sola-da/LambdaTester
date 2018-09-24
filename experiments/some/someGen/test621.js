





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[9.551053197482062e+307] = 0
base_0[5][0] = false
base_0[1][8] = null
return a*b-c
};
var argument2 = -1;
var argument3 = [";","2","xXv|A","B","G!"];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1] = 8.444665322790818e+307
argument6[6] = true
argument6[9.551053197482062e+307] = true
return a+b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3] = ["U","o","!","X_W<"]
base_2[2][5] = {}
return a+b*c
};
var argument6 = null;
var argument7 = null;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3 = {"1.1235480476955468e+307":"+v","":"k=","E%":"","-1":""}
return a/b/c
};
var argument9 = r_0;
var argument10 = {"595":"|","":"","uL":"'","1.0235365275107083e+308":"","k":"","1.2611301979960952e+308":1.102974683286381e+308,"7.890808271660819e+307":403};
var base_0 = ["W",126,"Z","u`","X"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["W",126,"Z","u`","X"]
var r_1= undefined
try {
r_1 = base_1.some(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["W",126,"Z","u`","X"]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["W",126,"Z","u`","X"]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/some/someGen/test621.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)