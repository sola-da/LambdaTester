





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[627] = {"714":7.285391941991908e+306,"893":"8qBJ","1.401873577646708e+308":1.3156231009614515e+307,"_":"L","1.7976931348623157e+308":"[","5e-324":"Yo","6.834642996416417e+307":",?m","1.0450685678569577e+308":25,"4.2192289810276826e+307":705}
return a*b*c*d
};
var argument2 = 627;
var argument3 = 1.7976931348623157e+308;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[-1] = null
base_1[6] = true
return a/b+c/d
};
var argument5 = true;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[100] = 823
return a+b/c*d
};
var argument7 = {"595":"","i3":"pF","8.108492555774111e+307":59,"1.5887552427096746e+308":-1,"1.5136274835320285e+308":"","gCa":969,"7.740823274548881e+307":1.3031406851588173e+308,"":627,"U":""};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9['K'] = [893]
return a*b-c+d
};
var argument9 = 59;
var base_0 = ["$","]",":#4M","V",403,893]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["$","]",":#4M","V",403,893]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["$","]",":#4M","V",403,893]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["$","]",":#4M","V",403,893]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test723.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)