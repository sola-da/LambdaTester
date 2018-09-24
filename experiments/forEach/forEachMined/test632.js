





var callbackArguments = [];
var argument1 = function (sym) {
 callbackArguments.push(arguments) 

    sym.validatorCtor = getValidatorCtor(sym);
};
var argument2 = {"213":2.2122544918536986e+307,"783":5.482203709087643e+307,"823":"Ld","":"","[t":"","4.912769922556103e+307":"","3.908393851714119e+307":"","mCd>":"","OJx5r-p4":""};
var argument3 = null;
var argument4 = function (v, i) {
 callbackArguments.push(arguments) 

    if (getAxisId(id) === getAxisId(baseId) && ys[baseId] && !(hasPositiveValue && +v < 0)) {
        ys[baseId][i] += +v;
    }
};
var argument5 = null;
var argument6 = null;
var argument7 = function (name, index) {
 callbackArguments.push(arguments) 

    item[name] = row[index];
};
var argument8 = function (side) {
 callbackArguments.push(arguments) 

    var value = 0, sideValue = this[side];
    null != sideValue && (value = 'number' == typeof sideValue ? sideValue : sideValue.resolve('left' === side || 'right' === side ? width : height));
    sides[side] = value;
};
var argument9 = 1.4245633933622326e+308;
var base_0 = [25]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test632.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)