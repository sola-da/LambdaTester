





var callbackArguments = [];
var argument1 = function (child) {
 callbackArguments.push(arguments) 

    arr.push(child.getValue());
};
var argument2 = false;
var argument3 = function (y, i) {
 callbackArguments.push(arguments) 

    if (i != 0) {
        var prev = vars.data.time.values[0];
        vars.data.time.dataSteps.push(getDiff(prev, y, periods.indexOf(vars.data.time.stepType)));
    } else {
        vars.data.time.dataSteps = [0];
    }
};
var argument4 = function (catTot) {
 callbackArguments.push(arguments) 

    if (catTot !== undefined) {
        if (catTot.min < bounds.min) {
            bounds.min = catTot.min;
        }
        if (catTot.max > bounds.max) {
            bounds.max = catTot.max;
        }
    }
};
var argument5 = function (prop, i) {
 callbackArguments.push(arguments) 

    if (i)
        out.space();
    out.print(prop);
};
var argument6 = "";
var base_0 = ["*o7","K","c_","i&","q","Rv","@D","N","z%z"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["*o7","K","c_","i&","q","Rv","@D","N","z%z"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["*o7","K","c_","i&","q","Rv","@D","N","z%z"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["*o7","K","c_","i&","q","Rv","@D","N","z%z"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test399.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)