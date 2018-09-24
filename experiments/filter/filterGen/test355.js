





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][0] = {"460":893,"893":1.0103046873891339e+308,"&":"(","G":3.1708111789531714e+306,"7.238389487403282e+307":1.0311262594177868e+308,";=":705}
base_0[0] = 7.541878176952894e+307
argument3[-100] = {"$":"_","$b|":""}
return a-b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[6] = null
return a/b*c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[7] = ["P","p","U","J","#","d9","d","T,3","92","d"]
argument5[1.7847438319683965e+308] = ["E","Gi","(r+dd*$<","@F>","F","lE[","SL"]
return a+b+c
};
var argument4 = {"0":"w","122":";T","969":"pz","1.5932262033078037e+308":7.710801035367297e+307,"":893,"c":705,"2.8158657725109266e+307":"t"};
var argument5 = false;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[3.7154103611117224e+307] = true
argument7 = {"0":" ","122":9.990687778687148e+307,"460":783,"969":157,"":213,"FIzp":"T","qFpn":"","97i":"","5.568477263969678e+306":""}
argument7['C'] = {"6.333561495860903e+307":823,"":"","?":"","Vg":9.447760343671484e+307,"(U":242,"!dX)":"@8"}
return a/b*c
};
var argument7 = {"3.909348674616928e+307":"","":8.179402279216798e+307,"1.4856450029912693e+308":"[E","DG":4.846879412151112e+306};
var base_0 = [655,823,705,213,969,25,460]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,823,705,213,969,25,460]
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,823,705,213,969,25,460]
var r_2= undefined
try {
r_2 = base_2.filter(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
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
require("fs").writeFileSync("./experiments/filter/filterGen/test355.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)