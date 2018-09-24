





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[1] = [969,403,157,823,714,618,59,783,705]
return a/b/c/d
};
var argument2 = [122,705,460,1.7976931348623157e+308,893,5e-324,607,122,-100];
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['UU'] = [59,0]
return a*b/c-d
};
var argument5 = r_1;
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[7] = false
return a-b/c*d
};
var argument8 = [-1,460,0,126,49,595,969,157,705];
var argument9 = r_1;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11['^N'] = 1.1265980030122182e+308
argument11[82] = [595,122,627,25,460,100,607,-1]
return a+b*c*d
};
var argument11 = null;
var argument12 = true;
var base_0 = [122,893,100,783,1.7976931348623157e+308,126,595,213,403]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,893,100,783,1.7976931348623157e+308,126,595,213,403]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,893,100,783,1.7976931348623157e+308,126,595,213,403]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,893,100,783,1.7976931348623157e+308,126,595,213,403]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test316.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)