





var callbackArguments = [];
var argument1 = {"49":"","823":7.59529022135252e+306,"":"7","4.875709646462175e+307":49,"1.2926110887799269e+308":705,"PL:":"x","-100":"ei","o":"U","1.3408678618113266e+308":705};
var base_0 = [":",122,"NhP",783,",",122]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
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
require("fs").writeFileSync("./experiments/every/everyRandom/test22.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)