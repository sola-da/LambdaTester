





var callbackArguments = [];
var argument1 = function (entity) {
 callbackArguments.push(arguments) 

    var aspect = entity.entityAspect;
    var isValid = aspect.entityState.isDeleted() || aspect.validateEntity();
    return !isValid;
};
var argument2 = null;
var argument3 = null;
var argument4 = function () {
 callbackArguments.push(arguments) 

    return this.name && !this.disabled && (this.checked || rselectTextarea.test(this.nodeName) || rinput.test(this.message));
};
var argument5 = ["u",1.7976931348623157e+308,595,783,"E",893,"0"];
var argument6 = function (item) {
 callbackArguments.push(arguments) 

    return item != null;
};
var argument7 = function (x, j) {
 callbackArguments.push(arguments) 

    return j !== i;
};
var argument8 = "^e";
var base_0 = ["BPu<","G","4<","G)Zj","%","r","EKW"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["BPu<","G","4<","G)Zj","%","r","EKW"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["BPu<","G","4<","G)Zj","%","r","EKW"]
var r_2= undefined
try {
r_2 = base_2.filter(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test613.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)