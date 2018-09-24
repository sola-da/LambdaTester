





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[0] = {"":-1,"*b":618,"3.262748836911466e+306":3.070696526768704e+307,"f":"","+":"{","-100":823,"-1":"-"}
return a+b*c-d
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[0] = ""
base_1[1][5] = "b"
argument4[1] = false
return a/b-c+d
};
var argument5 = false;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[6] = 5.595941062826217e+307
argument7[100] = true
argument7[1] = 1.3577793811192775e+308
return a-b+c-d
};
var argument7 = {"6":9.565633474286788e+307,"126":"!","":705,"y":"","8.125997698118203e+307":"","5e-324":"q&","w":"o","m":1.6950170820795533e+308,"1.4223209492973913e+308":"L]"};
var argument8 = r_2;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[705] = ["5l","&E1C"]
argument10[705] = ""
base_3[0][0] = null
return a-b-c+d
};
var base_0 = ["xZ[B","xup1","i","0:[","xl+"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["xZ[B","xup1","i","0:[","xl+"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["xZ[B","xup1","i","0:[","xl+"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["xZ[B","xup1","i","0:[","xl+"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test543.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)