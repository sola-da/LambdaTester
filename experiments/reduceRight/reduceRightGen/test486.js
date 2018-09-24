





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['v'] = null
base_0[4] = {"25":0,"1.1328436137907035e+308":"a","Q><":4.0737227502458114e+307,"":"|t","?%":6.348620818208779e+307,"1.05576391369604e+305":"<"}
base_0[0][0] = {"403":"","":"7}","-1":595,"1.2914288996794494e+308":655,"1.4542750134075283e+308":"","5e-324":1.2522299132567939e+308,"8.406810138915523e+306":"m","J$-":2.8198366532876196e+307,"1.4240203058220243e+308":403}
return a-b-c-d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][3] = 1.7976931348623157e+308
base_1[7] = null
return a+b+c/d
};
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[82] = false
argument6[126] = true
argument5[627] = ""
return a/b-c*d
};
var argument5 = ["B","Mf","0","CB","]"];
var argument6 = false;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[4] = 213
return a/b+c+d
};
var base_0 = ["B","T","EB"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["B","T","EB"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["B","T","EB"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["B","T","EB"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test486.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)