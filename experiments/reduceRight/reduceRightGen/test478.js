





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = {"25":"","627":"}g%","":"[9","7.900315702611036e+307":9.032674180208693e+307,"*C4":"`Z","8.887110304996866e+307":""}
argument3[7] = [595,"#!"]
return a+b+c+d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3.286160553564105e+307] = "r"
base_1[3] = null
return a*b-c*d
};
var argument3 = true;
var argument4 = true;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[627] = [403,1.7976931348623157e+308,-100,82,100,-1,893,403]
argument6['K'] = null
return a*b+c-d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[655] = false
argument7[3.8120440085202614e+307] = true
argument8['!j'] = ",':D*1c"
return a+b/c+d
};
var argument7 = null;
var argument8 = 4.15546819030915e+307;
var base_0 = [0,"F2",59,"$DS","LO","W4Q["]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,"F2",59,"$DS","LO","W4Q["]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,"F2",59,"$DS","LO","W4Q["]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,"F2",59,"$DS","LO","W4Q["]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test478.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)