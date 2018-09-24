





var callbackArguments = [];
var argument1 = function (n) {
 callbackArguments.push(arguments) 

    addExtension(exts[n], n);
};
var argument2 = function (e) {
 callbackArguments.push(arguments) 

    (i === t ? !o.hasClass(e) : i) ? o.addClass(e) : o.removeClass(e);
};
var argument3 = ["Un%[2","8dz","F","tu","D","Z","E","I","N"];
var argument4 = function (err) {
 callbackArguments.push(arguments) 

    callback(err, results);
};
var argument5 = r_1;
var argument6 = function (axis) {
 callbackArguments.push(arguments) 

    var axisRole = axis.role, isRoleCompatible = axisRole.name === roleName || axisRole.sourceRole && axisRole.sourceRole.name === roleName;
    if (isRoleCompatible && axis.scale && (0 === axis.index || axis.option.isSpecified('Colors') || axis.option.isSpecified('Map'))) {
        scale = axis.scale;
        firstScale || (firstScale = scale);
        axis.domainValues().forEach(addDomainValue);
    }
};
var base_0 = [5e-324,")","Xe",893,242,618,213,969]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [5e-324,")","Xe",893,242,618,213,969]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [5e-324,")","Xe",893,242,618,213,969]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [5e-324,")","Xe",893,242,618,213,969]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test957.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)