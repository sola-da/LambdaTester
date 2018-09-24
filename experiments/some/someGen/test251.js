





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2 = [0,705,893,618,403]
return a*b+c
};
var argument2 = true;
var argument3 = {"122":403,"":"B","9.002548138894187e+307":7.60229268401253e+307,"1.4039820686913427e+308":"","4.850459238327186e+307":8.809993139242034e+307,"H5(Ob":-1,"$":6.209875132005905e+307};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4] = 59
base_1[1][8] = ""
base_1[9] = false
return a-b-c
};
var argument5 = r_0;
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[618] = [59,705,823,-1]
argument8['_W'] = false
argument7[4] = null
return a*b-c
};
var argument8 = "2Jh";
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][8] = 1.0974323543207463e+307
argument10[1.6798476101238045e+308] = null
return a*b+c
};
var base_0 = [655,157,213,100,126,893,627,-100,403,893]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,157,213,100,126,893,627,-100,403,893]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,157,213,100,126,893,627,-100,403,893]
var r_2= undefined
try {
r_2 = base_2.some(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,157,213,100,126,893,627,-100,403,893]
var r_3= undefined
try {
r_3 = base_3.some(argument9)
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
require("fs").writeFileSync("./experiments/some/someGen/test251.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)