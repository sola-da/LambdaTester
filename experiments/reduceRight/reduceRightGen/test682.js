





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.738403780925446e+308] = {"49":3.206411351049406e+307,"5.514000623004864e+307":1.430704783078971e+308}
argument2[4] = true
return a-b-c*d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4 = {"5":1.6501350034532445e+308,"4.627624583175398e+307":213,"1.2746008568102674e+308":1.795024559129433e+308,"w":"","":""}
base_1[4] = -1
return a-b*c+d
};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][5] = {"100":655,"893":"","3.919320146670121e+307":783,"":"","1.7527746114832782e+308":"","3.69206794445752e+307":"Ka","-100":"","J":")"}
base_2[0] = [-1,823,714,157]
argument5[655] = {"969":"%"}
return a-b+c-d
};
var argument4 = false;
var argument5 = false;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[7] = null
argument7[1] = false
argument7[3.286160553564105e+307] = [783,893,242,25,618,783,714]
return a+b*c-d
};
var argument7 = null;
var base_0 = [460,59,157,714,460,122]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,59,157,714,460,122]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,59,157,714,460,122]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,59,157,714,460,122]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6,argument7)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test682.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)