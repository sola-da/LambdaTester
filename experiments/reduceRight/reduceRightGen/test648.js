





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3.8120440085202614e+307] = 1.2313909239746207e+308
argument2['F2nCX>6'] = null
argument2[1.4250811791542279e+308] = 627
return a-b/c-d
};
var argument2 = null;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][2] = 1.00684743794368e+308
base_1[6] = null
return a/b*c*d
};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[627] = {"595":3.746655018483962e+307,"a":"","":""}
base_2[2] = true
return a-b+c+d
};
var argument5 = {};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6][2] = {"213":59,"627":1.7976931348623157e+308,"5e-324":122,"MX":2.8491586923556213e+307,"o,":5e-324,"":"]]"}
argument7[7] = true
argument6 = {"595":"RZ","969":1.7124514870023333e+307,"K":4.785573022375304e+307,"nPsY":1.6654364074346836e+308,"a=":893}
return a*b+c*d
};
var base_0 = [157,403,0,618,460,-100,-1]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,403,0,618,460,-100,-1]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,403,0,618,460,-100,-1]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,403,0,618,460,-100,-1]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test648.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)