





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3.7668525981726295e+307] = "gn"
base_0 = ["k",49,893,25,"I","T",595]
return a-b+c
};
var argument2 = r_0;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][6] = {"":1.8120180085002136e+307,"1.4506877547765539e+308":"Q{","7.361484079423645e+307":403,"2.208461208739234e+307":""}
base_1[6][4] = null
return a-b/c
};
var argument5 = [705,-1,783,893,460];
var argument6 = {"0":1.2728969013871833e+308,"460":1.7061364217676174e+308,"705":4.818095222587679e+307,"783":49,"4.710917414662172e+307":242,"1.3435829872183634e+308":"p ","AA@":"","L&":""};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[0] = 5.981441912838772e+307
argument8[8.748669805137695e+307] = [655,213,-100,823,714,618,403,627,823]
return a-b*c
};
var argument8 = "";
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[3] = {}
argument11[460] = [969,100,100]
argument10[5] = true
return a+b+c
};
var argument10 = {"9":5.119128175195613e+307,"=":")","C":""};
var argument11 = r_3;
var base_0 = [-1,893,607,460,49,893]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,893,607,460,49,893]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,893,607,460,49,893]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,893,607,460,49,893]
var r_3= undefined
try {
r_3 = base_3.find(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/find/findGen/test207.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)