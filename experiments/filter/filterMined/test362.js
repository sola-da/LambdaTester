





var callbackArguments = [];
var argument1 = function (b) {
 callbackArguments.push(arguments) 

    return block_ids.includes(b.blockID);
};
var argument2 = function () {
 callbackArguments.push(arguments) 

    for (i = 0; i < len; i++) {
        if (jQuery.contains(self[i], this)) {
            return true;
        }
    }
};
var argument3 = function (guest) {
 callbackArguments.push(arguments) 

    return !!guest.name && (attending ? guest.is_attending : true);
};
var argument4 = function (x, j) {
 callbackArguments.push(arguments) 

    return j !== i;
};
var argument5 = {"0":714,"655":"_","823":1.6006450878535022e+308,"1.0692999465154441e+308":403,"":"","#'":823,"7.962849213036684e+307":714,"1L":"","8.031834077842752e+307":2.720154560212796e+307,">":49};
var base_0 = [403,618,618,618,403,-100,893]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,618,618,618,403,-100,893]
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,618,618,618,403,-100,893]
var r_2= undefined
try {
r_2 = base_2.filter(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,618,618,618,403,-100,893]
var r_3= undefined
try {
r_3 = base_3.filter(argument4,argument5)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test362.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)