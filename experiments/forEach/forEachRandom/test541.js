





var callbackArguments = [];
var argument1 = {"0":"+Y","4":714,"25":2.1116481612375617e+307,"460":"","607":1.880803487283563e+307,"":"","8.32554296935757e+307":"w","F":"","D":"+JO","2.1737936351059342e+307":""};
var argument2 = 5.649669114199856e+307;
var base_0 = ["Z","Aw","<;"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
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
require("fs").writeFileSync("./experiments/forEach/forEachRandom/test541.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)