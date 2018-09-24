





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][9.12287810829114e+307] = true
base_0[2][0] = {"714":"","1.6427457115429536e+308":"w_","9.59282818038623e+307":"S","5.098799210715335e+307":9.004160695446199e+307,"Z":1.3299666966232253e+308,"1.613700633954452e+308":"","":403}
return a+b/c*d
};
var argument2 = 4.0855939797971483e+307;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3] = false
base_1[3] = "Fs"
return a-b-c*d
};
var argument4 = 4.221840997353262e+307;
var argument5 = null;
var argument6 = {"3.7603071783981085e+307":7.836786106954754e+307,"":""};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[7] = {"595":"_","618":1.430857070516719e+308,"705":"","969":"","":"","5.230057945761228e+307":-1,"4.205532180823588e+307":627,"-1":""}
argument5[25] = null
argument5[4] = null
return a+b/c+d
};
var argument8 = {"2":460,"607":7.00729781026865e+307,"893":126,"9.55224557750271e+307":627,"":1.2899507605464805e+307,"1.5482448743210817e+308":1.2884389935289733e+308,"e|":"|"};
var argument9 = 100;
var argument10 = null;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1] = [126,618,1.7976931348623157e+308,843,595,0,82,213]
argument9[2] = null
return a+b/c/d
};
var base_0 = [843,823,"-",82,":_",403]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [843,823,"-",82,":_",403]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [843,823,"-",82,":_",403]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [843,823,"-",82,":_",403]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test937.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)