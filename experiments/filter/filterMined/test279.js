





var callbackArguments = [];
var argument1 = function (a) {
 callbackArguments.push(arguments) 

    if (relationArray._addsInProcess.indexOf(a) >= 0) {
        return false;
    }
    return fkPropNames.some(function (fk, i) {
        var keyProp = keyProps[i].name;
        var keyVal = parentEntity.getProperty(keyProp);
        var fkVal = a.getProperty(fk);
        return keyVal !== fkVal;
    });
};
var argument2 = function (value, index, array) {
 callbackArguments.push(arguments) 

    return done || (done = !predicate(value, index, array));
};
var argument3 = "=5";
var argument4 = false;
var argument5 = function () {
 callbackArguments.push(arguments) 

    var type = this.message;
    return this.name && !jQuery(this).is(':disabled') && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !manipulation_rcheckableType.test(type));
};
var argument6 = function () {
 callbackArguments.push(arguments) 

    var type = this.message;
    return this.name && !jQuery(this).is(':disabled') && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !manipulation_rcheckableType.test(type));
};
var argument7 = false;
var base_0 = ["#","u","H","<","FL-SX"," !"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["#","u","H","<","FL-SX"," !"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["#","u","H","<","FL-SX"," !"]
var r_2= undefined
try {
r_2 = base_2.filter(argument5)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test279.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)