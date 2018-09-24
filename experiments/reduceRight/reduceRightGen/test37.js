





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[7] = [25,100,893,82,843,157,-1]
return a+b+c+d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[3] = {"893":3.6642119533505707e+307,"":"","-1":25,"1.723007478615662e+308":122,"5.433424559864274e+307":403,"v":655,"1.5229082987936669e+308":"","4.3267806068490537e+307":5e-324,"6.931414536955372e+307":""}
argument4[6] = null
return a/b+c*d
};
var argument3 = true;
var argument4 = ["h",969,"TT",126,"n",893];
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1] = null
return a-b-c+d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['!j'] = [82,893,823,595,122,714,122,126,122]
argument8[3] = null
argument8[1] = null
return a*b+c-d
};
var argument7 = r_0;
var base_0 = [969,5e-324,">",618,"5","o:","H"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,5e-324,">",618,"5","o:","H"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,5e-324,">",618,"5","o:","H"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,5e-324,">",618,"5","o:","H"]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test37.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)