





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[627] = "A"
argument3[0] = [1.7976931348623157e+308,969,627,126,843,242,100,969,122]
argument2[5] = 595
return a*b/c
};
var argument2 = {"0":893,"82":1.6636124061669412e+308,"705":1.7149728674698151e+308,"G":"69y","":"",";":242,"K":"Lz)A"};
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[0] = {"1.4388680220768613e+308":"Im"}
base_1[6] = false
return a*b+c
};
var argument5 = false;
var argument6 = {"823":1.2740151879366586e+308,"5.33547035003876e+307":3.0184436753561787e+307,"5e-324":1.3374165334787537e+308,"%>u":-1,"ur":"T","2.0903311703701102e+307":655,"1.1644418337246368e+308":627,"&%iUK[*":9.270224369376433e+307,"":"","M":9.821966969831839e+307};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2['length'] = [783,969,460,25,618,618,122,893]
return a+b/c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[6] = ["N","L9P("]
argument9[4] = null
argument9[705] = false
return a+b/c
};
var argument9 = "";
var argument10 = null;
var base_0 = ["f0Pn0j+_",")","}2ma,x","fPrp"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["f0Pn0j+_",")","}2ma,x","fPrp"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["f0Pn0j+_",")","}2ma,x","fPrp"]
var r_2= undefined
try {
r_2 = base_2.find(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["f0Pn0j+_",")","}2ma,x","fPrp"]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/find/findGen/test434.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)