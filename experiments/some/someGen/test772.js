





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[4.224481734419934e+307] = null
argument3[403] = {"0":893,"460":242,"":"*","5e-324":9.633097284829712e+307,"w":"7","4.669923691692095e+307":"","<M5o":"f^"}
return a*b*c
};
var argument2 = "";
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['k<7bJ'] = {"0":1.6474466425504817e+308,"460":"","4->":9.465177085173103e+307,"1.3211763441705002e+307":0,"N":"]"}
argument4['j'] = {"24":"","":"i","d":"","CX":5.2263508882390494e+306,"4.479761668823e+307":714,"-100":"","1.3653844873598535e+308":1.1099672283299202e+308,"3.490376420323038e+307":""}
return a+b-c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[6] = {"0":213,"49":242,"157":"'","893":"","4.805514549679176e+307":"^","":126,"8s":""}
base_2[2][5] = null
base_2[1][3] = {"213":"{b","":157}
return a/b+c
};
var argument5 = false;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[5] = "<y"
argument6[0] = 25
argument7['f9zgt4n!ZJR]W'] = ""
return a+b/c
};
var base_0 = [843,126]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [843,126]
var r_1= undefined
try {
r_1 = base_1.some(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [843,126]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [843,126]
var r_3= undefined
try {
r_3 = base_3.some(argument6)
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
require("fs").writeFileSync("./experiments/some/someGen/test772.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)