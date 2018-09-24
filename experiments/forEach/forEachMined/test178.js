





var callbackArguments = [];
var argument1 = function (key) {
 callbackArguments.push(arguments) 

    if (!(key in PouchAlt)) {
        PouchAlt[key] = PouchDB[key];
    }
};
var argument2 = {"Fn":9.518434361342049e+307,"1.6633790894557595e+308":893};
var argument3 = {"242":9.87584936400125e+307,"783":2.329586229988876e+307};
var argument4 = function (operation) {
 callbackArguments.push(arguments) 

    operation.cancel();
};
var argument5 = function (d) {
 callbackArguments.push(arguments) 

    for (var i = 0; i < targets.length; i++) {
        if (d.id === targets[i].id) {
            d.values = targets[i].values;
            targets.splice(i, 1);
            break;
        }
    }
};
var argument6 = function (parameter) {
 callbackArguments.push(arguments) 

    if (parameter.charAt(0) === '+' || parameter.charAt(0) === '-') {
        parameter = parameter.substring(1);
    }
    if (!(parameter in store.indexedProperties))
        updateStatistics(parameter);
};
var argument7 = null;
var base_0 = ["V","w{c","RWU","URDcuf"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["V","w{c","RWU","URDcuf"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["V","w{c","RWU","URDcuf"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["V","w{c","RWU","URDcuf"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test178.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)