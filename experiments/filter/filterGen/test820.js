





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[618] = {"5":"^G}","403":2.4921056511026713e+307,"969":"a","":"","m":"","D:":6.943565069719891e+306,"8.57343467179916e+307":3.8980089808448797e+307,"T":"","1.098895751892193e+308":5e-324}
return a/b+c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4] = {"59":9.00959260501444e+307,"460":1.3105525634150226e+308,"893":893,"1.0979480466424817e+308":242,"H":"","U{":8.802888491078732e+307,"1.3399567948146021e+308":"","":"G5&"}
argument5[1.4034744228995816e+308] = -100
return a+b*c
};
var argument4 = r_1;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8][3] = false
argument7[126] = 8.21406304946366e+307
argument6[4.224481734419934e+307] = {"157":2.3112160398096685e+307,"714":823,"1.2179425463267595e+307":-1,"1.7976931348623157e+308":893,"1.3965171644902115e+308":"%?@[@0K:","3.5884657995621124e+307":"","<":242}
return a+b-c
};
var argument6 = r_0;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[0] = null
return a+b*c
};
var base_0 = [100,59,403,893,242,157,655,59,1.7976931348623157e+308,705]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,59,403,893,242,157,655,59,1.7976931348623157e+308,705]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,59,403,893,242,157,655,59,1.7976931348623157e+308,705]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,59,403,893,242,157,655,59,1.7976931348623157e+308,705]
var r_3= undefined
try {
r_3 = base_3.filter(argument7)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test820.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)