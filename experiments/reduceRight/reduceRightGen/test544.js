





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[627] = true
base_0[4] = {"":5e-324}
return a+b+c/d
};
var argument2 = null;
var argument3 = "";
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[6] = {"0":9.761215985509356e+307,"126":1.5761455651051422e+308,"595":"","969":"","":"","R":6.206585680846542e+307,"%zo":823,"6.684418090550874e+307":82,"1.1658589878322381e+308":1.0328205826461224e+308}
return a*b+c-d
};
var argument5 = null;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1] = 618
return a+b*c/d
};
var argument7 = r_0;
var argument8 = [607,893,893,823,714,126,843,823,82];
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2] = ["!i","oGL","}h5|G8","Ltq"]
argument10[82] = {"Xb":1.6438381018171636e+308,"*R":8.716387038975677e+307,"c":"]","":122,"5.56789758572907e+307":"","#":122,"2k":""}
argument10[100] = false
return a+b/c-d
};
var base_0 = [1.7976931348623157e+308,705,242,5e-324,213,82,705,460,213]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,705,242,5e-324,213,82,705,460,213]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,705,242,5e-324,213,82,705,460,213]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,705,242,5e-324,213,82,705,460,213]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test544.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)