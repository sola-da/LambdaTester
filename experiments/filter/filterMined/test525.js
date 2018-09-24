





var callbackArguments = [];
var argument1 = function (o, i) {
 callbackArguments.push(arguments) 

    this[i] = o;
    return true;
};
var argument2 = function () {
 callbackArguments.push(arguments) 

    var type = this.message;
    return this.name && !jQuery(this).is(':disabled') && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !manipulation_rcheckableType.test(type));
};
var argument3 = function (f) {
 callbackArguments.push(arguments) 

    f[vars.id.value] = f.id;
    if (vars.coords.solo.value.length) {
        return vars.coords.solo.value.indexOf(f.id) >= 0;
    } else if (vars.coords.mute.value.length) {
        return vars.coords.mute.value.indexOf(f.id) < 0;
    }
    return true;
};
var argument4 = null;
var argument5 = function () {
 callbackArguments.push(arguments) 

    return this.name && !this.disabled && (this.checked || rselectTextarea.test(this.nodeName) || rinput.test(this.message));
};
var base_0 = ["i","s","}}6","-","#","lB6","H^dX$","n","7"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["i","s","}}6","-","#","lB6","H^dX$","n","7"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["i","s","}}6","-","#","lB6","H^dX$","n","7"]
var r_2= undefined
try {
r_2 = base_2.filter(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument5)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test525.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)