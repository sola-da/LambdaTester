





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[460] = ""
return a*b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['a'] = "1_+2=M'"
argument3[1.9097830510613482e+307] = null
base_1[3][0] = {"460":6.16225071481219e+307,"843":"","893":627,"":607,"r`G}":783}
return a-b-c
};
var argument3 = [893,"x","1","f&S",-100,460,460,157,618];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['U+WQ'] = ["G","Bp?5",82,714,"j","V",969,"i","t"]
argument5['ns'] = 595
argument5[4] = null
return a-b-c
};
var argument5 = r_2;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[460] = {"7":"g-64D","823":7.139518808789557e+307,"":1.1167787557308546e+308,"6.176753613729395e+307":"5","nFt":1.3713951224242728e+308}
return a*b+c
};
var base_0 = [618,-1,705,25,403,49,122,25]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,-1,705,25,403,49,122,25]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,-1,705,25,403,49,122,25]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,-1,705,25,403,49,122,25]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test910.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)