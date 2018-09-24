





var callbackArguments = [];
var argument1 = {"126":"e","157":">","":"","6.923273797357807e+307":242,"2.458463232813013e+307":2.0722950873576905e+307,"1.8725379845568451e+307":8.461734998090857e+307,"2.1445415787700388e+307":""};
var argument2 = null;
var base_0 = [705,59,893,969,969,705,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
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
require("fs").writeFileSync("./experiments/find/findRandom/test627.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)