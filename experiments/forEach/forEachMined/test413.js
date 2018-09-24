





var callbackArguments = [];
var argument1 = function (f) {
 callbackArguments.push(arguments) 

    jWorkflow.order(f).start(join);
};
var argument2 = false;
var argument3 = false;
var argument4 = function (singleLine) {
 callbackArguments.push(arguments) 

    console.log(singleLine);
};
var argument5 = false;
var argument6 = function (value) {
 callbackArguments.push(arguments) 

    values.push(value);
};
var argument7 = r_0;
var argument8 = null;
var argument9 = function (fn) {
 callbackArguments.push(arguments) 

    fn.call(element, { preventDefault: noop });
};
var argument10 = false;
var argument11 = false;
var base_0 = ["=",157,"?SuK",823,"X"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["=",157,"?SuK",823,"X"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["=",157,"?SuK",823,"X"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["=",157,"?SuK",823,"X"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test413.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)