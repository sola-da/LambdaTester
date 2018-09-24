





var callbackArguments = [];
var argument1 = function (obj) {
 callbackArguments.push(arguments) 

    if (obj !== dst) {
        forEach(obj, function (value, key) {
            if (!dst.hasOwnProperty(key))
                dst[key] = value;
        });
    }
};
var argument2 = function (option) {
 callbackArguments.push(arguments) 

    option.selected = isDefined(items.get(option.value));
};
var argument3 = false;
var argument4 = [893,213,122];
var argument5 = function (suite) {
 callbackArguments.push(arguments) 

    mapTOC(suite, obj);
};
var argument6 = null;
var argument7 = function (o) {
 callbackArguments.push(arguments) 

    return ret.push(d3plus.util.copy(o));
};
var base_0 = [242,0]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,0]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,0]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,0]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test300.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)