





var callbackArguments = [];
var argument1 = function (elem) {
 callbackArguments.push(arguments) 

    return [
        elem.nextSibling,
        elem.parentNode
    ];
};
var argument2 = "";
var argument3 = function (elem) {
 callbackArguments.push(arguments) 

    return elem.selected;
};
var argument4 = [-1,714];
var argument5 = null;
var argument6 = function (item) {
 callbackArguments.push(arguments) 

    var result = {};
    result[DOMProperty.ID_ATTRIBUTE_NAME] = item.id;
    result['type'] = item.message;
    result['args'] = JSON.stringify(item.args);
    return result;
};
var argument7 = function (d) {
 callbackArguments.push(arguments) 

    return d.map(function (v, i) {
        return [
            x.call(stack, v, i),
            y.call(stack, v, i)
        ];
    });
};
var argument8 = null;
var argument9 = null;
var base_0 = [242,100,627,-100,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,100,627,-100,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.map(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test26.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)