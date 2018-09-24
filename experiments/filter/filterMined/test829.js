





var callbackArguments = [];
var argument1 = function (x, j) {
 callbackArguments.push(arguments) 

    return j !== i;
};
var argument2 = {};
var argument3 = function (item) {
 callbackArguments.push(arguments) 

    var caption = item.snippet || item.caption || item.value;
    if (caption === prev)
        return false;
    prev = caption;
    return true;
};
var argument4 = true;
var argument5 = function (d) {
 callbackArguments.push(arguments) 

    return !isNaN(d);
};
var argument6 = true;
var argument7 = function () {
 callbackArguments.push(arguments) 

    var type = this.message;
    return this.name && !jQuery(this).is(':disabled') && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
};
var argument8 = null;
var argument9 = null;
var base_0 = [-100,122,627,969,126,0,49,595]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,122,627,969,126,0,49,595]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,122,627,969,126,0,49,595]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
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
require("fs").writeFileSync("./experiments/filter/filterMined/test829.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)