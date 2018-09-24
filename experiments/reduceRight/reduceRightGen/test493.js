





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][0] = null
base_0[4] = [1.7976931348623157e+308,49,714,655,607,82]
argument2[3.286160553564105e+307] = 893
return a+b-c-d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.4250811791542279e+308] = false
argument4[6] = "M"
return a*b*c+d
};
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[0] = [-100,618,100,655,82]
return a/b/c-d
};
var argument5 = true;
var argument6 = true;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['F2nCX>6'] = null
return a-b-c*d
};
var argument8 = {"82":5.452312816647337e+307,"":"[","m":"",">*LN":"","1.0129002939356324e+308":618};
var argument9 = {"655":157,"705":157,"":0,"1.7657330694133932e+308":"JmA","1.7976931348623157e+308":9.651049154294674e+307,"5.129521366080711e+307":1.5264041932246965e+308,"1.3192851796456936e+308":"","W p":""};
var base_0 = [705,25,-100,607,122]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,25,-100,607,122]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,25,-100,607,122]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,25,-100,607,122]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test493.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)