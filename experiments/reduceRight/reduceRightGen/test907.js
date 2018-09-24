





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['a'] = false
argument2[5] = ""
base_0[1][5] = 1.2510359291961645e+308
return a+b*c*d
};
var argument2 = null;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[25] = [403,157]
return a/b*c-d
};
var argument4 = null;
var argument5 = false;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['UU'] = {}
return a+b/c*d
};
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9['K'] = {"1.6158375192809037e+308":7.045463184228945e+306,"1.2488127659198365e+308":1.7976931348623157e+308}
base_3[9] = "9"
argument10[1.4250811791542279e+308] = true
return a/b/c+d
};
var argument9 = {"242":823,"I#":1.3668538126991564e+308,"|>9yj":""};
var base_0 = ["t",")Y:","X","_>p","`","d","W","2@d"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["t",")Y:","X","_>p","`","d","W","2@d"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["t",")Y:","X","_>p","`","d","W","2@d"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["t",")Y:","X","_>p","`","d","W","2@d"]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test907.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)