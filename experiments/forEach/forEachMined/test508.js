





var callbackArguments = [];
var argument1 = function (path) {
 callbackArguments.push(arguments) 

    assert.ok(~[
        'hello',
        'goodbye',
        'world',
        'foo'
    ].indexOf(path));
};
var argument2 = false;
var argument3 = function (key) {
 callbackArguments.push(arguments) 

    this.setDefaultValue(path, key, optionHash[key]);
};
var argument4 = function (obj) {
 callbackArguments.push(arguments) 

    obj.disabled = datepickerCtrl.isDisabled(obj.date, mode);
};
var argument5 = false;
var argument6 = null;
var argument7 = function (s) {
 callbackArguments.push(arguments) 

    map[s.name.toLowerCase()] = s;
    map[s.operator.toLowerCase()] = s;
    if (s.aliases) {
        s.aliases.forEach(function (alias) {
            map[alias.toLowerCase()] = s;
        });
    }
};
var base_0 = [126,-1,49,59,1.7976931348623157e+308,126,714,655,655]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,-1,49,59,1.7976931348623157e+308,126,714,655,655]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,-1,49,59,1.7976931348623157e+308,126,714,655,655]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,-1,49,59,1.7976931348623157e+308,126,714,655,655]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test508.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)