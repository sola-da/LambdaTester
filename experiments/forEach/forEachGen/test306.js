





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[9] = {"460":"","1.2762908883472138e+308":7.6315929399543e+307,"":3.688242117804629e+307,"5.910802449683049e+306":1.6982768805191369e+308,"1.560094157803123e+308":1.6749434638130816e+308,"3.150937269761434e+307":3.655855293513299e+307,"5e-324":"k","zZ8":"l","3.4288236566122873e+307":""}
return a+b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1] = false
argument4[5] = ["mrh","]","6d","qJ^W4","$","4","J","kI7oq","{5"]
return a/b/c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[4] = true
base_2[1][1] = "sd"
return a/b*c
};
var argument4 = "";
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[-1] = {"1.4656323706213358e+308":"","2.7422683054095526e+307":"k","1.5742588324624261e+308":""}
return a-b/c
};
var argument6 = r_2;
var base_0 = [213,893,618,82,126,157]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,893,618,82,126,157]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,893,618,82,126,157]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,893,618,82,126,157]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test306.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)