





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    return function (input, length) {
        if (!input)
            return '';
        if (!angular.isString(input))
            input = input.toString();
        length = length || 10;
        return input.length > length ? input.substr(0, length) + '...' : input;
    };
};
var argument2 = function (c) {
 callbackArguments.push(arguments) 

    var source = c[vars.edges.source][vars.id.value], target = c[vars.edges.target][vars.id.value];
    return claimed.indexOf(source) < 0 && target == primaryId || claimed.indexOf(target) < 0 && source == primaryId;
};
var argument3 = true;
var argument4 = "M*";
var argument5 = function (value, index, list) {
 callbackArguments.push(arguments) 

    return !predicate.call(context, value, index, list);
};
var argument6 = null;
var argument7 = null;
var argument8 = function (region) {
 callbackArguments.push(arguments) 

    var found = false;
    if (!region.class) {
        return true;
    }
    region.class.split(' ').forEach(function (c) {
        if (classes.indexOf(c) >= 0) {
            found = true;
        }
    });
    return !found;
};
var argument9 = true;
var base_0 = [157,-100,843,655,1.7976931348623157e+308,"I","%","F","{l"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test162.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)