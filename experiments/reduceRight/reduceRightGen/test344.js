





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['8('] = {"100":8.344036560283269e+307,"595":783,"":"","1.3443639915375035e+307":595,"3.2293345029682805e+307":"P","7.568243109486055e+306":"*","1.3683639110772883e+308":5.744576341331812e+307}
argument2[1.738403780925446e+308] = "Wqk"
base_0[1][2] = {"0":1.4423799716660771e+308,"607":":","893":49,"1.7976931348623157e+308":6.466804742912113e+307,"1.6840585013842971e+308":1.6286262235011565e+308,"":242,"*}QW":618,"6.76684843950367e+307":242}
return a-b*c*d
};
var argument2 = true;
var argument3 = "1v";
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1] = -1
return a*b-c*d
};
var argument5 = r_0;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[4] = 607
argument7[25] = null
argument8['UU'] = [893,607,"&","a=I",893,"TN",714]
return a-b+c*d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3 = null
argument9['UU'] = [823,627,893,-1,"Z p","IRY",403,"k",969]
argument9['8('] = ""
return a/b/c/d
};
var argument8 = {"82":"","U":"MLx{"};
var argument9 = null;
var base_0 = [")WM-{-",25,"q","79foT",-100]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [")WM-{-",25,"q","79foT",-100]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [")WM-{-",25,"q","79foT",-100]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [")WM-{-",25,"q","79foT",-100]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test344.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)