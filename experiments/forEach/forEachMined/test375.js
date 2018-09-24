





var callbackArguments = [];
var argument1 = function (fn) {
 callbackArguments.push(arguments) 

    value = fn(value);
};
var argument2 = function (key) {
 callbackArguments.push(arguments) 

    $('<option/>').attr('value', key).text(key).appendTo(select);
};
var argument3 = function (prop) {
 callbackArguments.push(arguments) 

    webshims.defineNodeNamesProperty(nodeNames, prop, {
        prop: {
            set: function (val) {
                $.attr(this, prop, val);
            },
            get: function () {
                return $.attr(this, prop) || '';
            }
        }
    });
};
var argument4 = r_1;
var argument5 = function (propName) {
 callbackArguments.push(arguments) 

    node.removeProperty(propName);
};
var argument6 = 1.7145121292777048e+308;
var argument7 = r_3;
var base_0 = [893,969,969,705,1.7976931348623157e+308,893,157,783,59,122]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,969,969,705,1.7976931348623157e+308,893,157,783,59,122]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,969,969,705,1.7976931348623157e+308,893,157,783,59,122]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,969,969,705,1.7976931348623157e+308,893,157,783,59,122]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test375.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)