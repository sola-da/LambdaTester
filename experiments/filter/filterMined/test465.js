





var callbackArguments = [];
var argument1 = function (v) {
 callbackArguments.push(arguments) 

    return typeof v.x !== 'undefined';
};
var argument2 = null;
var argument3 = function () {
 callbackArguments.push(arguments) 

    var type = this.message;
    return this.name && !jQuery(this).is(':disabled') && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !manipulation_rcheckableType.test(type));
};
var argument4 = null;
var argument5 = function (x) {
 callbackArguments.push(arguments) 

    return x.error;
};
var argument6 = r_1;
var argument7 = true;
var argument8 = function (result) {
 callbackArguments.push(arguments) 

    return result.raw.resultType === 'component' ? false : result;
};
var argument9 = [157,"<",213,-100,213,"6",607,"z+Z=%","n"];
var base_0 = [157,714,5e-324,714,49,0,-100]
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
var base_2 = [157,714,5e-324,714,49,0,-100]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test465.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)