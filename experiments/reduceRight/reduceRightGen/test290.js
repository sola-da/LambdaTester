





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = {"8":"","157":"","627":1.4121401248545185e+308,"":"z","1.5232366194565586e+308":"Qg","Kt":1.4799115380880334e+308}
return a+b-c/d
};
var argument2 = false;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['v'] = false
return a+b-c*d
};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['w'] = "Q"
return a+b*c/d
};
var argument5 = null;
var argument6 = false;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[4] = 1.911532013357299e+307
argument9['!j'] = false
base_3[4][1.7976931348623157e+308] = null
return a-b-c+d
};
var argument8 = null;
var argument9 = true;
var base_0 = [100,-100,893]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,-100,893]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,-100,893]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,-100,893]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test290.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)