





var callbackArguments = [];
var argument1 = function (t) {
 callbackArguments.push(arguments) 

    r.indexOf(t) < 0 && i.push(t);
};
var argument2 = function (param) {
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
var argument3 = "";
var argument4 = false;
var argument5 = function (mutation) {
 callbackArguments.push(arguments) 

    if (mutation.addedNodes.length > 0) {
        base.execute(mutation.addedNodes);
    } else if (mutation.attributeName === 'data-src') {
        base.execute(mutation.target);
    }
};
var argument6 = true;
var argument7 = function (prop) {
 callbackArguments.push(arguments) 

    prop._walk(visitor);
};
var base_0 = [893,655,595]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,655,595]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,655,595]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,655,595]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test895.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)