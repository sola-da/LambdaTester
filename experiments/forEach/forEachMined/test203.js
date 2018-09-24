





var callbackArguments = [];
var argument1 = function (m) {
 callbackArguments.push(arguments) 

    if (!(m in vars)) {
        vars[m] = {};
    }
    vars[m] = d3plus.object.merge(d3plus.method[m], vars[m]);
    if (styles.indexOf(m) >= 0) {
        vars[m] = d3plus.object.merge(initStyle[m], vars[m]);
        styles.splice(styles.indexOf(m), 1);
    }
    d3plus.method.init(vars, vars[m], m);
    vars.self[m] = d3plus.method.function(m, vars);
};
var argument2 = null;
var argument3 = false;
var argument4 = function (child) {
 callbackArguments.push(arguments) 

    if (element.nodeType === 1 || element.nodeType === 11) {
        element.appendChild(child);
    }
};
var argument5 = function (packageName) {
 callbackArguments.push(arguments) 

    queue.push(node.dependencies[packageName]);
};
var argument6 = r_0;
var argument7 = function (p) {
 callbackArguments.push(arguments) 

    this[p] = value;
};
var base_0 = ["U","y;",";6Oe@",843]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["U","y;",";6Oe@",843]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["U","y;",";6Oe@",843]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["U","y;",";6Oe@",843]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test203.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)