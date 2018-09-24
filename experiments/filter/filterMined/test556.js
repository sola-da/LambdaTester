





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    for (var i = 0, l = targets.length; i < l; i++) {
        if (jQuery.contains(this, targets[i])) {
            return true;
        }
    }
};
var argument2 = function (name) {
 callbackArguments.push(arguments) 

    return name in object;
};
var argument3 = false;
var argument4 = null;
var argument5 = function () {
 callbackArguments.push(arguments) 

    var type = this.message;
    return this.name && !jQuery(this).is(':disabled') && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !manipulation_rcheckableType.test(type));
};
var argument6 = "B";
var argument7 = function (d) {
 callbackArguments.push(arguments) 

    return d3.select(this).node().classList[1] !== liClass;
};
var argument8 = null;
var argument9 = 49;
var base_0 = ["rY4","|","Za","n",":n","!","r","{Z"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["rY4","|","Za","n",":n","!","r","{Z"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["rY4","|","Za","n",":n","!","r","{Z"]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["rY4","|","Za","n",":n","!","r","{Z"]
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test556.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)