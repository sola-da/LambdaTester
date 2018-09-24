





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][5] = {"460":6.184347325285416e+307,"PK4":705,"":"d","T":"","1.4027337561365964e+308":25,"1.743715529699161e+308":""}
argument3[4] = [59,714,893,242]
base_0[1] = {"-100":126,"L`2":4.1707086897046045e+307,"":"L","[r":157}
return a-b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[4] = 823
argument3['sJRZP'] = ""
return a*b+c
};
var argument3 = r_0;
var argument4 = 1.3692838061247208e+308;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[4.960033715165713e+307] = 1.2465787565689056e+308
base_2[1][6] = true
argument6[7] = true
return a*b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = null
argument8[3] = "@{Y^"
argument7[7] = false
return a/b*c
};
var argument7 = {"595":1.4461126861331803e+308,"627":100,"2.2403245757742646e+307":1.4657475954846637e+308,"3.8474328886224857e+307":"3","":7.221369162160096e+307,"-N":"WYA","26KdBh":"","5.594584924091458e+307":5.323991410450977e+307};
var base_0 = [969,607,-100,618,25,1.7976931348623157e+308,403,0]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,607,-100,618,25,1.7976931348623157e+308,403,0]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,607,-100,618,25,1.7976931348623157e+308,403,0]
var r_2= undefined
try {
r_2 = base_2.every(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,607,-100,618,25,1.7976931348623157e+308,403,0]
var r_3= undefined
try {
r_3 = base_3.every(argument6,argument7)
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
require("fs").writeFileSync("./experiments/every/everyGen/test796.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)