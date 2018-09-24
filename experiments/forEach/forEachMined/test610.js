





var callbackArguments = [];
var argument1 = function (fn) {
 callbackArguments.push(arguments) 

    instanceInjector.invoke(fn || noop);
};
var argument2 = function (subfile) {
 callbackArguments.push(arguments) 

    pushFile(subfile);
};
var argument3 = ["I",705,49,126,"H","`","Hg",403,"4y ","p:F"];
var argument4 = function (axis) {
 callbackArguments.push(arguments) 

    var axisKey = vars[axis].value;
    if (requirements.indexOf(axis) >= 0 && axisKey && vars[axis].scale.value === 'continuous') {
        exceptions.push(axisKey);
        nestedData.key(function (d) {
            return fetchValue(vars, d, axisKey);
        });
    }
};
var argument5 = ["[","Sy:","!4tn","(","VWX","@W^","w","`$",">#I","^$"];
var argument6 = r_0;
var argument7 = function (stat) {
 callbackArguments.push(arguments) 

    if (stat instanceof AST_SimpleStatement)
        seq.push(stat.body);
    else
        push_seq(), ret.push(stat);
};
var argument8 = 618;
var base_0 = ["ip","z*","H"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["ip","z*","H"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["ip","z*","H"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["ip","z*","H"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test610.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)