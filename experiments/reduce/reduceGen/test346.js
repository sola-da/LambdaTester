





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[9] = true
argument1[8] = false
argument1[2] = [893,403,627,82,893,714]
return a-b/c/d
};
var argument2 = true;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[0] = {"2.573036140928571e+307":"n3","1.7976931348623157e+308":"O","'":"","P":7.567077773952565e+307,"@":1.3486321037208851e+308,"Y5":49,":":1.4976766634185945e+308,"":4.431321534465426e+307,"6.427935025681595e+307":0}
return a+b*c/d
};
var argument4 = [-100,843,")",-1,"("];
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3] = "@OI"
return a-b-c/d
};
var argument6 = r_2;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[8] = {"403":893,"783":1.2359716885327098e+308,"":"XWp,","6.722394806229254e+307":"","1.4250811791542279e+308":"","gg":"j9","9.110373447880374e+307":"R"}
return a+b-c*d
};
var base_0 = ["#p{&",969,"e","[]",460,705,"a"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["#p{&",969,"e","[]",460,705,"a"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["#p{&",969,"e","[]",460,705,"a"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["#p{&",969,"e","[]",460,705,"a"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test346.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)