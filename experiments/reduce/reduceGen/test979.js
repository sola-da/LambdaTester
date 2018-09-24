





var callbackArguments = [];
var argument1 = true;
var argument2 = "Aeot";
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = {"122":1.572961941363865e+308}
return a-b-c/d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1.171692140852735e+308] = ""
argument5['s'] = 1.6339096379711068e+307
argument5 = true
return a/b+c+d
};
var argument6 = true;
var argument7 = 1.1165278382890258e+308;
var argument8 = null;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7 = 1.656424433751457e+308
argument8[7.889879335222838e+307] = {"157":-1,"627":"e","":1.3791839046695243e+307,"2.604915343333626e+307":1.713393246943131e+308,"x":"4"}
return a*b/c/d
};
var argument10 = null;
var argument11 = null;
var argument12 = r_3;
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[7.463432409233234e+307] = 7.514379043955208e+307
return a-b/c+d
};
var base_0 = ["Yx7","M","P","o",":","N","^IC","X","$8"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Yx7","M","P","o",":","N","^IC","X","$8"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Yx7","M","P","o",":","N","^IC","X","$8"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Yx7","M","P","o",":","N","^IC","X","$8"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test979.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)