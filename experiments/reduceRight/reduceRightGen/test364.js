





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['8('] = null
argument2[2] = ""
argument3[3] = {}
return a-b/c*d
};
var argument2 = true;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['UU'] = {"0":1.7705588464804458e+308,"49":25,"82":1.6953882629939128e+308,"460":460,"":"","1.7261810005533945e+308":49,"2.0393291769028384e+307":"","-c":"","k":1.4983491334095916e+308}
return a*b*c+d
};
var argument5 = 1.559744365797161e+307;
var argument6 = [655,-100,242,242,100,25,0,893];
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[8.575765443877852e+307] = {"59":"","1.076832147384313e+307":1.0815119918979892e+308,"c":"N"}
base_2[1][2] = ["+","k","_","waQH","xc-o"]
return a+b+c-d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9['{S'] = true
base_3[4] = [893,49,595,-1,595,-100,122,969,655]
return a+b/c/d
};
var argument9 = r_2;
var argument10 = {"59":1.515150649380959e+308,"":"M0","1.1596322454353835e+308":1.318080797077948e+308,"1.7970189351845126e+308":7.303201808839228e+307,"1.4279613862868489e+308":2.7608538342741447e+307};
var base_0 = [25,893,49,59,403,893]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,893,49,59,403,893]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,893,49,59,403,893]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,893,49,59,403,893]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test364.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)