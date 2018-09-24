





var callbackArguments = [];
var argument1 = function (element) {
 callbackArguments.push(arguments) 

    element = angular.element(element);
    var data = element.data(NG_ANIMATE_STATE);
    if (data && data.active) {
        forEach(data.active, function (runner) {
            runner.cancel();
        });
    }
};
var argument2 = function (i) {
 callbackArguments.push(arguments) 

    exports[i] = typeof fs[i] !== 'function' ? fs[i] : i.match(/^[A-Z]|^create|Sync$/) ? function () {
        return fs[i].apply(fs, arguments);
    } : graceful(fs[i]);
};
var argument3 = null;
var argument4 = function (key, value) {
 callbackArguments.push(arguments) 

    values.push(value);
};
var argument5 = null;
var argument6 = function (variable) {
 callbackArguments.push(arguments) 

    if (!variable.defs.length) {
        return;
    }
    var bindingSource;
    if ((bindingSource = symbolMap[variable.name]) && bindingSource !== scope && !isParameter(variable)) {
        reportShadow(variable.defs[0].name, variable.name);
    }
};
var argument7 = [705,595,"SN",714,"vq@5"];
var base_0 = [0,-1,122,655,823,82,82,100]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,-1,122,655,823,82,82,100]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,-1,122,655,823,82,82,100]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,-1,122,655,823,82,82,100]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test196.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)