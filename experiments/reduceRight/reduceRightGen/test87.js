





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[4] = [-100,126,126,122]
return a/b-c/d
};
var argument2 = null;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4 = 5.85538373182439e+307
argument4['{S'] = {"969":618,"5.241734312169204e+307":7.796959798425967e+307,"5.794253295150726e+307":"","m":49,"1.1465401138047119e+308":3.0155522481403734e+307,"-100":157,"1.5127697662235292e+308":"","":607}
base_1[7] = {"595":"-(i","607":25,"":"",",":100,"J":5.080277884954811e+307,"&*":126,"9.82790906751346e+307":""}
return a/b+c/d
};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[4] = null
argument6[3] = 5.945907423013431e+307
base_2[0] = null
return a-b*c/d
};
var argument5 = r_2;
var argument6 = {};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[4] = true
base_3[8] = [25,"4L^kc",242,460,705,627]
return a/b*c-d
};
var argument8 = "L";
var base_0 = [969,-1,-100,618,100,0,213,213,49,893]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,-1,-100,618,100,0,213,213,49,893]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,-1,-100,618,100,0,213,213,49,893]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,-1,-100,618,100,0,213,213,49,893]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test87.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)