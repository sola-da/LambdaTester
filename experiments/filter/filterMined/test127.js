





var callbackArguments = [];
var argument1 = function (c, i) {
 callbackArguments.push(arguments) 

    var test = d3plus.util.copy(d);
    test.geometry.coordinates = [test.geometry.coordinates[i]];
    var a = vars.path.area(test);
    if (a == areas[areas.length - 1]) {
        largest.geometry.coordinates = test.geometry.coordinates;
    }
    return a >= d3.quantile(areas, 0.9);
};
var argument2 = function (d) {
 callbackArguments.push(arguments) 

    return isValue(d.value);
};
var argument3 = r_0;
var argument4 = function () {
 callbackArguments.push(arguments) 

    var type = this.message;
    return this.name && !jQuery(this).is(':disabled') && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
};
var argument5 = r_2;
var argument6 = function (b) {
 callbackArguments.push(arguments) 

    return utils.classify(b.message) === type;
};
var argument7 = "?";
var base_0 = [1.7976931348623157e+308,"k",49,"h","1","%","ugtc",59]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,"k",49,"h","1","%","ugtc",59]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,"k",49,"h","1","%","ugtc",59]
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test127.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)