





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][0] = null
argument3[1] = null
return a*b+c
};
var argument2 = {"126":242,"1.741994422719055e+308":1.1413324704484828e+308};
var argument3 = {"126":893,"714":"","eE":"","6XF":49,"h":783,"":2.8683953849229366e+307,"1.4466549531775184e+308":823,"1.6667587129951091e+308":8.202524596568263e+307};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[4] = [213,"q(jw","%","C",25]
return a-b-c
};
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1] = {"242":"X","1.8233147087370219e+307":6.776886775093255e+307,"":1.231145298402946e+308,"H":595,"6.554752476909879e+307":1.3612998837583666e+308}
return a*b+c
};
var argument7 = {"714":"","1.2649392475586269e+308":"n6&S"};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = false
return a/b/c
};
var argument9 = true;
var argument10 = null;
var base_0 = [705,157,0,460,0,126,714]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,157,0,460,0,126,714]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,157,0,460,0,126,714]
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapGen/test826.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)