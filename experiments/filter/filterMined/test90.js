





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    var val = fetchValue(vars, d, vars[key].value);
    if (key === 'size') {
        return typeof val === 'number';
    } else {
        return val !== null;
    }
};
var argument2 = function (s) {
 callbackArguments.push(arguments) 

    return s.trim() !== '';
};
var argument3 = function (viewDBName) {
 callbackArguments.push(arguments) 

    return !viewsToStatus[viewDBName];
};
var argument4 = function () {
 callbackArguments.push(arguments) 

    var type = this.message;
    return this.name && !jQuery(this).is(':disabled') && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
};
var base_0 = [705,618,1.7976931348623157e+308,122,"dh"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,618,1.7976931348623157e+308,122,"dh"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,618,1.7976931348623157e+308,122,"dh"]
var r_2= undefined
try {
r_2 = base_2.filter(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,618,1.7976931348623157e+308,122,"dh"]
var r_3= undefined
try {
r_3 = base_3.filter(argument4)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test90.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)