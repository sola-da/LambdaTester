





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[126] = null
argument1[1] = null
return a-b-c/d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.1207829086460726e+308] = 1.7976931348623157e+308
argument4['8('] = 5e-324
return a-b+c+d
};
var argument3 = r_1;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[655] = null
argument5[5] = -100
return a+b-c-d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['UU'] = "5"
base_3[2][2.819898637310108e+307] = ["+",969,893,157,"Cd",714,403,618,"0"]
argument7[8] = [618,714,823,607,59,893,82,-100]
return a+b+c+d
};
var argument6 = null;
var argument7 = r_1;
var base_0 = [100,627,893,126,595,403]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,627,893,126,595,403]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,627,893,126,595,403]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,627,893,126,595,403]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test587.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)