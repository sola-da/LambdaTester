





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = false
argument1[3] = [-100,"@","`GU5",-1,"T",595,59,"l",59]
base_0[3] = [82,403,655,969]
return a*b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[0] = 595
argument3 = null
return a/b+c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[607] = true
base_2[3] = "t"
base_2[6] = ""
return a/b+c
};
var argument4 = {"213":"","618":714,"1.1850590874489097e+308":"<k","r`":8.624482879827024e+307,"3.8350415936058995e+307":1.6804708052941125e+308,"":">E","ma":9.425166395606674e+307,"d":6.092443021696181e+307,"W_":"","'p":627};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['A'] = 4.525815751510103e+307
base_3[0][1.4677087964888306e+308] = 1.3693284047882144e+308
return a/b+c
};
var argument7 = true;
var base_0 = [460,595,157,-1,403,627,-1,0]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,595,157,-1,403,627,-1,0]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,595,157,-1,403,627,-1,0]
var r_2= undefined
try {
r_2 = base_2.map(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7)
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
require("fs").writeFileSync("./experiments/map/mapGen/test177.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)