





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][0] = false
argument3 = 59
return a*b-c+d
};
var argument2 = {"0":"EDzv","59":9.769991451578944e+307,"-100":618,"X9":6.129389492924566e+307,"GV":"","":"","`jL{":893,"8.860575838731721e+307":6.774374258810923e+307,"1.5046565786052023e+308":2.410954668532999e+307};
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['K'] = false
argument5['F2nCX>6'] = "1"
return a+b-c+d
};
var argument5 = null;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[3.8120440085202614e+307] = {"157":82,"403":3.158372346412375e+307,"714":"n","-1":"Px","1.2701405499360306e+308":25,"1.272190706536128e+308":126,"Vh":"I","":1.3096050566281907e+308,"1.2927290779359761e+308":""}
argument8[-1] = [0,100,403,126]
base_2[8] = [213,122]
return a/b+c*d
};
var argument7 = r_0;
var argument8 = false;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['length'] = {"100":"1","213":82,"":-100,"1.7747890034039705e+308":"=Y-","`":5e-324}
argument10[1.738403780925446e+308] = {"1.265946073029557e+308":1.501067310438152e+308}
return a+b-c*d
};
var base_0 = ["r","H","=",242,1.7976931348623157e+308,"[$%",">"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["r","H","=",242,1.7976931348623157e+308,"[$%",">"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["r","H","=",242,1.7976931348623157e+308,"[$%",">"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["r","H","=",242,1.7976931348623157e+308,"[$%",">"]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test688.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)