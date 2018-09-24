





var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = null;
var argument3 = function callback(){callbackArguments.push(arguments)};
var argument4 = true;
var argument5 = [49,893,460,607,627,126,705,705,157];
var argument6 = function callback(){callbackArguments.push(arguments)};
var argument7 = {"213":618,"595":627,"k":403,";":-100,"6.331187141634995e+307":8.483957830220849e+307,"1.3216576995900928e+308":618,"R":705,"2.8934618432865473e+307":4.546263839282809e+307};
var argument8 = 403;
var argument9 = function callback(){callbackArguments.push(arguments)};
var base_0 = ["d=","mw&_2","1","v6","t"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["d=","mw&_2","1","v6","t"]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["d=","mw&_2","1","v6","t"]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["d=","mw&_2","1","v6","t"]
var r_3= undefined
try {
r_3 = base_3.every(argument9)
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
require("fs").writeFileSync("./experiments/every/everyEmpty/test642.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)