





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][0] = 3.989510638034163e+307
base_0[0][0] = null
base_0[2][2.819898637310108e+307] = [0,627,627,618,460,627,213,-100,618]
return a-b+c*d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[4] = ["gY=F","a","Nah","-52","3h"]
argument3[3] = true
return a+b/c/d
};
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[25] = "m"
base_2 = -100
return a*b/c-d
};
var argument5 = null;
var argument6 = "ScX";
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9['8('] = null
return a*b/c+d
};
var base_0 = [0,460,25,126,893,595,893]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,460,25,126,893,595,893]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,460,25,126,893,595,893]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,460,25,126,893,595,893]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test361.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)