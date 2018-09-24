





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1] = 1.0383342650752441e+308
argument3['!j'] = 7.997170147018137e+307
return a+b-c+d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[0] = 1.4821426203848854e+308
argument3['y'] = {"157":1.3695530807998861e+308,"1.3308011131117616e+308":"","2.7860966465886693e+307":2.2210560871687147e+307,"9.065222218124603e+307":"","":4.012666749218461e+304,"5.819561973171521e+307":"U4):m","tbZ":""}
base_1[4][1.7976931348623157e+308] = {}
return a-b*c-d
};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2 = 1.028876027648174e+308
return a+b+c+d
};
var argument4 = false;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[4] = ["7","VyL",":",";=","B","NQ","Y","Tw","&3"]
base_3[5] = ""
base_3[6] = true
return a*b+c*d
};
var argument6 = [783,126,1.7976931348623157e+308,82,25];
var base_0 = [-100,213,-1]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,213,-1]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,213,-1]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,213,-1]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument5,argument6)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test279.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)