





var callbackArguments = [];
var argument1 = function (f) {
 callbackArguments.push(arguments) 

    f(vars, nextStep);
};
var argument2 = function (inputIndex) {
 callbackArguments.push(arguments) 

    availableInputIndexes.splice(inputIndex, 1);
};
var argument3 = function (aTelVariant) {
 callbackArguments.push(arguments) 

    assert.isUndefined(index.byTel[aTelVariant]);
};
var argument4 = function (level, i) {
 callbackArguments.push(arguments) 

    nestedData.key(function (d) {
        if (typeof level === 'function') {
            return level(d);
        }
        return fetchValue(vars, d, level);
    });
    checkAxes();
};
var argument5 = null;
var base_0 = [783,893,"@Cm",49,"t","b",403,126,893]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,893,"@Cm",49,"t","b",403,126,893]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,893,"@Cm",49,"t","b",403,126,893]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,893,"@Cm",49,"t","b",403,126,893]
var r_3= undefined
try {
r_3 = base_3.forEach(argument4,argument5)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test524.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)