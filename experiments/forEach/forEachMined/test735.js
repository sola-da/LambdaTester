





var callbackArguments = [];
var argument1 = function (value, key, collection) {
 callbackArguments.push(arguments) 

    var object = result[++index] = getObject();
    if (isArr) {
        object.criteria = map(callback, function (key) {
            return value[key];
        });
    } else {
        (object.criteria = getArray())[0] = callback(value, key, collection);
    }
    object.index = index;
    object.value = value;
};
var argument2 = function (event) {
 callbackArguments.push(arguments) 

    _this.get(Configuration.sessionPropertyName).on(event, function (error) {
        Array.prototype.unshift.call(arguments, event);
        transition.send.apply(transition, arguments);
    });
};
var argument3 = function (child, index, array) {
 callbackArguments.push(arguments) 

    result[index] = clone(child);
};
var argument4 = function (globalVarName) {
 callbackArguments.push(arguments) 

    globalVarRegExps[globalVarName] = globalVarRegExps[globalVarName] || new RegExp(options.prefix + globalVarName + options.suffix, 'g');
    contents = contents.replace(globalVarRegExps[globalVarName], globalVars[globalVarName]);
};
var argument5 = r_1;
var base_0 = [82,100,843,-1,-1,1.7976931348623157e+308,59,-100,126]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,100,843,-1,-1,1.7976931348623157e+308,59,-100,126]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,100,843,-1,-1,1.7976931348623157e+308,59,-100,126]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,100,843,-1,-1,1.7976931348623157e+308,59,-100,126]
var r_3= undefined
try {
r_3 = base_3.forEach(argument4,argument5)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test735.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)