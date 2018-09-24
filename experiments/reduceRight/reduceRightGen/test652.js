





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[8.575765443877852e+307] = {"":1.6954342304338137e+308,"6.55095237786555e+307":1.4024391195106618e+308,"1.0202649677869138e+308":"I","K:":3.804975371883923e+307}
argument3[-1] = null
return a*b-c/d
};
var argument2 = false;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = true
argument4['v'] = null
argument4[8.575765443877852e+307] = null
return a+b+c+d
};
var argument4 = r_1;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3.286160553564105e+307] = [25,655,627,122,1.7976931348623157e+308,893,59,618]
return a-b*c/d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4][3] = false
argument8[1] = 4.541182539034173e+307
return a/b*c/d
};
var argument7 = r_3;
var base_0 = [607,"b",1.7976931348623157e+308,49]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,"b",1.7976931348623157e+308,49]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,"b",1.7976931348623157e+308,49]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,"b",1.7976931348623157e+308,49]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6,argument7)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test652.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)