





var callbackArguments = [];
var argument1 = function (t) {
 callbackArguments.push(arguments) 

    format_key(t, group);
};
var argument2 = null;
var argument3 = true;
var argument4 = function (val) {
 callbackArguments.push(arguments) 

    obj[val] = true;
};
var argument5 = function (name) {
 callbackArguments.push(arguments) 

    var command = commands[name];
    if (!command)
        return;
    if (typeof command === 'string')
        return this.bindKey(command, name);
    if (typeof command === 'function')
        command = { exec: command };
    if (typeof command !== 'object')
        return;
    if (!command.name)
        command.name = name;
    this.addCommand(command);
};
var argument6 = function (w) {
 callbackArguments.push(arguments) 

    if (w && w.el && w.el.parentNode) {
        w._inDocument = false;
        w.el.parentNode.removeChild(w.el);
    }
};
var base_0 = [403,"5am",655,705,"ELr^","wZ"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,"5am",655,705,"ELr^","wZ"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,"5am",655,705,"ELr^","wZ"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,"5am",655,705,"ELr^","wZ"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test891.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)