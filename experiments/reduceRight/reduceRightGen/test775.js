





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = null
argument2[100] = 627
return a+b+c*d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[6] = {"100":"","6.339722953245668e+306":59,"":4.387566091545963e+307,"1.4266255139390353e+308":2.975241454647194e+307}
argument4[-1] = false
argument2[1] = null
return a-b+c/d
};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['v'] = ["E",-100,59,"P>A",893,"5",213,100]
argument4[9.624051682326797e+306] = ["-@H","[","6","|&+K",",G"]
argument4['y'] = [460,100,714,595,893,213,823,0,157,595]
return a/b/c+d
};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[82] = null
return a*b*c-d
};
var argument5 = true;
var base_0 = [82,49,403,-100,607,627]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,49,403,-100,607,627]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,49,403,-100,607,627]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,49,403,-100,607,627]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument4,argument5)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test775.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)