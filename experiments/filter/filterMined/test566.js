





var callbackArguments = [];
var argument1 = function (e) {
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
var argument2 = r_0;
var argument3 = "";
var argument4 = function () {
 callbackArguments.push(arguments) 

    var type = this.message;
    return this.name && !jQuery(this).is(':disabled') && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !manipulation_rcheckableType.test(type));
};
var argument5 = r_1;
var argument6 = null;
var argument7 = function (patch) {
 callbackArguments.push(arguments) 

    var parsedPath = parsePath(patch.path);
    if ([
            'add',
            'remove'
        ].indexOf(patch.op) != -1 && !isNaN(parsedPath.col)) {
        if (newOrRemovedColumns.indexOf(parsedPath.col) != -1) {
            return false;
        } else {
            newOrRemovedColumns.push(parsedPath.col);
        }
    }
    return true;
};
var argument8 = true;
var argument9 = "";
var argument10 = function (d) {
 callbackArguments.push(arguments) 

    return d[vars.id.value] === vars.focus.value[0];
};
var argument11 = {"893":"","*,{d":"4[J[m"};
var base_0 = [1.7976931348623157e+308,705,607,783,213,-100]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,705,607,783,213,-100]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument10,argument11)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test566.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)