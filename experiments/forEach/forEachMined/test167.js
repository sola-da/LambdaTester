





var callbackArguments = [];
var argument1 = function (f) {
 callbackArguments.push(arguments) 

    return f(global);
};
var argument2 = true;
var argument3 = function (d) {
 callbackArguments.push(arguments) 

    for (var i = 0; i < targets.length; i++) {
        if (d.id === targets[i].id) {
            d.values = targets[i].values;
            targets.splice(i, 1);
            break;
        }
    }
};
var argument4 = function (axisId) {
 callbackArguments.push(arguments) 

    setAxisLabelText(axisId, labels[axisId]);
};
var argument5 = function (propName) {
 callbackArguments.push(arguments) 

    target[propName] = source[propName];
};
var argument6 = null;
var argument7 = true;
var base_0 = [-1,705,783,213,607]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,705,783,213,607]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,705,783,213,607]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,705,783,213,607]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test167.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)