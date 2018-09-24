





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2 = 25
argument3[-1] = {"82":"","705":82,"(":"",">":1.7976931348623157e+308,"1.5123437245372272e+308":"p","":"G"}
return a-b-c*d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[4] = 6.232033192880191e+307
argument3 = 1.7057399334625664e+308
argument4[126] = true
return a/b-c+d
};
var argument3 = null;
var argument4 = null;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[0] = 1.3190183198992484e+308
argument7[-1] = [213,242,627,618,"E",655,49,"[<"]
base_2[2] = [25,823,655,49,460,618,100,893,82]
return a*b*c+d
};
var argument6 = null;
var argument7 = true;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9['w'] = null
base_3[0][0] = {"0":5.827792903397461e+307,"":"[","h":1.4794037712942584e+308,":(":1.5198801044896707e+308}
argument9['^N'] = {"1.2223466590438952e+308":"","q!Y":8.142116820073286e+307,"2.5767464912706133e+307":157}
return a*b*c*d
};
var argument9 = 969;
var base_0 = ["PRw","15","?I_A","a","|"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["PRw","15","?I_A","a","|"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["PRw","15","?I_A","a","|"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["PRw","15","?I_A","a","|"]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test402.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)