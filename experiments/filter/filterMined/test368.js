





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    return getAxisId(d.id) === axisId;
};
var argument2 = r_0;
var argument3 = function (d) {
 callbackArguments.push(arguments) 

    return d[vars.id.value] == vars.focus.value[0];
};
var argument4 = 4.0532458920928435e+306;
var argument5 = null;
var argument6 = function () {
 callbackArguments.push(arguments) 

    for (i = 0; i < len; i++) {
        if (jQuery.contains(self[i], this)) {
            return true;
        }
    }
};
var argument7 = function (i) {
 callbackArguments.push(arguments) 

    return !f(i);
};
var base_0 = ["AT",122,"l+]a+",5e-324,"5R)6R"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["AT",122,"l+]a+",5e-324,"5R)6R"]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["AT",122,"l+]a+",5e-324,"5R)6R"]
var r_2= undefined
try {
r_2 = base_2.filter(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["AT",122,"l+]a+",5e-324,"5R)6R"]
var r_3= undefined
try {
r_3 = base_3.filter(argument7)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test368.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)