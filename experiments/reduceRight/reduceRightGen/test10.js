





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6] = null
base_0 = {"0":1.1396232427756326e+307,"157":1.0592180834569077e+308,"403":"e_","460":"","714":705,"n":"o%","1.0745167948887026e+308":"F,","c":403,"5.916143456252428e+307":1.4914996852897865e+307,")=":1.7249157979498379e+308}
base_0[6] = null
return a*b/c+d
};
var argument2 = null;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0] = {"403":655,"<":1.4082698335088964e+308,"9.03819489981901e+305":"t","1.3540892238558378e+308":2.5563880082260445e+307,"1.5441943338826718e+308":"B","":618,"1.7976931348623157e+308":5.739174656274552e+307,"2i[%":"u$a","I3":1.7804986861786532e+308}
base_1[3] = 213
return a-b+c*d
};
var argument4 = r_0;
var argument5 = {"49":"%","C":460,"A":")1","":714};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5] = ""
argument8[0] = false
return a*b+c*d
};
var argument7 = r_0;
var argument8 = {"627":"2","":"D[&{","9.3356407200842e+307":"|opJ*I"};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3 = [100,122]
argument11 = [607,843,"F_<",460,893,"YR"]
return a*b/c-d
};
var argument10 = null;
var base_0 = ["_4","l"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["_4","l"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["_4","l"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["_4","l"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test10.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)