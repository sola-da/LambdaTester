





var callbackArguments = [];
var argument1 = function (s) {
 callbackArguments.push(arguments) 

    map[s.name.toLowerCase()] = s;
    map[s.operator.toLowerCase()] = s;
    if (s.aliases) {
        s.aliases.forEach(function (alias) {
            map[alias.toLowerCase()] = s;
        });
    }
};
var argument2 = function (value, key, collection) {
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
var argument3 = false;
var argument4 = function (pn) {
 callbackArguments.push(arguments) 

    for (var i = 0; i < length; i++) {
        var src = sources[i];
        if (src) {
            var val = src[pn];
            if (val !== undefined) {
                r[pn] = val;
                break;
            }
        }
    }
};
var argument5 = r_2;
var argument6 = function (node) {
 callbackArguments.push(arguments) 

    node.graphics.removeAll(node.userData.rulelines);
    node.userData.rulelines = [];
    createRule.call(this, node);
};
var argument7 = r_1;
var argument8 = null;
var base_0 = ["(V","e","e","z}","^T|","qr","F"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["(V","e","e","z}","^T|","qr","F"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["(V","e","e","z}","^T|","qr","F"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["(V","e","e","z}","^T|","qr","F"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test188.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)