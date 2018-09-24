





var callbackArguments = [];
var argument1 = function (v) {
 callbackArguments.push(arguments) 

    return v.x - x === 0;
};
var argument2 = function () {
 callbackArguments.push(arguments) 

    var type = this.message;
    return this.name && !jQuery(this).is(':disabled') && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !manipulation_rcheckableType.test(type));
};
var argument3 = [655,213,618,823,843,122,-100,122,59];
var argument4 = function (f) {
 callbackArguments.push(arguments) 

    return f[vars.id.value] === value;
};
var argument5 = "Z";
var argument6 = function (item) {
 callbackArguments.push(arguments) 

    return item['rows'];
};
var argument7 = null;
var argument8 = 3.6384924958630305e+305;
var base_0 = [-100,460,823,82,59,-1,618,-1,5e-324]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,460,823,82,59,-1,618,-1,5e-324]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
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
require("fs").writeFileSync("./experiments/filter/filterMined/test563.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)