





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[7] = 100
argument2[3] = [618]
base_0[2] = [-100,1.7976931348623157e+308,100,893]
return a+b/c/d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = false
base_1['length'] = ""
return a/b-c+d
};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['v'] = null
return a*b*c+d
};
var argument4 = r_2;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = [122,0,")&a6v>l33",1.7976931348623157e+308,655]
base_3['length'] = 6.735847597490483e+307
return a-b/c*d
};
var base_0 = [783,655,823,460,-1,25,969,1.7976931348623157e+308,82,823]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,655,823,460,-1,25,969,1.7976931348623157e+308,82,823]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,655,823,460,-1,25,969,1.7976931348623157e+308,82,823]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,655,823,460,-1,25,969,1.7976931348623157e+308,82,823]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument5)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test202.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)