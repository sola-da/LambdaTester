





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[-1] = ""
argument2[2] = {"783":"","AoAQ":1.5622306666292175e+308,"":783,"1.02108263089231e+308":-100,"Pc":627,"Jz":"j"}
base_0[6] = {"0":"","122":"","714":783,"` ":"H","":"oa>","5.617103929721989e+307":""}
return a+b/c/d
};
var argument2 = true;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][3] = {"595":1.2267407453397585e+308,"":1.7336741015790662e+308}
argument4[213] = 823
return a+b-c-d
};
var argument4 = null;
var argument5 = true;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[9] = null
base_2[2][0] = 843
argument8[7.889879335222838e+307] = {"655":"Ba","843":"","1.3536818451599049e+308":5e-324,"X":"u","":"P$t","1.7636411527935262e+308":5.560174755919345e+307,"tW":"","nUrV":"C"}
return a*b-c+d
};
var argument7 = {};
var argument8 = true;
var argument9 = true;
var argument10 = r_2;
var argument11 = null;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[2] = null
argument11[59] = false
return a-b/c/d
};
var base_0 = [242,5e-324,-100,-100,714,655,213,49]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,5e-324,-100,-100,714,655,213,49]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,5e-324,-100,-100,714,655,213,49]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,5e-324,-100,-100,714,655,213,49]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test560.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)