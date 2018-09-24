





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[6] = [",","M>#s9KMe",25,"Y","pS",969,"9"]
return a+b+c-d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[627] = null
argument4[4] = 1.67021752927489e+308
argument4[3] = [126,100,-100,618,122,49,460,157,5e-324]
return a/b*c-d
};
var argument3 = null;
var argument4 = r_1;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][2] = false
return a*b-c+d
};
var argument6 = {"157":9.247912276506343e+307,"213":1.3522829974818985e+308,"823":"<","|A":1.2287988770791343e+308,"1.4532819938011018e+308":"","4.1342011271695407e+307":893};
var argument7 = 1.5229686749823115e+307;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[4] = [25,893,655,705,969,607,893,893,157]
return a-b+c/d
};
var argument9 = true;
var argument10 = {"0":705,"823":5e-324,"893":607,"vP^+":5.83582607886579e+307,"":"L","`":"S|"};
var base_0 = [0,403,-1,655]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,403,-1,655]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,403,-1,655]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,403,-1,655]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test630.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)