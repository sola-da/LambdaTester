





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    for (j = 0; j < __data_groups.length; j++) {
        if (__data_groups[j].indexOf(d.id) < 0) {
            continue;
        }
        for (k = 0; k < __data_groups[j].length; k++) {
            if (__data_groups[j][k] in indices) {
                indices[d.id] = indices[__data_groups[j][k]];
                break;
            }
        }
    }
    if (isUndefined(indices[d.id])) {
        indices[d.id] = i++;
    }
};
var argument2 = function (type) {
 callbackArguments.push(arguments) 

    _remove(element.target, gesture.defaultEvent + '.' + type);
};
var argument3 = [655,213,618,823,843,122,-100,122,59];
var argument4 = function (axis) {
 callbackArguments.push(arguments) 

    if (vars[axis].scale.value == 'continuous') {
        d.d3plus.id += '_' + fetchValue(vars, d, vars[axis].value);
    }
};
var argument5 = "Z";
var argument6 = function (key) {
 callbackArguments.push(arguments) 

    if (_.indexOf(propsToPop, key) === -1) {
        return all.push(_this[key]);
    }
};
var argument7 = null;
var argument8 = 3.6384924958630305e+305;
var base_0 = [-100,460,823,82,59,-1,618,-1,5e-324]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,460,823,82,59,-1,618,-1,5e-324]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,460,823,82,59,-1,618,-1,5e-324]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,460,823,82,59,-1,618,-1,5e-324]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test563.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)