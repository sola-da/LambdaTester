





var callbackArguments = [];
var argument1 = function (ln) {
 callbackArguments.push(arguments) 

    return ln.indexOf('[') === 0 && ln.indexOf(']') > 0;
};
var argument2 = false;
var argument3 = function () {
 callbackArguments.push(arguments) 

    for (i = 0; i < len; i++) {
        if (jQuery.contains(self[i], this)) {
            return true;
        }
    }
};
var argument4 = true;
var argument5 = function (d) {
 callbackArguments.push(arguments) 

    if ('endPoint' in d.d3plus && d.d3plus.endPoint === vars.depth.value) {
        d.d3plus.icon = false;
    }
    return true;
};
var argument6 = function (d, i) {
 callbackArguments.push(arguments) 

    return i === 0;
};
var base_0 = ["OX",5e-324,"L",122,242,"U"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["OX",5e-324,"L",122,242,"U"]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["OX",5e-324,"L",122,242,"U"]
var r_2= undefined
try {
r_2 = base_2.filter(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["OX",5e-324,"L",122,242,"U"]
var r_3= undefined
try {
r_3 = base_3.filter(argument6)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test23.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)