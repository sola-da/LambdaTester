





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[-1] = true
argument2[5] = {"607":"","714":"","783":607,"":3.006392681463502e+307,"<":1.4764805415421524e+308,"{":"","o":1.277015513407614e+308}
return a+b-c
};
var argument2 = null;
var argument3 = "z8<";
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = ["TNF3"]
base_1[6][4] = null
argument5[8.748669805137695e+307] = ["{","9W",",","h^","C-MgO","SLS","?x","P","S"]
return a+b+c
};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2['length'] = false
base_2[1][0] = 893
argument6 = "TRTQ"
return a/b/c
};
var argument7 = null;
var argument8 = true;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[3] = [969,595,-1,-100,893,82,783,59,82,49]
base_3[7] = null
base_3[1][6] = {"0":"",",":"R","4.385523552704255e+307":"","4.095353697043565e+306":"","":"i"}
return a/b+c
};
var base_0 = ["2O","Ug0"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["2O","Ug0"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["2O","Ug0"]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["2O","Ug0"]
var r_3= undefined
try {
r_3 = base_3.find(argument9)
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
require("fs").writeFileSync("./experiments/find/findGen/test789.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)