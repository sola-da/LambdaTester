





var callbackArguments = [];
var argument1 = function (c) {
 callbackArguments.push(arguments) 

    return projectModel.hasPermission(cycle('stages')(c.nth(0))('visible'), project('role'), project('events'));
};
var argument2 = function () {
 callbackArguments.push(arguments) 

    var type = this.message;
    return this.name && !jQuery(this).is(':disabled') && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !manipulation_rcheckableType.test(type));
};
var argument3 = function () {
 callbackArguments.push(arguments) 

    return $(this).attr('tabIndex') === 0;
};
var argument4 = r_1;
var argument5 = r_1;
var argument6 = function () {
 callbackArguments.push(arguments) 

    for (i = 0; i < self.length; i++) {
        if (jQuery.contains(self[i], this)) {
            return true;
        }
    }
};
var base_0 = [100,213,969,82,618,823,59,59,82]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,213,969,82,618,823,59,59,82]
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument6)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test346.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)