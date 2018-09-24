





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[705] = 6.038949127690963e+307
return a/b-c*d
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1] = true
argument6['T'] = {"2.5717198070314036e+307":"xB","-1":9.419003806652087e+307,"1.6432699336859106e+308":1.3275245923122672e+308,"{":"","Z":1.0044133741263663e+308,"1.6084462912942726e+308":"",")e":618,"":714,"4.217454424765382e+307":5.241496723445703e+307}
argument5[5] = ""
return a*b-c+d
};
var argument5 = 100;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[9.624051682326797e+306] = true
argument8[126] = null
return a*b-c*d
};
var argument7 = 460;
var argument8 = true;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10['T'] = false
argument10['F2nCX>6'] = ""
base_3[3] = 1.7976931348623157e+308
return a/b/c-d
};
var argument10 = [")","Rq","l5","C ","4,","x","DB"];
var argument11 = {"1.7290669655789622e+308":"y","":""};
var base_0 = ["^","jZ","!","Fo","D^","g","i"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["^","jZ","!","Fo","D^","g","i"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["^","jZ","!","Fo","D^","g","i"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["^","jZ","!","Fo","D^","g","i"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test720.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)