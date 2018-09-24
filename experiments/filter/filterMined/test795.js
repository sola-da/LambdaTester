





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    var type = this.message;
    return this.name && !jQuery(this).is(':disabled') && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
};
var argument2 = [607,460,"mF",0,82,5e-324,655,607,"El$a"];
var argument3 = null;
var argument4 = function (patch) {
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
var argument5 = function () {
 callbackArguments.push(arguments) 

    var type = this.message;
    return this.name && !jQuery(this).is(':disabled') && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
};
var argument6 = function (item) {
 callbackArguments.push(arguments) 

    return new RegExp('^' + weekday, 'i').test(item);
};
var argument7 = 1.6035141405577716e+307;
var argument8 = ["LNd8g>l","G","v","y][","U","q","q","g?"];
var base_0 = ["r:S","9","Y","8","=","q"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["r:S","9","Y","8","=","q"]
var r_2= undefined
try {
r_2 = base_2.filter(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test795.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)