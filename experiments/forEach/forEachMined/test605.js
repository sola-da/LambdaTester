





var callbackArguments = [];
var argument1 = function (propName) {
 callbackArguments.push(arguments) 

    target[propName] = source[propName];
};
var argument2 = r_0;
var argument3 = "-";
var argument4 = function (d) {
 callbackArguments.push(arguments) 

    get_keys(d);
};
var argument5 = "Yh";
var argument6 = function (value, name) {
 callbackArguments.push(arguments) 

    if (name === 'view' || name === 'init' || name === 'as') {
        return;
    }
    utils.prop(view, name, value);
};
var argument7 = null;
var argument8 = r_2;
var argument9 = function (leaf) {
 callbackArguments.push(arguments) 

    if (leaf.rev !== win && !leaf.opts.deleted) {
        conflicts.push(leaf.rev);
    }
};
var argument10 = false;
var base_0 = [5e-324,"K",0]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [5e-324,"K",0]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [5e-324,"K",0]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [5e-324,"K",0]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test605.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)