





var callbackArguments = [];
var argument1 = function (child) {
 callbackArguments.push(arguments) 

    return child !== element;
};
var argument2 = function (v) {
 callbackArguments.push(arguments) 

    if (v.unused)
        warning('W098', v.token, v.value);
    if (v.undef)
        isundef(v.funct, 'W117', v.token, v.value);
};
var argument3 = function () {
 callbackArguments.push(arguments) 

    return 1;
};
var argument4 = 403;
var argument5 = "";
var argument6 = function () {
 callbackArguments.push(arguments) 

    var i = 0;
    for (; i < l; i++) {
        if (jQuery.contains(this, targets[i])) {
            return true;
        }
    }
};
var argument7 = null;
var base_0 = [705,-1,0,460,618,627,0,823]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,-1,0,460,618,627,0,823]
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,-1,0,460,618,627,0,823]
var r_2= undefined
try {
r_2 = base_2.filter(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test801.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)