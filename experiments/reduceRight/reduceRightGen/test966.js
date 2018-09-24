





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][5] = ""
base_0[4] = false
return a*b-c/d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.5288038039415373e+308] = 1.0724494863192655e+308
argument4[8] = null
argument4['!j'] = {}
return a*b+c*d
};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[6] = 100
return a+b-c/d
};
var argument4 = true;
var argument5 = {"8":"","157":"","783":"J","969":"+","":4.984094824432965e+307,")":7.339595346376751e+306,",3f":"","1.1706227480013105e+307":893};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[122] = {")%":3.854949138238226e+307,"1.4789370993921887e+308":1.0251862271714343e+308,"1.7976931348623157e+308":"0","":"","-100":"?[","1.0536955036862481e+308":""}
return a+b*c-d
};
var argument7 = 1.3489300722515617e+308;
var argument8 = 6.900772411480512e+307;
var base_0 = [1.7976931348623157e+308,893,213]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,893,213]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,893,213]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,893,213]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test966.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)