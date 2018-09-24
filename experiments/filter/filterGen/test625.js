





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[0] = null
argument3[3.7154103611117224e+307] = [100,618,783,5e-324,82,618,242]
base_0[2][1] = {"783":"9q","3.06540844804745e+307":"","":"l*dg;","1.0888673960330325e+307":""}
return a*b-c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[9] = {"627":1.4861994874520068e+308,"":"w","1.7279508537640503e+307":"7{hI&","1.1544365822478582e+308":"","1.7976931348623157e+308":"V"}
return a+b*c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1] = {"595":"^0v","783":"uIk>H","8.21512545718531e+306":"","1.5695607556834133e+308":6.232466214864499e+307}
base_2[0][0] = ""
argument5[-1] = "XE+)"
return a*b-c
};
var argument5 = r_0;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[403] = ["u","M>#s9KMe","4","Y","pS","r","9","Z","o"]
argument7[7] = true
base_3[1][1] = {"157":9.247912276506343e+307,"213":1.3522829974818985e+308,"8.519902486793662e+307":"#","":"<","lf":"6","1.164505069540323e+308":1.1571194205352591e+308}
return a+b*c
};
var base_0 = [595,618,213,607,823,242,100]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,618,213,607,823,242,100]
var r_1= undefined
try {
r_1 = base_1.filter(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,618,213,607,823,242,100]
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,618,213,607,823,242,100]
var r_3= undefined
try {
r_3 = base_3.filter(argument6)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test625.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)