





var callbackArguments = [];
var argument1 = function (propName) {
 callbackArguments.push(arguments) 

    node.removeProperty(propName);
};
var argument2 = true;
var argument3 = function (prop, i) {
 callbackArguments.push(arguments) 

    if (i) {
        output.print(',');
        output.newline();
    }
    output.indent();
    prop.print(output);
};
var argument4 = {"1.6122634510140385e+308":"|"};
var argument5 = function (arg) {
 callbackArguments.push(arguments) 

    arg._walk(visitor);
};
var argument6 = null;
var argument7 = function (s) {
 callbackArguments.push(arguments) 

    var evt = s.getAttribute('event') || s.getAttribute('data-dojo-event'), func = parser._functionFromScript(s);
    if (evt) {
        propList[evt] = func;
    } else {
        connects.push(s);
    }
};
var argument8 = {"1.2443388288581091e+308":"4","n|":1.7976931348623157e+308};
var argument9 = r_1;
var base_0 = ["t",213,"#","l","5aD|s","2","9","R]`"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["t",213,"#","l","5aD|s","2","9","R]`"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["t",213,"#","l","5aD|s","2","9","R]`"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["t",213,"#","l","5aD|s","2","9","R]`"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test323.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)