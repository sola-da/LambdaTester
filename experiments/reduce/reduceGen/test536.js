





var callbackArguments = [];
var argument1 = null;
var argument2 = null;
var argument3 = "";
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['18{'] = ["2C","sHQzrb","K","O","H","M3","0v"]
argument3[6.35085648319999e+307] = 8.21795313238573e+307
base_0[3][1] = {"k>H":1.5695607556834133e+308,"6.232466214864499e+307":"g5XE+)"}
return a-b+c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[';N'] = false
base_1[0][3] = 607
argument5[2.1869172855352885e+307] = "I2M"
return a+b-c+d
};
var argument6 = null;
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[90] = ["S","r","9","Z","o","V}"]
return a+b/c*d
};
var argument9 = [126,100,-100,618,122,49,460,157,5e-324];
var argument10 = null;
var argument11 = 1.3224095188197648e+308;
var argument12 = null;
var argument13 = r_2;
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[0] = 7.70753018029455e+307
argument13[3] = ""
return a/b*c/d
};
var base_0 = [":,","+","S;","*dg;","4","Oz-","1","v","mN"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [":,","+","S;","*dg;","4","Oz-","1","v","mN"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [":,","+","S;","*dg;","4","Oz-","1","v","mN"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [":,","+","S;","*dg;","4","Oz-","1","v","mN"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test536.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)