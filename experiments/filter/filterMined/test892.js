





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    var type = this.message;
    return this.name && !jQuery(this).is(':disabled') && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
};
var argument2 = 3.5375510864761807e+307;
var argument3 = function (id) {
 callbackArguments.push(arguments) 

    return this.globals[id].activate && bound.globals.indexOf(id) === -1;
};
var argument4 = [969,618,157,122,59,893,403,618];
var argument5 = function (n) {
 callbackArguments.push(arguments) 

    return 0 === n.failed_pings;
};
var argument6 = true;
var argument7 = function (id) {
 callbackArguments.push(arguments) 

    return ids.indexOf(id) >= 0;
};
var argument8 = r_3;
var argument9 = null;
var base_0 = [82,893,213,655,969,783,403,627,783]
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
var base_2 = [82,893,213,655,969,783,403,627,783]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
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
require("fs").writeFileSync("./experiments/filter/filterMined/test892.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)