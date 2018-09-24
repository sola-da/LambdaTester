





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.5288038039415373e+308] = true
argument2['K'] = "$'Aj"
return a/b*c*d
};
var argument2 = true;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[126] = [783,403,82,893,157,157,213,893,893,783]
argument5['T'] = 1.240931574896076e+308
return a+b+c/d
};
var argument4 = r_0;
var argument5 = [-1,783,843,25,783,783,618,126,783];
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.1207829086460726e+308] = {}
return a+b/c*d
};
var argument7 = r_1;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[3.286160553564105e+307] = null
argument9[1.5887552427096746e+308] = {"126":"i'","P|b":8.766520338653442e+307,"-1":"","P":25,"":""}
argument9[4] = 9.737088021502087e+307
return a+b+c*d
};
var base_0 = ["D","lkg(1","J","Id","v","V"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["D","lkg(1","J","Id","v","V"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["D","lkg(1","J","Id","v","V"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["D","lkg(1","J","Id","v","V"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test833.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)