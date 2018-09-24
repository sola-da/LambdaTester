





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6][2] = null
argument1[1] = 4.171836750033726e+307
base_0[0] = [82,49]
return a-b/c/d
};
var argument2 = true;
var argument3 = "";
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3] = {"893":1.4581990139339107e+307,"rh":"u","1.4358901866187717e+308":"8Wn","":""}
base_1[8] = ["R","Q",705,"z",460,655,"n"]
return a*b+c/d
};
var argument5 = r_1;
var argument6 = false;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[0] = 8.327345634976081e+307
argument8[0] = 1.173878429396327e+308
argument9[3] = {"25":"","122":655,"242":"","":126,"7.706012989805612e+306":"__f)","LBX":"Y","x't":""}
return a/b*c/d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3 = "M3"
return a/b*c/d
};
var argument9 = null;
var argument10 = [893,59,1.7976931348623157e+308,969];
var base_0 = ["!","C","h","ia","wT(","#`f","P","G"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["!","C","h","ia","wT(","#`f","P","G"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["!","C","h","ia","wT(","#`f","P","G"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["!","C","h","ia","wT(","#`f","P","G"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test59.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)