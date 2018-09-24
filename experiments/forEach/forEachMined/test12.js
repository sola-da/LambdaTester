





var callbackArguments = [];
var argument1 = function (def) {
 callbackArguments.push(arguments) 

    def.mangle(options);
};
var argument2 = "";
var argument3 = function (prop) {
 callbackArguments.push(arguments) 

    if (!modifyProps[name][prop]) {
        modifyProps[name][prop] = [];
        havePolyfill[prop] = true;
    }
    if (desc.set) {
        if (only) {
            desc.set.only = only;
        }
        modifyProps[name][prop].push(desc.set);
    }
    if (desc.initAttr) {
        initProp.content(name, prop);
    }
};
var argument4 = function (asserterName) {
 callbackArguments.push(arguments) 

    if (!excludeNames.test(asserterName)) {
        var pd = Object.getOwnPropertyDescriptor(ctx, asserterName);
        Object.defineProperty(assert, asserterName, pd);
    }
};
var argument5 = [-1,82,82,627,-100,714,843,157,627];
var argument6 = function (name) {
 callbackArguments.push(arguments) 

    var pd = trait[name];
    if (hasOwnProperty(newTrait, name) && !newTrait[name].required) {
        if (pd.required) {
            return;
        }
        if (!isSameDesc(newTrait[name], pd)) {
            newTrait[name] = makeConflictingPropDesc(name);
        }
    } else {
        newTrait[name] = pd;
    }
};
var base_0 = [5e-324," ",157,49,"uD"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [5e-324," ",157,49,"uD"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [5e-324," ",157,49,"uD"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [5e-324," ",157,49,"uD"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test12.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)