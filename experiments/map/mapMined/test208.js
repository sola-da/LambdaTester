





var callbackArguments = [];
var argument1 = function (pred) {
 callbackArguments.push(arguments) 

    return pred.visit(context);
};
var argument2 = function (nn) {
 callbackArguments.push(arguments) 

    return vars.format.value(nn.toString(), t);
};
var argument3 = function (item) {
 callbackArguments.push(arguments) 

    if (typeof item === 'string') {
        return {
            label: item,
            value: item
        };
    }
    return $.extend({
        label: item.label || item.value,
        value: item.value || item.label
    }, item);
};
var argument4 = 1.7305169351744785e+308;
var argument5 = function (val) {
 callbackArguments.push(arguments) 

    return {
        name: '\'' + val + '\'',
        token: 'keyword'
    };
};
var base_0 = [714,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.map(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.map(argument5)
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
require("fs").writeFileSync("./experiments/map/mapMined/test208.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)