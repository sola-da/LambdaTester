





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0] = null
argument2[5.062647675476955e+307] = false
argument3[7] = [122,";&!;h[","H",627,"PfT"]
return a/b*c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3][1.3434821406183095e+308] = {"a":"","":5.224410653702478e+307,"v":""}
base_1[2] = true
argument4[0] = 1.104075720634469e+308
return a*b+c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[4.224481734419934e+307] = true
return a+b+c
};
var argument5 = 126;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[3.462967293930506e+307] = null
argument7[1.7394185942769049e+308] = {"607":969,"714":"","1.2892492850027393e+308":"$","":";","-100":9.951251840158961e+306,"w":9.62309851839545e+307}
return a/b+c
};
var argument7 = ["v",705,":=","Q9iU",595,"!",82,714];
var argument8 = null;
var base_0 = [157,82,595,0,618,783,49,-100,-1,403]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,82,595,0,618,783,49,-100,-1,403]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,82,595,0,618,783,49,-100,-1,403]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,82,595,0,618,783,49,-100,-1,403]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test710.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)