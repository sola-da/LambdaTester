





var callbackArguments = [];
var argument1 = null;
var argument2 = null;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[59] = {"59":"","595":"","J":"","":1.0207357002590832e+308,"3.908007236289955e+307":",k","1.6834587443668221e+308":"8U","1.1223435773590823e+308":4.218996012339153e+307,"j":1.5573187974723767e+308,"1.61668076142894e+306":"","9.003109115941466e+307":1.1159847671000355e+308}
return a*b*c*d
};
var argument5 = false;
var argument6 = null;
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1] = {"655":460,"[":"","":"U99"}
base_1[1][3] = 1.5439648146698249e+307
argument6[1.1277822633002616e+308] = ["s","p","Q",618,"+Gn",157]
return a-b*c*d
};
var argument9 = 783;
var argument10 = null;
var argument11 = ["#b",655,-1,"qS","@"];
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][3] = 1.0600225284349731e+308
argument11 = null
base_2[2][0] = null
return a+b+c/d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument14[0] = ",7(e"
argument14[2] = ":"
return a-b-c/d
};
var argument14 = false;
var argument15 = {"5d":"%","":403};
var base_0 = ["9","X&;","`","B9","7","]","Vb","#h","8","rs%"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["9","X&;","`","B9","7","]","Vb","#h","8","rs%"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["9","X&;","`","B9","7","]","Vb","#h","8","rs%"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["9","X&;","`","B9","7","]","Vb","#h","8","rs%"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test239.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)