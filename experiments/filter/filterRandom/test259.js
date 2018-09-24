





var callbackArguments = [];
var argument1 = {"403":1.3406827298789856e+308,"783":"9","1.142722873271356e+308":460,"-100":"","t":"#J",",df":"$c","@#1":"^8t"};
var base_0 = ["SA",0,126,"Ca",-1,705,"oX&F|Cz%",25]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
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
require("fs").writeFileSync("./experiments/filter/filterRandom/test259.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)