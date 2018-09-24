





var callbackArguments = [];
var argument1 = null;
var argument2 = true;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[460] = 1.535333767231965e+308
argument3[6.35085648319999e+307] = false
return a+b/c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[460] = [627,-100]
argument5[0] = {"b:":-1,"v|":"]jb9","-1":1.6777556622492539e+308,"1.0089583211205334e+308":1.6119578604373706e+308,"":1.5665399747343429e+308,"1.1659860869589554e+308":"M"}
return a-b-c+d
};
var argument6 = true;
var argument7 = false;
var argument8 = 1.7413784740869637e+308;
var argument9 = null;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[3] = {"655":"q%","":"@8T","o":"]","M":9.226252883344053e+307,"w":-1,"1.366084780809587e+308":7.313410704660712e+307,"7.306899808312866e+307":"9'","=1":1.3696787540379638e+308}
return a-b-c/d
};
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[2] = [157,242,126,242,823,213]
argument13[2] = false
base_3[3] = null
return a+b+c+d
};
var argument12 = true;
var argument13 = null;
var base_0 = ["k","m"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["k","m"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["k","m"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["k","m"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test770.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)