





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2]['f'] = {"618":5e-324,"1.4235887296825852e+308":"?SB","1.224856987791378e+307":1.5430450366042135e+308,"1.3712003920350033e+308":100,"9.111525749702437e+307":"","[!_":"J>-"}
argument2[1.6177106033227046e+308] = "u"
return a/b-c
};
var argument2 = false;
var argument3 = [25,618,403,0,969,655,714,100,714];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = false
base_1[3][2][6] = 157
return a/b+c
};
var argument5 = r_1;
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[3] = "j"
return a+b+c
};
var argument8 = r_2;
var argument9 = r_2;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10 = {"2":"","1.1358892761309212e+308":714,"9.43413275301537e+307":"","":"^","5.825844058094648e+307":403}
argument11['A'] = {"82":1.4277338047377457e+308,"893":655,"S":6.647619091640827e+307,"(":"","1.6770620029542473e+308":8.277970477275678e+307,"7.616397293265993e+307":8.62645145873077e+307,"wo":"","9w":1.66951117195316e+308,"":1.6665932209592254e+308,"5e-324":""}
base_3[6] = false
return a-b/c
};
var argument11 = null;
var base_0 = [0,783]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,783]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,783]
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,783]
var r_3= undefined
try {
r_3 = base_3.map(argument10,argument11)
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
require("fs").writeFileSync("./experiments/map/mapGen/test759.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)