





var callbackArguments = [];
var argument1 = function (cancelFn) {
 callbackArguments.push(arguments) 

    (cancelFn || noop)(true);
};
var argument2 = null;
var argument3 = "2'ge";
var argument4 = function (className) {
 callbackArguments.push(arguments) 

    var a = map[className];
    if (ignoreCase)
        a = a.toLowerCase();
    var list = a.split(splitChar || '|');
    for (var i = list.length; i--;)
        keywords[list[i]] = className;
};
var argument5 = true;
var argument6 = function (key) {
 callbackArguments.push(arguments) 

    traverse[key] = function (obj) {
        var args = [].slice.call(arguments, 1);
        var t = new Traverse(obj);
        return t[key].apply(t, args);
    };
};
var argument7 = function (param) {
 callbackArguments.push(arguments) 

    if (!util.none(param.match) && !util.none(match)) {
        value = match[param.match] || param.defaultValue;
    } else {
        value = param.defaultValue;
    }
    if (param.message === 'number') {
        value = parseInt(value);
    }
    args[param.name] = value;
};
var argument8 = null;
var base_0 = [213,783,705,-1]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,783,705,-1]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,783,705,-1]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,783,705,-1]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test670.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)