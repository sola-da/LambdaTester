





var callbackArguments = [];
var argument1 = function (t) {
 callbackArguments.push(arguments) 

    if (__data_types[t.id] === type) {
        has = true;
    }
    if (!(t.id in __data_types) && type === 'line') {
        has = true;
    }
};
var argument2 = function (type) {
 callbackArguments.push(arguments) 

    _remove(element.target, gesture.defaultEvent + '.' + type);
};
var argument3 = function (defaultValue, key) {
 callbackArguments.push(arguments) 

    if (angular.isUndefined(scope[key]) || scope[key] === null) {
        return opts[key] = defaultValue;
    } else {
        return opts[key] = scope[key];
    }
};
var argument4 = 5.786305917529117e+307;
var argument5 = function (el, idx) {
 callbackArguments.push(arguments) 

    trees.push({
        ids: el,
        diff: item.diff - 1,
        parent: item.ids,
        parentIdx: idx
    });
};
var argument6 = {"49":1.2722541710919743e+308,"213":"q","4.4091210475117854e+307":""};
var argument7 = r_2;
var base_0 = [";6c","$^2","6Vh","7","XucO","F","{","C#x","F"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [";6c","$^2","6Vh","7","XucO","F","{","C#x","F"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [";6c","$^2","6Vh","7","XucO","F","{","C#x","F"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [";6c","$^2","6Vh","7","XucO","F","{","C#x","F"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test471.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)