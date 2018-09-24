





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2] = ["=","3"]
base_0[3][1] = 8.2611514857431e+307
return a-b+c
};
var argument2 = null;
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2][5] = {"0":969,"":"T","3.1421982269267003e+307":"qDE","2.9908018573360355e+307":"",">":"Mo","1.4685288127619259e+308":""}
base_1[3][4] = {"59":"D","100":"","595":"","1.747073639289898e+308":1.068580376985062e+308,"+":"u","1.351071706435026e+307":3.075519300742029e+307,"`a":"lh$y`","3.3209431911488963e+307":"mz^,"}
argument5[5] = null
return a+b+c
};
var argument5 = null;
var argument6 = true;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[9] = [82,213,157,49,59]
argument8[1.6177106033227046e+308] = [0,714,969,25,157,893,5e-324,893,-100]
argument9[893] = null
return a-b+c
};
var argument8 = false;
var argument9 = null;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = true
argument12[3] = [893,460,242,25]
return a-b*c
};
var base_0 = ["j",126,0,"5_c",157,655,"_",823]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument10)
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
require("fs").writeFileSync("./experiments/map/mapGen/test535.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)