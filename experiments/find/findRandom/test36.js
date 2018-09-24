





var callbackArguments = [];
var argument1 = {"157":627,"655":1.1622500010099113e+308,"":-1,"7.476006143863615e+307":3.039901393825401e+307,"1.2120924144009725e+308":"","1.852635685395701e+307":7.257004418299005e+307};
var argument2 = null;
var argument3 = "";
var base_0 = [5e-324,"+s[:e","e"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
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
require("fs").writeFileSync("./experiments/find/findRandom/test36.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)