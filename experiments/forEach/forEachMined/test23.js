





var callbackArguments = [];
var argument1 = function (col, j) {
 callbackArguments.push(arguments) 

    out.push('  [' + j + '] \'' + col.colName + '\' (type: ' + col.colType + ', inspected: ' + (colTypes[j] ? 'number' : 'string') + (col.colLabel ? ', label: \'' + col.colLabel + '\'' : '') + ')');
};
var argument2 = false;
var argument3 = function (w) {
 callbackArguments.push(arguments) 

    if (w && w.destroy) {
        w.destroy();
    }
};
var argument4 = true;
var argument5 = function (d) {
 callbackArguments.push(arguments) 

    if (!d.d3plus) {
        var s = shape_lookup[vars.shape.value];
    } else if (!d.d3plus.shape) {
        var s = shape_lookup[vars.shape.value];
        d.d3plus.shapeType = s;
    } else {
        var s = d.d3plus.shape;
        d.d3plus.shapeType = s;
    }
    if (!shapes[s]) {
        shapes[s] = [];
    }
    shapes[s].push(d);
};
var argument6 = function (value, key) {
 callbackArguments.push(arguments) 

    delete destination[key];
};
var base_0 = ["OX",5e-324,"L",122,242,"U"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["OX",5e-324,"L",122,242,"U"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["OX",5e-324,"L",122,242,"U"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["OX",5e-324,"L",122,242,"U"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test23.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)