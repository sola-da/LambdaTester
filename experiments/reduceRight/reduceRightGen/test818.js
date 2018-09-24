





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.5887552427096746e+308] = ["q","S","-",607,"oE","(z",893,"{E","Ru"]
return a+b/c*d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3] = {"607":"","5e-324":823,"":655,"1.014470064063603e+308":9.05655961632288e+307,"C":213,"p`(":"o","1.2169959034319736e+308":1.4781653260810665e+308}
argument4[0] = ""
return a*b/c-d
};
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2] = 1.7976931348623157e+308
return a-b+c/d
};
var argument5 = 1.1331287286793507e+307;
var argument6 = false;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1.4250811791542279e+308] = [705,157,823]
argument8[100] = {"893":"6XF",")S":6.755749559330096e+306,"":126,"9.871297342573397e+307":"cG","8.578050448327747e+307":"","[p":""}
return a-b*c+d
};
var argument8 = "";
var base_0 = ["G","+","l",893,0,"Z","d","Ah","%LG"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["G","+","l",893,0,"Z","d","Ah","%LG"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["G","+","l",893,0,"Z","d","Ah","%LG"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["G","+","l",893,0,"Z","d","Ah","%LG"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test818.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)