





var callbackArguments = [];
var argument1 = function (rule) {
 callbackArguments.push(arguments) 

    if (rule !== self) {
        for (var j = 0; j < rule.selectors.length; j++) {
            match = selector.match(rule.selectors[j]);
            if (match) {
                if (selector.elements.length > match) {
                    Array.prototype.push.apply(rules, rule.find(new Selector(selector.elements.slice(match)), self));
                } else {
                    rules.push(rule);
                }
                break;
            }
        }
    }
};
var argument2 = null;
var argument3 = null;
var argument4 = function (e) {
 callbackArguments.push(arguments) 

    delete s[o][e.i], 'removeEventListener' in t && t.removeEventListener(g(e.e), e.proxy, m(e, r));
};
var argument5 = true;
var argument6 = 4.37142078373317e+307;
var argument7 = function (property) {
 callbackArguments.push(arguments) 

    if (envConfig.hasOwnProperty(property)) {
        configApp(appObj, property, envConfig[property]);
    }
};
var argument8 = "sq";
var argument9 = null;
var argument10 = function (error) {
 callbackArguments.push(arguments) 

    errors.push({
        name: field.getFieldLabel(),
        error: error
    });
};
var argument11 = null;
var argument12 = ">am";
var base_0 = [783,969,655,25,714,655]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,969,655,25,714,655]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,969,655,25,714,655]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,969,655,25,714,655]
var r_3= undefined
try {
r_3 = base_3.forEach(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test629.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)