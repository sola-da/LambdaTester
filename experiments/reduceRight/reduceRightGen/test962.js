





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.5887552427096746e+308] = {"4":"a<","100":"","618":"","D":2.688386022400489e+307}
base_0[0] = false
return a-b/c/d
};
var argument2 = 157;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[62] = null
argument5['UU'] = {"49":"","460":"%","3.246887508661266e+307":"l!t","1.7065353008987453e+308":823,"":""}
argument4[3.286160553564105e+307] = {"5":-100}
return a+b-c*d
};
var argument4 = [-1,"x"];
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[783] = ""
argument6[9.624051682326797e+306] = {"40":1.5810093513655304e+308,"460":607,"823":"c","4.80280282866934e+307":"","":"","zxZ":655,"_G":4.54475777833849e+307,"sq":"","1.4536802928799306e+306":5.647192279181022e+306}
argument6[2] = 2.8080031886881636e+307
return a-b+c+d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[4] = false
argument6[1] = [823,-100]
argument7[3.286160553564105e+307] = true
return a*b+c+d
};
var argument7 = null;
var argument8 = true;
var base_0 = ["bEV3",25,655,823,"f{",655,242,"w"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["bEV3",25,655,823,"f{",655,242,"w"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["bEV3",25,655,823,"f{",655,242,"w"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["bEV3",25,655,823,"f{",655,242,"w"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test962.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)