





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[-1] = false
argument2[1.5887552427096746e+308] = ["L*oe","c","T","*","p",">","o1W","P"]
return a/b-c-d
};
var argument2 = true;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[5] = -1
argument4[3.8120440085202614e+307] = 1.2026833894124548e+308
return a*b/c*d
};
var argument4 = true;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][2] = "lO1"
return a*b+c-d
};
var argument6 = {"705":"","893":1.5054756551265805e+308,"7.305952014860319e+307":1.6192748375780026e+308,"5.365209660229085e+307":8.265820712619537e+307,"R":969,"yq3<:x;":1.670624923818254e+308,"AwD":823,"J2":"","":893};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['AwD'] = {"0":"M","59":"","":"","_":"9","#":213}
return a+b+c-d
};
var argument8 = ["MP",25,607,"c?",")%0dl","j",126];
var argument9 = {"1.299221193971509e+308":893};
var base_0 = [-1,"NkaS",25,"<",213,843,"=>",823,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,"NkaS",25,"<",213,843,"=>",823,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,"NkaS",25,"<",213,843,"=>",823,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,"NkaS",25,"<",213,843,"=>",823,1.7976931348623157e+308]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test821.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)