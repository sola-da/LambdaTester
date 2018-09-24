





var callbackArguments = [];
var argument1 = function (func) {
 callbackArguments.push(arguments) 

    func();
};
var argument2 = null;
var argument3 = function (text, index) {
 callbackArguments.push(arguments) 

    strings.push('#line 1 ', index.toString(), '\n', text);
};
var argument4 = 1.5956870768669116e+308;
var argument5 = function (axis) {
 callbackArguments.push(arguments) 

    var axisKey = vars[axis].value;
    if (requirements.indexOf(axis) >= 0 && axisKey && vars[axis].scale.value === 'continuous') {
        exceptions.push(axisKey);
        nestedData.key(function (d) {
            return fetchValue(vars, d, axisKey);
        });
    }
};
var argument6 = [783,893,705,627,969,460,82];
var argument7 = function (n, i) {
 callbackArguments.push(arguments) 

    if (i > depth && a[n])
        delete a[n];
};
var argument8 = null;
var base_0 = [-100,82]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,82]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,82]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,82]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test772.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)