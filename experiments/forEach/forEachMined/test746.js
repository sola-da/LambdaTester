





var callbackArguments = [];
var argument1 = function (value) {
 callbackArguments.push(arguments) 

    var rand = baseRandom(0, ++index);
    result[index] = result[rand];
    result[rand] = value;
};
var argument2 = null;
var argument3 = function (value, key) {
 callbackArguments.push(arguments) 

    callback.call(context, key, key, entireSet);
};
var argument4 = function (axis) {
 callbackArguments.push(arguments) 

    def.hasOwn(this.axes, axis.id) || this._addAxis(axis);
};
var argument5 = function (key) {
 callbackArguments.push(arguments) 

    if (!key.match(/^\d+$/)) {
        output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
    }
};
var argument6 = true;
var base_0 = ["_MC","p>","Y","<Dv`X"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["_MC","p>","Y","<Dv`X"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["_MC","p>","Y","<Dv`X"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["_MC","p>","Y","<Dv`X"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test746.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)