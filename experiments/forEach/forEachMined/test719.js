





var callbackArguments = [];
var argument1 = function (v) {
 callbackArguments.push(arguments) 

    var val = fetchValue(vars, v, sort);
    if (val) {
        if (typeof val == 'number') {
            d[sort] += val;
        } else {
            d[sort] = val;
        }
    }
};
var argument2 = function (name) {
 callbackArguments.push(arguments) 

    var value = values[name];
    normalized[name] = value != null ? String(value) : null;
};
var argument3 = 1.7850133120008017e+308;
var argument4 = null;
var argument5 = function (p) {
 callbackArguments.push(arguments) 

    var curr = path.join(dir, p);
    var stat = fs.statSync(curr);
    if (stat.isDirectory()) {
        _rmDir(curr);
    } else {
        try {
            fs.unlinkSync(curr);
        } catch (e) {
            if (e.code === 'EPERM') {
                fs.chmodSync(curr, '0666');
                fs.unlinkSync(curr);
            } else {
                throw e;
            }
        }
    }
};
var argument6 = function (value, key) {
 callbackArguments.push(arguments) 

    if (angular.element(value).is('option')) {
        array.push(optionToData(angular.element(value)));
    } else if (angular.element(value).is('optgroup')) {
        var group = optionGroupToData(angular.element(value));
        angular.forEach(angular.element(value).children(), function (gval, gkey) {
            array.push(optionToData(angular.element(gval), group));
        });
    }
};
var argument7 = [714,403,893,242,242];
var argument8 = false;
var base_0 = [-1,714,655,122,122]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,714,655,122,122]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,714,655,122,122]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,714,655,122,122]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test719.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)