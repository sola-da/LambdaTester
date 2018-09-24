





var callbackArguments = [];
var argument1 = function (cp) {
 callbackArguments.push(arguments) 

    var nextTarget = target.getProperty(cp.name);
    if (cp.isScalar) {
        var unwrappedCo = unwrapOriginalValues(nextTarget, metadataStore, transformFn);
        if (!__isEmpty(unwrappedCo)) {
            result[fn(cp.name, cp)] = unwrappedCo;
        }
    } else {
        var unwrappedCos = nextTarget.map(function (item) {
                return unwrapOriginalValues(item, metadataStore, transformFn);
            });
        result[fn(cp.name, cp)] = unwrappedCos;
    }
};
var argument2 = {"8":"","607":0,"2I":"0","H|":"","":2.360845517823921e+307,"2.384515420019512e+307":"","1.1862053489323019e+308":8.271902790562201e+307};
var argument3 = function (res) {
 callbackArguments.push(arguments) 

    imports_built.push(res.build(nesting, async));
};
var argument4 = true;
var argument5 = function (name) {
 callbackArguments.push(arguments) 

    f(this[name]);
};
var argument6 = null;
var argument7 = function (items) {
 callbackArguments.push(arguments) 

    items = items.filter(function (item) {
        return item['cols'];
    });
    if (items.length) {
        var sortedGroup = items.sort(compare('level', 'desc')), lastLevel = sortedGroup[0].level;
        if (level < lastLevel) {
            level = lastLevel;
        }
    }
};
var argument8 = "4dc=t";
var base_0 = [100,403,213,-100,157,25,25,59]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,403,213,-100,157,25,25,59]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,403,213,-100,157,25,25,59]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,403,213,-100,157,25,25,59]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test899.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)