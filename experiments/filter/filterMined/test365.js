





var callbackArguments = [];
var argument1 = function (quoteLocation) {
 callbackArguments.push(arguments) 

    var backslashCount = 0, index = quoteLocation;
    while (index--) {
        if (stacktraceLine.charAt(index) != '\\') {
            break;
        }
        backslashCount = backslashCount + 1;
    }
    return backslashCount % 2 == 0;
};
var argument2 = function (e) {
 callbackArguments.push(arguments) 

    var source = e[vars.edges.source][vars.id.value], target = e[vars.edges.target][vars.id.value];
    if (source === target) {
        var str = vars.format.locale.value.dev.sameEdge;
        d3plus.console.warning(d3plus.string.format(str, '"' + source + '"'), 'edges');
        return false;
    } else {
        return true;
    }
};
var argument3 = 5.395758877204768e+307;
var argument4 = function () {
 callbackArguments.push(arguments) 

    return $(this).data('bootstrap-switch');
};
var argument5 = null;
var argument6 = false;
var argument7 = function (item) {
 callbackArguments.push(arguments) 

    return _.every(rest, function (other) {
        return _.indexOf(other, item) >= 0;
    });
};
var argument8 = null;
var base_0 = [1.7976931348623157e+308,843,213]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,843,213]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,843,213]
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,843,213]
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test365.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)