





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][0] = "V"
argument2[1.1207829086460726e+308] = ["u","OyD"]
base_0[6][2] = 1.1536700921294081e+308
return a+b+c*d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[0] = {"595":1.7976931348623157e+308,"823":"","1.0496384980679152e+307":"A","q@6":9.81235130411997e+307,"":"P0kP","1.7111692868802268e+308":"<J","1.133831153617449e+308":6.909062749940174e+307,"-1":""}
argument4['UU'] = null
argument3[0] = null
return a*b+c+d
};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['UU'] = ["C","%&",49,82,"=P_qL"]
argument4['L'] = ["k","+mDg;z3B!!"," I","5Dv"]
argument5['!j'] = null
return a-b*c/d
};
var argument4 = {};
var argument5 = false;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[8.575765443877852e+307] = {"8.332916496534744e+307":"9"}
argument7[3.8120440085202614e+307] = null
return a/b-c/d
};
var argument7 = null;
var base_0 = ["|","L4Q","9"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["|","L4Q","9"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["|","L4Q","9"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["|","L4Q","9"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6,argument7)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test515.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)