





var callbackArguments = [];
var argument1 = function (name) {
 callbackArguments.push(arguments) 

    map[name] = getOwnPropertyDescriptor(obj, name);
};
var argument2 = 595;
var argument3 = function (headerVal, headerName) {
 callbackArguments.push(arguments) 

    if (!header && angular.lowercase(headerName) == name)
        header = headerVal;
};
var argument4 = function (l) {
 callbackArguments.push(arguments) 

    if (l.d3plus.merged instanceof Array) {
        if (!d.d3plus.merged)
            d.d3plus.merged = [];
        d.d3plus.merged = d.d3plus.merged.concat(l.d3plus.merged);
    }
    if (l.d3plus.text)
        d.d3plus.text = l.d3plus.text;
};
var argument5 = false;
var argument6 = false;
var argument7 = function (rule) {
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
var argument8 = [49,783,843,627,49,122];
var argument9 = null;
var base_0 = ["1","S","d","kv","M!y"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["1","S","d","kv","M!y"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["1","S","d","kv","M!y"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["1","S","d","kv","M!y"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test800.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)