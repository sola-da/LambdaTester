





var callbackArguments = [];
var argument1 = function (rule) {
 callbackArguments.push(arguments) 

    if (rule !== self) {
        for (var j = 0; j < rule.selectors.length; j++) {
            if (match = selector.match(rule.selectors[j])) {
                if (selector.elements.length > 1) {
                    Array.prototype.push.apply(rules, rule.find(new tree.Selector(selector.elements.slice(1)), self));
                } else {
                    rules.push(rule);
                }
                break;
            }
        }
    }
};
var argument2 = [607,705,893,705,843,595,82,-100];
var argument3 = function (f) {
 callbackArguments.push(arguments) 

    if (f[0] != '.') {
        arr.push(f);
    }
};
var argument4 = function (o) {
 callbackArguments.push(arguments) 

    out.push(serialize(o));
};
var argument5 = "";
var argument6 = function (fn) {
 callbackArguments.push(arguments) 

    value = fn(value);
};
var base_0 = [126,25,-1]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,25,-1]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,25,-1]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,25,-1]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test698.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)