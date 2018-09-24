





var callbackArguments = [];
var argument1 = function (etName) {
 callbackArguments.push(arguments) 

    return em.metadataStore._getEntityType(etName, false);
};
var argument2 = 460;
var argument3 = function (t, e) {
 callbackArguments.push(arguments) 

    return s.call(U(e.parentNode), function (t) {
        return t !== e;
    });
};
var argument4 = r_1;
var argument5 = function () {
 callbackArguments.push(arguments) 

    return 0;
};
var argument6 = function () {
 callbackArguments.push(arguments) 

    var elements = jQuery.prop(this, 'elements');
    return elements ? jQuery.makeArray(elements) : this;
};
var argument7 = true;
var argument8 = 1.362585769417458e+308;
var base_0 = [783,-100,893,59,49,627,"q>uZ","+9","<i"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,-100,893,59,49,627,"q>uZ","+9","<i"]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,-100,893,59,49,627,"q>uZ","+9","<i"]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,-100,893,59,49,627,"q>uZ","+9","<i"]
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test239.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)