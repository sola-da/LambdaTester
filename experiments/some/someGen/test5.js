





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[7] = 1.360504603159235e+308
base_0[3] = null
argument3 = 1.3647029660671236e+308
return a+b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.6798476101238045e+308] = null
base_1 = null
base_1['length'] = [49,969,705,969,1.7976931348623157e+308,5e-324]
return a*b-c
};
var argument3 = [823,59,627,5e-324,122,823,82,714];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2] = true
return a/b+c
};
var argument5 = [893,595,627,213,49,59,82,843,714,0];
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6] = 9.761941018035852e+307
base_3[2] = {"82":122,"969":"","8.055429009809323e+307":5e-324,"5e-324":157,"":1.5120010787817552e+308,"wYSgn*":"",";vU":1.727040507346682e+308}
base_3[4] = "N"
return a+b/c
};
var base_0 = [823,"U",607,460]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,"U",607,460]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,"U",607,460]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,"U",607,460]
var r_3= undefined
try {
r_3 = base_3.some(argument6)
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
require("fs").writeFileSync("./experiments/some/someGen/test5.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)