





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    if (this.nodeName === 'circle') {
        return isWithinCircle(this, pointSelectR(d));
    } else if (this.nodeName === 'path') {
        return isWithinBar(this);
    }
};
var argument2 = null;
var argument3 = function (p) {
 callbackArguments.push(arguments) 

    return p && p.length > 0;
};
var argument4 = null;
var argument5 = function (keyword) {
 callbackArguments.push(arguments) 

    return /^\w+$/.test(keyword);
};
var argument6 = "%";
var argument7 = function () {
 callbackArguments.push(arguments) 

    var type = this.message;
    return this.name && !jQuery(this).is(':disabled') && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
};
var base_0 = [705,403,823,25,25,714,122]
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
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument7)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test476.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)