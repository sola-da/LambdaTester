





var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = "v_";
var argument3 = [25,0,1.7976931348623157e+308,157,843,607,-1,843];
var argument4 = function callback(){callbackArguments.push(arguments)};
var argument5 = "";
var argument6 = 460;
var argument7 = function callback(){callbackArguments.push(arguments)};
var argument8 = {"2.3830307280132207e+307":"","8.584069193313633e+307":8.053763980271517e+307};
var argument9 = function callback(){callbackArguments.push(arguments)};
var argument10 = r_1;
var base_0 = ["5C","USe%z4`j","!","Ec","|$ite","R"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["5C","USe%z4`j","!","Ec","|$ite","R"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["5C","USe%z4`j","!","Ec","|$ite","R"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["5C","USe%z4`j","!","Ec","|$ite","R"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceEmpty/test78.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)