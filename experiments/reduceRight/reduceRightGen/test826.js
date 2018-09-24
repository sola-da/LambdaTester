





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2] = true
argument3[4] = "fU"
return a+b*c+d
};
var argument2 = null;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1.5887552427096746e+308] = true
return a/b-c*d
};
var argument4 = {"843":3.267863283064042e+307,"-1":"","F?^":"8","":82,"-#`":"","Fd-,":""};
var argument5 = [460,843,607,618,595,-1,122];
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[-1] = false
argument8['8('] = ["z","eMe_","I:;:","]","^","F+((eJ!"]
base_2[2][2] = true
return a-b-c/d
};
var argument7 = [618,655,122,655,705,714,705,618,0];
var argument8 = 8.68169787933524e+307;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[5] = 1.5646757415344831e+308
base_3[1] = null
argument10['y'] = null
return a+b*c*d
};
var base_0 = ["QM",5e-324,843,843]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["QM",5e-324,843,843]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["QM",5e-324,843,843]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["QM",5e-324,843,843]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test826.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)