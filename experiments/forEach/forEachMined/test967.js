





var callbackArguments = [];
var argument1 = function (name) {
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
var argument2 = function (v) {
 callbackArguments.push(arguments) 

    this.addEdge(v.duplicate());
};
var argument3 = function (length) {
 callbackArguments.push(arguments) 

    var offsetProp = pvc_Offset.namesSizeToOffset[length], offsetValue = this[offsetProp];
    if (null != offsetValue)
        if ('number' == typeof offsetValue)
            offset[offsetProp] = offsetValue;
        else if (refSize) {
            var refLength = refSize[length];
            null != refLength && (offset[offsetProp] = offsetValue.resolve(refLength));
        }
};
var argument4 = null;
var argument5 = function (aliasName) {
 callbackArguments.push(arguments) 

    self._commands[aliasName] = function (params) {
        a[aliasName].split(' && ').forEach(function (command) {
            self._commands[command](params);
        });
    };
};
var argument6 = {"714":1.6765868423149165e+308,"1.382034702622121e+308":3.0943104169474083e+307,"1.0864805633994184e+308":1.1363402760518731e+308};
var base_0 = [49]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test967.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)