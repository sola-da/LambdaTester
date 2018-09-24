





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6] = 242
argument3[2] = 126
argument2['L'] = null
return a/b-c/d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['8('] = "M"
argument4[7] = [213,969,0,59,242,618,893,242,82]
return a-b*c/d
};
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4][3] = {"1.3227914992942038e+305":49}
argument4 = {"126":8.720871329419065e+307,"460":"c","1.2238380862834346e+308":""}
return a/b+c+d
};
var argument5 = r_2;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[6] = ""
argument8[4] = [157,"#",403,"NI",25,618]
argument7[5] = null
return a+b+c-d
};
var base_0 = ["z",618,1.7976931348623157e+308,"m",893,"z","D7","R]mk","lk",0]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["z",618,1.7976931348623157e+308,"m",893,"z","D7","R]mk","lk",0]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["z",618,1.7976931348623157e+308,"m",893,"z","D7","R]mk","lk",0]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["z",618,1.7976931348623157e+308,"m",893,"z","D7","R]mk","lk",0]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test413.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)