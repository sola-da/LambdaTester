





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[25] = 25
return a/b+c*d
};
var argument2 = r_0;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[6] = [714,157,122,595,126,460,59,969]
return a+b/c*d
};
var argument4 = null;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['^N'] = "l"
return a+b+c/d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['w'] = 1.5138207031461006e+308
argument8[0] = {"460":"w","-1":655,"8.685774020768136e+307":"p"}
return a-b*c+d
};
var base_0 = [126,893,157,607,618,595]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,893,157,607,618,595]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,893,157,607,618,595]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,893,157,607,618,595]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test272.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)