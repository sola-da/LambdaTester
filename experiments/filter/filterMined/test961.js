





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    for (i = 0; i < len; i++) {
        if (jQuery.contains(this, targets[i])) {
            return true;
        }
    }
};
var argument2 = 893;
var argument3 = false;
var argument4 = function (e) {
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
var argument5 = "";
var argument6 = function (element) {
 callbackArguments.push(arguments) 

    return !isEmpty(element.gestures);
};
var argument7 = false;
var argument8 = "I3";
var argument9 = function (d) {
 callbackArguments.push(arguments) 

    return __data_selection_isselectable(d);
};
var argument10 = r_0;
var argument11 = false;
var base_0 = [25,893,1.7976931348623157e+308,82,627,823]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,893,1.7976931348623157e+308,82,627,823]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,893,1.7976931348623157e+308,82,627,823]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,893,1.7976931348623157e+308,82,627,823]
var r_3= undefined
try {
r_3 = base_3.filter(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test961.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)