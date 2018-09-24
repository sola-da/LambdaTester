





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = {"595":49,"":1.298405621886661e+308,"(+":"2d","1.3316001428686647e+308":""}
base_0 = true
argument2[-1] = "b)|"
return a/b/c-d
};
var argument2 = false;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[-1] = [-1,714,157,403,969,242,82,823]
argument6[3] = false
argument5[1.921533274132203e+307] = 242
return a/b-c+d
};
var argument5 = r_0;
var argument6 = {};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[3] = 1.7652301380673718e+308
argument8[8] = 1.163138964159149e+308
base_2[2][2] = ["3d",25,"Ud@N","m%","f#="]
return a-b*c-d
};
var argument8 = null;
var argument9 = {"0":5e-324,"3.152358971301689e+306":"a"};
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[122] = null
return a-b/c+d
};
var argument11 = r_2;
var base_0 = ["Tt","2o","$Ss","6","M","U&0%4s|"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Tt","2o","$Ss","6","M","U&0%4s|"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Tt","2o","$Ss","6","M","U&0%4s|"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Tt","2o","$Ss","6","M","U&0%4s|"]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test938.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)