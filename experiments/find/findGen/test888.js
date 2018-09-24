





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[7] = ""
argument3[7] = ["(N)D","Dv","4","8","O","v|","l_"]
return a/b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3][6] = null
argument4[100] = [126,"hn","n",122,"N","*p","Oq",714]
base_1[3] = {"607":59,"618":100,"705":25,"":"","4.604796363275553e+307":"HQ^","B":122}
return a*b-c
};
var argument3 = [25,122,59,82];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['='] = {"242":"","595":"","":1.082866416940405e+308,"Q":213,"1.2498188358443805e+308":"7","w":843,"a":"r"}
argument6[6] = [823,"j"]
argument5[3] = 3.561097646099801e+307
return a/b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['AwD'] = ""
argument6[714] = ["6",655,100,"a(S",705,"s"]
argument7 = false
return a+b-c
};
var argument6 = 6.581004465087028e+307;
var argument7 = r_2;
var base_0 = ["|","k","]g","4:","-Nl","N}1","g"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["|","k","]g","4:","-Nl","N}1","g"]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["|","k","]g","4:","-Nl","N}1","g"]
var r_2= undefined
try {
r_2 = base_2.find(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["|","k","]g","4:","-Nl","N}1","g"]
var r_3= undefined
try {
r_3 = base_3.find(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/find/findGen/test888.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)