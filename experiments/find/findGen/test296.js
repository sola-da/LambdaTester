





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[8.748669805137695e+307] = {"460":"","":"","5.910802449683049e+306":1.6982768805191369e+308,"1.560094157803123e+308":1.6749434638130816e+308}
base_0[2] = {"783":"","823":"8k","969":"1","a":"","":8.199238566010243e+307,"zZ8":"l","3.4288236566122873e+307":"","riu":1.1184886500327025e+308,"1.2155844677265974e+308":705,"7.92871485781261e+307":"d"}
argument2['f-d'] = true
return a/b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][1] = null
argument3[1] = true
argument3[1.399309004356655e+308] = 242
return a+b+c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3] = ""
argument5[460] = "Yi"
argument4[627] = false
return a*b+c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[4.953791384496108e+307] = ""
argument6[2] = true
argument6[4.953791384496108e+307] = {"705":7.786522949960296e+307,"893":7.240280692924666e+307,"969":"BK7","":6.938448406309804e+307,"1.3947812539337836e+308":"M","1.0821041346426643e+308":655,"1.30623148789356e+308":"`Ei","4.3134993151644504e+306":"R","1.2565065491335115e+308":627,"1.4528813035371673e+308":5.246456772914463e+307}
return a-b*c
};
var base_0 = [893,-100]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,-100]
var r_1= undefined
try {
r_1 = base_1.find(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,-100]
var r_2= undefined
try {
r_2 = base_2.find(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,-100]
var r_3= undefined
try {
r_3 = base_3.find(argument4)
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
require("fs").writeFileSync("./experiments/find/findGen/test296.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)