





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3] = 618
base_0[0] = "8"
argument3 = 5.989284876763327e+306
return a+b/c+d
};
var argument2 = r_0;
var argument3 = {"0":823,"705":-100,"":843,"2.317924096085026e+307":"","e":""};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[7] = "p"
argument5 = true
return a/b+c-d
};
var argument5 = null;
var argument6 = {"5":"","627":"","714":"e=","969":"x8","L":8.240952960374957e+307,"":"!;","k<b":2.6133178693536796e+307,"6.774146424567938e+307":1.7121561290336313e+307,"NrUx":1.7387712272618494e+308,"!j":59};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0] = "2"
argument9 = [59,595,100]
base_2[0] = null
return a-b+c/d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4] = null
argument10 = null
return a*b/c*d
};
var argument9 = r_2;
var argument10 = [618,-100,100,82,705,82,714,618];
var base_0 = [59,157,714,242,627,655,213,82,705]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,157,714,242,627,655,213,82,705]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,157,714,242,627,655,213,82,705]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,157,714,242,627,655,213,82,705]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test17.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)