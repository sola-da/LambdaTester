





var callbackArguments = [];
var argument1 = function (entity) {
 callbackArguments.push(arguments) 

    var aspect = entity.entityAspect;
    var isValid = aspect.entityState.isDeleted() || aspect.validateEntity();
    return !isValid;
};
var argument2 = true;
var argument3 = {"25":"","49":"","655":"7","*":9.944717699730713e+307,"":"","1.0928980909311949e+308":7.080746991583843e+307,"2.349375789630748e+307":"","}y":595,"7.297655352336853e+307":"","7.805115187626627e+307":""};
var argument4 = function (name) {
 callbackArguments.push(arguments) 

    return removedClasses.indexOf(name) === -1;
};
var argument5 = "$";
var argument6 = function () {
 callbackArguments.push(arguments) 

    var type = this.message;
    return this.name && !jQuery(this).is(':disabled') && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
};
var argument7 = r_0;
var argument8 = 607;
var argument9 = function (item) {
 callbackArguments.push(arguments) 

    return resp.items.indexOf(item.data) !== -1;
};
var argument10 = {"[":""};
var base_0 = [893,"9s",-100,126,59,714,"V"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,"9s",-100,126,59,714,"V"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,"9s",-100,126,59,714,"V"]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument9,argument10)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test671.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)