





var callbackArguments = [];
var argument1 = [82,893,783,893,-100,893,783,5e-324,213,25];
var argument2 = {"823":"41","1v":"","_":"8"};
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3] = {"25":49,"126":"zX","-100":"","1.6221372435850033e+308":"","1.0491770784509619e+308":"","":1.4412336170543312e+308}
base_0[0][0] = 1.4756539296278866e+308
argument1[0] = ""
return a/b-c-d
};
var argument5 = true;
var argument6 = {"25":"","157":"","7.129996626062589e+306":969,"":1.3543816977635064e+308,"1.7114825001841658e+308":403,"1.3589102312167006e+308":-1};
var argument7 = true;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[25] = 242
return a-b*c+d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[7] = true
argument10[0] = 25
argument9[126] = "gW"
return a-b*c*d
};
var argument10 = r_0;
var argument11 = false;
var argument12 = r_0;
var argument13 = {"126":"","783":7.261183085924568e+307,"":460,"1.4704811074671312e+308":1.085853010481807e+308,"=":"","1.405450407282199e+307":1.7885174032656353e+307,"-100":213,"ny":2.4921324459673097e+307};
var argument14 = {"4.399155487304713e+307":"1","x":1.589455066288949e+308,"F":"ui","":"]2p"};
var argument15 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument14[0] = ""
base_3[0][3] = true
return a+b-c*d
};
var base_0 = [843,714,157,1.7976931348623157e+308,823,213,59,25]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [843,714,157,1.7976931348623157e+308,823,213,59,25]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [843,714,157,1.7976931348623157e+308,823,213,59,25]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = [843,714,157,1.7976931348623157e+308,823,213,59,25]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13,argument14,argument15)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test182.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)