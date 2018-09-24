





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3] = "2vm"
return a+b+c
};
var argument2 = {"783":"","d2":"8T","C0":1.2280664471628206e+308,"":403,"J|":"*","3.547374553268178e+305":""};
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][3] = [843,"]S","`Tn&x!","gy",":","k"]
return a/b/c
};
var argument5 = false;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4][8] = {"59":"","":59,"9.916734134847835e+307":59,"]b":2.950046481865898e+307,"1.7052472012586547e+308":1.2410714968242455e+308,"Pq<":2.680980992019458e+307,"6.929696752141672e+307":1.4551207762349895e+308,"1.5708106545373112e+308":969}
return a*b-c
};
var argument7 = null;
var argument8 = ["!",460,"3K^e","@HAn","b0l?T6","fmaZ",242];
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[2.249941463060761e+307] = {"595":157}
base_3[4][7] = "="
return a-b/c
};
var base_0 = ["k","MAzz","y","))+","c","k","L","a"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["k","MAzz","y","))+","c","k","L","a"]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["k","MAzz","y","))+","c","k","L","a"]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["k","MAzz","y","))+","c","k","L","a"]
var r_3= undefined
try {
r_3 = base_3.some(argument9)
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
require("fs").writeFileSync("./experiments/some/someGen/test216.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)