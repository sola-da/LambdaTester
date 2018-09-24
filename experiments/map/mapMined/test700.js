





var callbackArguments = [];
var argument1 = function (elem, i) {
 callbackArguments.push(arguments) 

    return callback.call(elem, i, elem);
};
var argument2 = 4.720701713798315e+307;
var argument3 = true;
var argument4 = function (p, i) {
 callbackArguments.push(arguments) 

    return [
        i,
        Math.abs(p - median) / mad
    ];
};
var argument5 = function () {
 callbackArguments.push(arguments) 

    return this.elements ? jQuery.makeArray(this.elements) : this;
};
var base_0 = [403,893,25,714,403,1.7976931348623157e+308,-100,-1,-1,122]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,893,25,714,403,1.7976931348623157e+308,-100,-1,-1,122]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,893,25,714,403,1.7976931348623157e+308,-100,-1,-1,122]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
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
require("fs").writeFileSync("./experiments/map/mapMined/test700.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2]),"returnObjects":serialize([r_0,r_1,r_2]),"callbackArgs":callbackArguments}))
},300)