





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[8] = [823,893,1.7976931348623157e+308,823,126,-100]
return a+b*c*d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[0] = [618]
argument3[1] = {"100":"l","g":"Kvl708v","":3.431620768698896e+306,"C":1.4023644372181004e+308}
return a+b-c+d
};
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['{S'] = "qG"
argument5[1] = null
base_2[8] = false
return a/b*c+d
};
var argument5 = [403,714,-100,969];
var argument6 = false;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[3] = null
return a/b-c+d
};
var argument8 = {"403":1.3442923413709028e+308,"n":655,"":"e","=A4":"","1.496636726212936e+308":122,"7.690620117095441e+307":","};
var base_0 = [893,969,607,122,"9*C",655,"S$","LIT"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,969,607,122,"9*C",655,"S$","LIT"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,969,607,122,"9*C",655,"S$","LIT"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,969,607,122,"9*C",655,"S$","LIT"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test149.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)