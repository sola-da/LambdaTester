





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2][5e-324] = [705,0,714,-1,460,627]
argument2[4] = true
base_0 = {"157":7.179164747405071e+307,"$|4D|ow":"r","":823,"R":"wG"}
return a*b+c
};
var argument2 = null;
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5] = [460,122,618,-1]
base_1[2] = {"49":"v","82":2.9387717006492613e+307,"242":"ZH","403":-1,"969":714,"":403,"1.2685730715529694e+308":618,"1.5268839264433377e+308":7.336353300738181e+307,"zX#":"","1.0313521413407893e+308":100}
return a*b+c
};
var argument5 = {"618":6.168551368612603e+307,"oDO":3.034188390445991e+307,"_?_":3.0993516686509517e+307};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[6] = [893,893,823]
return a*b*c
};
var argument7 = false;
var argument8 = null;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[1] = true
argument10[5] = 3.577855906433291e+306
return a+b+c
};
var argument10 = r_2;
var base_0 = ["CiD`E","-","2","$Mk","P","=+",")","OQrm[H","a&L,D"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["CiD`E","-","2","$Mk","P","=+",")","OQrm[H","a&L,D"]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["CiD`E","-","2","$Mk","P","=+",")","OQrm[H","a&L,D"]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["CiD`E","-","2","$Mk","P","=+",")","OQrm[H","a&L,D"]
var r_3= undefined
try {
r_3 = base_3.some(argument9,argument10)
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
require("fs").writeFileSync("./experiments/some/someGen/test162.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)