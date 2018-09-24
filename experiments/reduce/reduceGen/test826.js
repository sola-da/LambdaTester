





var callbackArguments = [];
var argument1 = true;
var argument2 = {"8.981789316726321e+307":25,"'":7.20355792467902e+307};
var argument3 = 618;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[82] = "yeyn"
argument3[403] = 3.707484981392852e+306
return a*b-c/d
};
var argument5 = true;
var argument6 = {"595":3.279342313179733e+307,"":"J}","1.4205726959827606e+308":"","V":100,"?e":"`","9.75203236036492e+307":627,"9.59283185992692e+307":3.3321258186591897e+307};
var argument7 = [100,843,893];
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[4] = 0
base_1[0][9.12287810829114e+307] = [5e-324]
return a/b/c/d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5] = ""
base_2[0][4] = "!"
return a+b*c-d
};
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[627] = false
argument12[403] = [122,126,-1,460,213,843,59]
argument12[5] = {"122":"mgR","893":"@|w","1.7677821255035736e+308":"ChR;<","G":"M","8O":"","":705,"1.0278294858061182e+308":"G","3.337577694376711e+307":705,"-100":7.020831392637673e+307,"i":460}
return a+b+c-d
};
var base_0 = ["F","I@$","{)66V","M^g","Fh","Zx","^z","!hr4"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["F","I@$","{)66V","M^g","Fh","Zx","^z","!hr4"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["F","I@$","{)66V","M^g","Fh","Zx","^z","!hr4"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["F","I@$","{)66V","M^g","Fh","Zx","^z","!hr4"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test826.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)