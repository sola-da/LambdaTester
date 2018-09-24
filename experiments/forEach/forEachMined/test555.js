





var callbackArguments = [];
var argument1 = function (klass) {
 callbackArguments.push(arguments) 

    clone.removeClass(klass);
};
var argument2 = true;
var argument3 = function (value, key) {
 callbackArguments.push(arguments) 

    if (value)
        xhr.setRequestHeader(key, value);
};
var argument4 = [100,"E","A]n",59,"2h","e",627,"t","y",627];
var argument5 = function (x) {
 callbackArguments.push(arguments) 

    acc.push(this.path);
};
var argument6 = true;
var argument7 = function (dimension) {
 callbackArguments.push(arguments) 

    var Dimension = dimension.substr(0, 1).toUpperCase() + dimension.substr(1);
    $.fn['inner' + Dimension] = ioDim(dimension, false);
    $.fn['outer' + Dimension] = ioDim(dimension, true);
};
var base_0 = [1.7976931348623157e+308,"i","XrRP",82]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,"i","XrRP",82]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,"i","XrRP",82]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,"i","XrRP",82]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test555.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)