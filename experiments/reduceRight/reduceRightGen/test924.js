





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['K'] = [460,122,59,655,618,403]
return a-b+c*d
};
var argument2 = {"8.61987677159119e+306":7.814853161505756e+307,"5e-324":"[","u":"5","R":843,"":6.073699728866828e+306};
var argument3 = "$";
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[0] = ""
base_1[0][0] = {"595":4.2784626240679193e+307,"969":"8","D":"","2.135320170766108e+307":1.5148188063439276e+308,"|c":627,"":6.133378363659573e+307,"S":"","En":"","C1":"","4.4610977067049145e+307":1.198177549291448e+307}
return a/b+c/d
};
var argument5 = null;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][2] = "$"
return a/b/c*d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['F2nCX>6'] = ""
argument8[8.108492555774111e+307] = null
argument9[0] = 5.126439732625857e+307
return a/b+c*d
};
var argument8 = [607,126];
var base_0 = [25,157,783,157,618,823,-100,242,893]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,157,783,157,618,823,-100,242,893]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,157,783,157,618,823,-100,242,893]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,157,783,157,618,823,-100,242,893]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test924.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)