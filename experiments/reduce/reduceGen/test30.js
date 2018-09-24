





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0] = false
return a/b+c-d
};
var argument2 = [25,627,25,595,5e-324,59,213,460,-1];
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = ["4"]
return a-b-c/d
};
var argument4 = false;
var argument5 = {};
var argument6 = 7.90595745684578e+307;
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[7] = {"969":7.627855480641706e+307,"x":823,"1.6032028229609818e+308":1.295213295199355e+308,"5.699609432944548e+307":1.2605241020534283e+308,"":714,"1.685565957258986e+308":0}
base_2['length'] = {"595":1.7827021435410226e+308,"714":1.0830644608502116e+308,"1.0279135680084984e+308":"M","4Zp":627,"":49}
return a-b*c/d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10 = false
return a/b*c*d
};
var argument10 = [82,783,595,242,969,823,823];
var argument11 = r_1;
var base_0 = [49,607,595,607,618,627,-100,122]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,607,595,607,618,627,-100,122]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,607,595,607,618,627,-100,122]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,607,595,607,618,627,-100,122]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test30.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)