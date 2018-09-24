





var callbackArguments = [];
var argument1 = function (item) {
 callbackArguments.push(arguments) 

    return productName == item.item;
};
var argument2 = null;
var argument3 = function (v) {
 callbackArguments.push(arguments) 

    return exports.satisfiesAll(v, ranges);
};
var argument4 = function () {
 callbackArguments.push(arguments) 

    return this.name && !this.disabled && (this.checked || rselectTextarea.test(this.nodeName) || rinput.test(this.message));
};
var argument5 = null;
var argument6 = function () {
 callbackArguments.push(arguments) 

    !this.name && validator.settings.debug && window.console && console.error('%o has no name assigned', this);
    if (this.name in rulesCache || !validator.objectLength($(this).rules()))
        return false;
    rulesCache[this.name] = true;
    return true;
};
var argument7 = r_2;
var argument8 = true;
var base_0 = ["=zp","v"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["=zp","v"]
var r_1= undefined
try {
r_1 = base_1.filter(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["=zp","v"]
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
r_3 = base_3.filter(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test183.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)