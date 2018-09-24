





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[4] = [403,460,242,618,242,157,705,82,595]
argument2[-1] = true
argument3[7] = {":xd?HuU":"h","9.243369891714256e+307":"I&","":4.552447466376494e+307,"1.6222334637090283e+308":""}
return a*b*c
};
var argument2 = 3.353341194377288e+307;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[3.0481490052276395e+306] = ["6h","i","xZ","<","%jqALh+[1O","{"]
argument5[3] = false
base_1['filter'] = 157
return a*b*c
};
var argument4 = true;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2['filter'] = {"49":25,"59":7.798816862371874e+307,"618":783,"1.7587474990063324e+308":"","":""}
argument7[1.0546776681946723e+308] = [242,843,25,0,122]
argument6['wIs'] = {"0":969,"9":"","460":"","607":893,"893":"","1.4987961136980861e+308":7.579623897474164e+307,"5e-324":"k","l":"#^P^","":"lJ","3.8931841117686357e+307":""}
return a*b/c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[714] = null
argument8[5.262931091360336e+307] = null
base_3[1][1] = {"0":3.580240368355559e+307,"126":49,"783":"kmy","843":1.6637145368523418e+308,"":"","5.380612713619898e+307":8.489439194107864e+307,"nt":1.3886312469365795e+307,"T":403}
return a-b*c
};
var argument7 = 1.7976931348623157e+308;
var base_0 = [823,783,843]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,783,843]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,783,843]
var r_2= undefined
try {
r_2 = base_2.filter(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,783,843]
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test591.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)