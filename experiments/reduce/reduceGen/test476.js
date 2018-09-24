





var callbackArguments = [];
var argument1 = true;
var argument2 = "[#<";
var argument3 = [969,0];
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1['Cb'] = 6.804116441351809e+307
argument3['*c'] = ""
argument3[403] = {"1.1666520339128046e+308":5e-324}
return a*b*c/d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[90] = null
return a/b+c*d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1] = {"213":"Yj42","":1.6738341987960925e+308,"9.040704211187284e+307":1.4169337274917292e+308}
return a-b/c+d
};
var argument7 = r_2;
var argument8 = true;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[7.463432409233234e+307] = false
argument11[4] = {"213":1.9097830510613482e+307,"-100":"vw","":403,"W":"_","9.351701935709114e+307":1.6275086071205838e+308,"<":"t"}
argument10[9.331954948603684e+307] = {"893":"","":"","9.342373364553928e+307":"B"}
return a-b-c+d
};
var base_0 = [607,618]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,618]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,618]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,618]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test476.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)