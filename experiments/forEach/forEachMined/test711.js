





var callbackArguments = [];
var argument1 = function (id) {
 callbackArguments.push(arguments) 

    __data_colors[id] = colors[id];
};
var argument2 = [595,213,403,"$",783,893];
var argument3 = function (kv) {
 callbackArguments.push(arguments) 

    kv = kv.split('=');
    params[kv[0]] = kv[1];
};
var argument4 = function (t) {
 callbackArguments.push(arguments) 

    main.selectAll('.' + CLASS.selectedCircles + getTargetSelectorSuffix(t.id)).selectAll('.' + CLASS.selectedCircle).each(function (d) {
        d.value = t.values[d.index].value;
    });
};
var argument5 = function (axis) {
 callbackArguments.push(arguments) 

    var axisRole = axis.role, isRoleCompatible = axisRole.name === roleName || axisRole.sourceRole && axisRole.sourceRole.name === roleName;
    if (isRoleCompatible && axis.scale && (0 === axis.index || axis.option.isSpecified('Colors') || axis.option.isSpecified('Map'))) {
        scale = axis.scale;
        firstScale || (firstScale = scale);
        axis.domainValues().forEach(addDomainValue);
    }
};
var argument6 = true;
var base_0 = [126,1.7976931348623157e+308,823]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,1.7976931348623157e+308,823]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,1.7976931348623157e+308,823]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,1.7976931348623157e+308,823]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test711.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)