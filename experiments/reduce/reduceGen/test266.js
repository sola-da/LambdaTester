





var callbackArguments = [];
var argument1 = [893,1.7976931348623157e+308,607,783,157,5e-324,-100];
var argument2 = true;
var argument3 = {"3":"$u","25":"-","607":1.5142585240022878e+308,"705":"J","1.359136872727139e+308":893,":S":"%;","18{":655,"":""};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1 = ["h*X2","(c"]
base_0[1][3] = 1.7341189096182924e+308
base_0[9] = {"49":"o","V":1.7849528158346844e+307,"P9":1.5344866973178681e+308,"1.7360496737788803e+308":"","_":2.1561845507200056e+307,"1.1818306555670082e+308":"","":893,"T":"","1.3180951791069857e+308":9.500268941140676e+307}
return a+b+c/d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1] = 783
return a-b-c+d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[5] = true
return a/b*c-d
};
var argument7 = r_2;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['length'] = 823
return a*b/c/d
};
var base_0 = [705,595,655,607,893,460]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,595,655,607,893,460]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,595,655,607,893,460]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,595,655,607,893,460]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test266.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)