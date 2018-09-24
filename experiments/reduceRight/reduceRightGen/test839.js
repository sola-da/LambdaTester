





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.1207829086460726e+308] = [5e-324,783,0,595,49,157,242,627,893]
argument1[1] = {"1AK":"`","ABa":""}
return a*b*c+d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['L'] = ["v","V","gT","{","ZXR","G","@9"]
return a*b/c/d
};
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[9.624051682326797e+306] = {"403":59,"607":1.3351985568948201e+308,"4.139467791499818e+307":"<","":"t","1.070657767044115e+308":"","3.270907062957043e+307":893,"U":"3<#"}
base_2[4][1.7976931348623157e+308] = ["31",">XsF"]
return a-b+c/d
};
var argument5 = r_1;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[2] = true
base_3 = ["vT3",714,460,"GJ",157,"-|q","B1xT<",25]
return a/b+c+d
};
var argument7 = "";
var argument8 = 1.5372002262627794e+308;
var base_0 = [403,893]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,893]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,893]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,893]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test839.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)