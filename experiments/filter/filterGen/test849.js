





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3][0] = ["t","zG"]
return a+b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.1679954109349114e+308] = 59
argument4[126] = ["^","X","t>","l","6R"]
base_1['filter'] = ""
return a-b+c
};
var argument3 = ["H",627,213,714,403,242,"C","B","mO9C[","_T"];
var argument4 = true;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][0] = 1.4792205760221646e+308
argument5[0] = {"9.496737443500964e+307":8.099653610884623e+307,"":655}
return a*b+c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = {"823":1.2214339291359119e+308,"`Y;":8.399354162065999e+307,"X":1.3293962399159944e+307,"":7.173490483849331e+307,"4.3760244945806174e+307":8.540062203531481e+307,"1.2827753446274256e+308":122,"1.7445391789088273e+308":2.645409972507282e+307,"1.775070073389909e+308":""}
return a-b-c
};
var argument7 = null;
var base_0 = [242,823,403]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,823,403]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,823,403]
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test849.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)