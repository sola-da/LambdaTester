





var callbackArguments = [];
var argument1 = function (val, i) {
 callbackArguments.push(arguments) 

    if (!map[i])
        return '';
    return $type(val) == 'number' ? map[i].replace('@', Math.round(val)) : val;
};
var argument2 = false;
var argument3 = {"714":"`#`f","":4.757844257568974e+307};
var argument4 = function (row) {
 callbackArguments.push(arguments) 

    return that.render(content, that.create_context(row), partials, true);
};
var argument5 = null;
var argument6 = function (value) {
 callbackArguments.push(arguments) 

    return value == null ? '' : value + '';
};
var argument7 = false;
var argument8 = function (item) {
 callbackArguments.push(arguments) 

    var result = {};
    result[DOMProperty.ID_ATTRIBUTE_NAME] = item.id;
    result['type'] = item.message;
    result['args'] = JSON.stringify(item.args);
    return result;
};
var base_0 = [126,627,783,157,25,49]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,627,783,157,25,49]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,627,783,157,25,49]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test144.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)