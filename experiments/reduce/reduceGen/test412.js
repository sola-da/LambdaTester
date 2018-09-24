





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[0] = 618
argument1[1] = {"!H":"$M0P","2.179414319803972e+305":""}
return a*b/c+d
};
var argument2 = "l";
var argument3 = 1.769884561679473e+308;
var argument4 = [655,"^-",-1,"(","S!b$"];
var argument5 = [893,714,460,126,"*",49,"8",100];
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2][0] = -1
argument5[3] = {"7":"","82":100,"":"","tJ":9.10587392177662e+307,"1.434154446541379e+308":823,"1.6753011194421518e+308":705,"h":705}
return a/b+c-d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[25] = null
argument10[2] = [0,655,893,25,655,893,49]
return a/b+c-d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[25] = 1.6872349258214588e+308
base_3[7] = "'"
base_3['length'] = null
return a-b-c*d
};
var base_0 = [59,49,705,25,1.7976931348623157e+308,618]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,49,705,25,1.7976931348623157e+308,618]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,49,705,25,1.7976931348623157e+308,618]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,49,705,25,1.7976931348623157e+308,618]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test412.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)