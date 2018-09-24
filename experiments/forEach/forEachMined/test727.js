





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
var argument2 = null;
var argument3 = function (cancelFn) {
 callbackArguments.push(arguments) 

    (cancelFn || noop)(true);
};
var argument4 = {"8":"","R+":1.6578896047179117e+308,"fD":"","":1.162672938857025e+308,"9.6167907435392e+307":3.3600723624746206e+307,"6.770128744136145e+307":969};
var argument5 = r_1;
var argument6 = function (stuff) {
 callbackArguments.push(arguments) 

    model.compareThings(null, stuff).should.equal(-1);
    model.compareThings(stuff, null).should.equal(1);
};
var argument7 = true;
var argument8 = function (i) {
 callbackArguments.push(arguments) 

    var n = fetchValue(vars, i, t, key);
    if (n) {
        if (n instanceof Array && d3plus.object.validate(n[0])) {
            n = d3plus.util.uniques(n, t);
        }
        name = name.concat(n);
    }
};
var argument9 = null;
var base_0 = ["bQ9","G","J@{","cf","Fr","V","{","7"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["bQ9","G","J@{","cf","Fr","V","{","7"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["bQ9","G","J@{","cf","Fr","V","{","7"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["bQ9","G","J@{","cf","Fr","V","{","7"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test727.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)