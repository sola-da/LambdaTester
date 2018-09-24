





var callbackArguments = [];
var argument1 = {"126":823,"655":59,"r4":49,"-8":783,"1.796354570994444e+308":";","8.450737482408466e+307":"","":"","S":705,"GC":"","4.933648721393459e+307":"]q1'"};
var base_0 = [783,25,82,460,705]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
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
require("fs").writeFileSync("./experiments/some/someRandom/test462.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)