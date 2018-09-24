





var callbackArguments = [];
var argument1 = 607;
var argument2 = {"1.469675614744603e+308":"","1.1400781839560427e+308":9.400181569736919e+307,">XHm1":1.0149538323736175e+308,"-100":"","5.988198300552646e+307":1.243446698529588e+308,"4.456251793057931e+307":""};
var base_0 = [",","F","6y",":","t","@E","g1","ron",")",":b"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
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
require("fs").writeFileSync("./experiments/reduce/reduceRandom/test782.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)