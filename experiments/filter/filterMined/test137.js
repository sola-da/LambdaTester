





var callbackArguments = [];
var argument1 = function (item) {
 callbackArguments.push(arguments) 

    return item != null;
};
var argument2 = null;
var argument3 = function (d) {
 callbackArguments.push(arguments) 

    if (this.nodeName === 'circle') {
        return isWithinCircle(this, pointSelectR(d));
    } else if (this.nodeName === 'path') {
        return isWithinBar(this);
    }
};
var argument4 = 1.0787368497328466e+308;
var argument5 = null;
var argument6 = function () {
 callbackArguments.push(arguments) 

    var type = this.message;
    return this.name && !jQuery(this).is(':disabled') && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !manipulation_rcheckableType.test(type));
};
var argument7 = 1.192219436083517e+308;
var argument8 = 1.7976931348623157e+308;
var argument9 = function (ext) {
 callbackArguments.push(arguments) 

    return ext.name === 'EnumType';
};
var argument10 = true;
var argument11 = true;
var base_0 = [25]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25]
var r_3= undefined
try {
r_3 = base_3.filter(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test137.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)