





var callbackArguments = [];
var argument1 = {"627":"^8a","":823,"6.369680828079892e+307":8.456630653608027e+306,"8.996658451033572e+307":"C)","T5":893,"1.076170814157695e+308":1.2507536408496997e+308,"1.0342836344126181e+308":"","*6HVb":"awp"};
var argument2 = ",";
var argument3 = 2.3043114128131895e+307;
var base_0 = ["RJl","}N |","`p#","j","ldXL]:","ko5n","Ee","HT#A","n","J"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
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
require("fs").writeFileSync("./experiments/filter/filterRandom/test414.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)