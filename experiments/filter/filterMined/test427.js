





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    var i = 0;
    for (; i < l; i++) {
        if (jQuery.contains(this, targets[i])) {
            return true;
        }
    }
};
var argument2 = function (c) {
 callbackArguments.push(arguments) 

    return c[vars.edges.source][vars.id.value] != vars.focus.value[0] && c[vars.edges.target][vars.id.value] != vars.focus.value[0];
};
var argument3 = null;
var argument4 = false;
var argument5 = function () {
 callbackArguments.push(arguments) 

    var i = 0;
    for (; i < l; i++) {
        if (jQuery.contains(this, targets[i])) {
            return true;
        }
    }
};
var argument6 = function (item) {
 callbackArguments.push(arguments) 

    return _.every(rest, function (other) {
        return _.indexOf(other, item) >= 0;
    });
};
var argument7 = null;
var argument8 = true;
var base_0 = [595,"R_<W","5{",823,157,"v","$z"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,"R_<W","5{",823,157,"v","$z"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,"R_<W","5{",823,157,"v","$z"]
var r_2= undefined
try {
r_2 = base_2.filter(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,"R_<W","5{",823,157,"v","$z"]
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
require("fs").writeFileSync("./experiments/filter/filterMined/test427.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)