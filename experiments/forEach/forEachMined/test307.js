





var callbackArguments = [];
var argument1 = function (optKey) {
 callbackArguments.push(arguments) 

    delete subOpts[optKey];
};
var argument2 = function (id) {
 callbackArguments.push(arguments) 

    _counter[id]++;
    this.globals[id].activate();
};
var argument3 = false;
var argument4 = 82;
var argument5 = function (prop) {
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
var argument6 = function (paramName, index) {
 callbackArguments.push(arguments) 

    params[paramName] = match[index + 1];
};
var argument7 = true;
var argument8 = [714,213,1.7976931348623157e+308,157,157];
var base_0 = ["J","?","`","w","BiJ"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["J","?","`","w","BiJ"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["J","?","`","w","BiJ"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["J","?","`","w","BiJ"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test307.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)