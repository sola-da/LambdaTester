





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[627] = {"":"","1.2322122167646311e+308":"","^+BBp":49,"pD5":9.228565005707999e+307}
argument3[-1] = {"595":9.139057567989832e+307,"627":"L",",!6-":"","[":"","5.595827722795552e+307":607,"1.27674565497246e+308":2.619321211313229e+307,"M[Da":"","3.4443448915200356e+307":403}
argument2['K'] = 1.2280905904444578e+308
return a/b-c+d
};
var argument2 = "W";
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[0] = {"25":"","213":59,"":893,"4.761730747971375e+307":"a","Br":1.701536779103388e+308,"(g":893,"5.217165744370757e+307":1.2385300815981474e+308,"8.862574381000535e+307":"qazM","Tcy?5^":"l","k":""}
base_1[1][2] = ["*d`","g"]
argument4[4] = {"893":"7M0&&Ll","j":"T","1.301887136324177e+308":"8","G([":"p#E0L","":1.0029820620019752e+308,"1.1747174708047707e+308":4.107677451735579e+307,"2.454278998694458e+307":618,"7.913273846123657e+307":"Q"}
return a/b+c+d
};
var argument4 = {"6":8.661353295289246e+307,"157":9.094308732511597e+307,"783":"","":"","1.4966592469186287e+308":"","8.081147822786203e+307":783,"5.697002333888922e+307":"","1.4957136261886458e+307":"U","7v&":2.597409918115728e+307};
var argument5 = [213,49,126,595];
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2] = [-1,607,705,122,618,969]
argument7['w'] = ""
argument8['!j'] = "&"
return a+b/c/d
};
var argument7 = r_1;
var argument8 = false;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[1] = null
argument10['v'] = "]rK"
argument9[1] = ["[s","#","%","C1","a#w"]
return a-b*c+d
};
var argument10 = null;
var base_0 = [0,403,242,893,655,627]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,403,242,893,655,627]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,403,242,893,655,627]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,403,242,893,655,627]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test298.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)