





var callbackArguments = [];
var argument1 = function (child) {
 callbackArguments.push(arguments) 

    return child !== element;
};
var argument2 = r_0;
var argument3 = function (a) {
 callbackArguments.push(arguments) 

    return a.parent !== complexArray.parent;
};
var argument4 = r_0;
var argument5 = null;
var argument6 = function () {
 callbackArguments.push(arguments) 

    var i = 0;
    for (; i < l; i++) {
        if (jQuery.contains(this, targets[i])) {
            return true;
        }
    }
};
var argument7 = function () {
 callbackArguments.push(arguments) 

    return this.name && !this.disabled && (this.checked || rselectTextarea.test(this.nodeName) || rinput.test(this.message));
};
var base_0 = [705,-100]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,-100]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,-100]
var r_2= undefined
try {
r_2 = base_2.filter(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,-100]
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
require("fs").writeFileSync("./experiments/filter/filterMined/test168.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)