





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[-1] = true
return a+b+c
};
var argument2 = true;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[2] = null
base_1[3][1.3434821406183095e+308] = ""
argument4 = null
return a+b+c
};
var argument4 = [100,82,783];
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0] = [893]
argument6 = 893
return a/b+c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[2][783] = "a;"
argument7[8.748669805137695e+307] = true
argument8 = ""
return a+b*c
};
var base_0 = [893,82,714,893,460,59,627,823]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,82,714,893,460,59,627,823]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,82,714,893,460,59,627,823]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,82,714,893,460,59,627,823]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test113.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)