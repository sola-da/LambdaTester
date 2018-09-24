





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = [100,783,783,242,705,242,-100,157]
argument3[2] = ""
argument3['UU'] = ["?g","`@"]
return a*b+c+d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4 = true
argument3['L'] = 126
return a*b*c/d
};
var argument3 = r_1;
var argument4 = 5.456280728207564e+307;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['L'] = [893,969,403,-100,1.7976931348623157e+308,-100,213,5e-324,242,655]
argument6['^N'] = ["[7f"]
return a*b+c+d
};
var argument6 = false;
var argument7 = r_1;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1] = [1.7976931348623157e+308,460,122,25,823,1.7976931348623157e+308]
return a*b/c+d
};
var argument9 = {"-1":"","F&":"","B":49};
var argument10 = false;
var base_0 = [")*a","1","Rh+g","]","`","d","B"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [")*a","1","Rh+g","]","`","d","B"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [")*a","1","Rh+g","]","`","d","B"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [")*a","1","Rh+g","]","`","d","B"]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test538.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)