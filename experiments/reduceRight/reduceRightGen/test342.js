





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[7] = null
argument3[3] = {"403":1.5738684407104424e+307,"783":1.2335283177592043e+308,"1.8275140750069097e+307":7.040590799693647e+307,"2.2163904076205456e+307":"*c","[=Ya":8.861070401292571e+307}
return a*b/c+d
};
var argument2 = r_0;
var argument3 = [607,843,"eU3",49,618,"u=d","_"];
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[-1] = {"618":607,"1.108852070786525e+308":1.320882434916278e+308,"u":0,"":"","x":59,"U":1.3902410217656567e+308}
argument6[6] = 82
base_1[2][2.819898637310108e+307] = "vQ,"
return a*b+c/d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[6] = 1.5730764126841353e+308
argument7['UU'] = {"655":5.95296601811032e+307,"1.3541726647607454e+308":"!","8.460867942232095e+307":3.3509300391983715e+307,"1.6739630308372132e+308":"o","qC(8`cAiI":""}
return a*b*c-d
};
var argument6 = r_0;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2] = 8.483160842829735e+307
return a/b-c/d
};
var argument8 = 1.768726422503122e+308;
var base_0 = ["Hj",100]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Hj",100]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Hj",100]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Hj",100]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test342.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)