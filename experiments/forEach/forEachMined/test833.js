





var callbackArguments = [];
var argument1 = function (id) {
 callbackArguments.push(arguments) 

    for (var j = 0; j < selectedData.length; j++) {
        if (selectedData[j] && selectedData[j].id === id) {
            newData.push(selectedData[j]);
            selectedData.shift(j);
            break;
        }
    }
};
var argument2 = false;
var argument3 = [25,100,0,0,403,714];
var argument4 = function (onLoad) {
 callbackArguments.push(arguments) 

    onLoad && onLoad(module);
};
var argument5 = function (field) {
 callbackArguments.push(arguments) 

    field.setDisabled(newDisabled);
};
var argument6 = {"893":1.7053142137069174e+308,"1.105819147433422e+308":1.5420456327115867e+308,"`":"","3.833605058530322e+306":"","":"&","(":"G","3.1708111789531714e+306":7.238389487403282e+307};
var argument7 = function (path) {
 callbackArguments.push(arguments) 

    assert.ok(~[
        'hello',
        'goodbye',
        'world',
        'foo'
    ].indexOf(path));
};
var base_0 = [618,705,5e-324,607,460,0,25,-100,25]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,705,5e-324,607,460,0,25,-100,25]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,705,5e-324,607,460,0,25,-100,25]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,705,5e-324,607,460,0,25,-100,25]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test833.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)