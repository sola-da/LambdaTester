





var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = null;
var argument3 = function callback(){callbackArguments.push(arguments)};
var argument4 = null;
var argument5 = function callback(){callbackArguments.push(arguments)};
var argument6 = {"49":82,"4.456251793057931e+307":"","":49,"y?":49,"1.6103665787765955e+308":843,"9.029776082761639e+307":1.094161159624227e+307,"9.978035284290205e+307":3.882909720579613e+306};
var argument7 = "";
var argument8 = function callback(){callbackArguments.push(arguments)};
var argument9 = r_0;
var base_0 = [823,618,25,0,403,893,655]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,618,25,0,403,893,655]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,618,25,0,403,893,655]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,618,25,0,403,893,655]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyEmpty/test484.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)