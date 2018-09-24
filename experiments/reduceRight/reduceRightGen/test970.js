





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['T'] = "0"
base_0[7] = ["f4","K","P"]
argument2[213] = 1.5635162965944937e+308
return a-b/c/d
};
var argument2 = r_0;
var argument3 = r_0;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['F2nCX>6'] = {"0":100,"705":"","843":6.293789758198759e+307,"1.2129024081615451e+308":"","7.704156600364459e+307":"","":"","`":783}
return a*b*c/d
};
var argument5 = false;
var argument6 = false;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[25] = null
argument9['!j'] = null
argument8[1.5887552427096746e+308] = "[%J"
return a*b*c+d
};
var argument8 = 59;
var argument9 = r_0;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[1.5288038039415373e+308] = [714,-100,-1,823,126]
argument11 = "-"
argument11['w'] = true
return a*b+c*d
};
var argument11 = null;
var base_0 = [843,5e-324,49]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [843,5e-324,49]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [843,5e-324,49]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [843,5e-324,49]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test970.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)