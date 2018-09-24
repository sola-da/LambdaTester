





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.921533274132203e+307] = 655
argument2[1.738403780925446e+308] = [705,213,213,213,893,126,122,122]
return a*b*c/d
};
var argument2 = false;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[2] = null
argument4['v'] = {"9":"B","595":607,"627":"","=6":"","":"n|6K}","@32":"","4.1318074368701146e+307":1.3114075684825867e+308,"7E":"","]E":7.830566582693481e+307}
argument5[7] = [783,627,49,627,213,49,157]
return a+b+c-d
};
var argument4 = null;
var argument5 = 3.955825745868033e+307;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1] = true
return a/b-c+d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['L'] = false
argument8[8.575765443877852e+307] = 2.526937630107988e+305
argument9[1][4] = null
return a-b+c*d
};
var argument8 = {"655":"!","":"g3=","4.330026102563986e+307":1.3057861926161424e+308};
var argument9 = null;
var base_0 = [843,595,969,242,82,627,705,49]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [843,595,969,242,82,627,705,49]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [843,595,969,242,82,627,705,49]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [843,595,969,242,82,627,705,49]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test612.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)