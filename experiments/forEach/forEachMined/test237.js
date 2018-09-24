





var callbackArguments = [];
var argument1 = function (gMarker) {
 callbackArguments.push(arguments) 

    return _this.remove(gMarker);
};
var argument2 = null;
var argument3 = {",":126};
var argument4 = function (deregisterWatch) {
 callbackArguments.push(arguments) 

    deregisterWatch();
};
var argument5 = function (rule) {
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
var argument6 = function (m) {
 callbackArguments.push(arguments) 

    OTR.prototype._SMW.prototype[m] = function () {
        this.worker.postMessage({
            type: 'method',
            method: m,
            args: Array.prototype.slice.call(arguments, 0)
        });
    };
};
var base_0 = ["+",59,0,"$VT<",705,242,"{F",595,823]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["+",59,0,"$VT<",705,242,"{F",595,823]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["+",59,0,"$VT<",705,242,"{F",595,823]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["+",59,0,"$VT<",705,242,"{F",595,823]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test237.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)