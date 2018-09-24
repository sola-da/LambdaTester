





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1 = 714
base_0['length'] = {"157":"i","893":1.2218838473670238e+308,"5e-324":5.534211203821633e+307,"":"Z","3.338194000174974e+306":1.3882446373903214e+308,"7.009018591426276e+307":618,"d{":"e","3.7856514662728426e+307":"B&1*q","0J":"Z"}
return a*b+c/d
};
var argument2 = true;
var argument3 = "";
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4 = 969
return a/b-c-d
};
var argument5 = true;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['8('] = false
base_2 = "gvqv"
base_2[5] = [627,618,126,618,893,595]
return a/b/c*d
};
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8 = "`<sp"
return a*b*c+d
};
var argument9 = {"157":1.544540865761692e+308,"":714};
var argument10 = r_2;
var base_0 = [100,843,157,122,-100,607,100,655]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,843,157,122,-100,607,100,655]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,843,157,122,-100,607,100,655]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,843,157,122,-100,607,100,655]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test132.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)