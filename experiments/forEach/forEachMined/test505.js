





var callbackArguments = [];
var argument1 = function (value, index) {
 callbackArguments.push(arguments) 

    model.push(value.id);
};
var argument2 = function (value, prop) {
 callbackArguments.push(arguments) 

    extended[prop] = options[prop];
};
var argument3 = null;
var argument4 = function (p) {
 callbackArguments.push(arguments) 

    if (p.name && p.name.indexOf('.') === -1) {
        if (p.optional && optClass) {
            pnames.push('<span class="' + optClass + '">' + p.name + '</span>');
        } else {
            pnames.push(p.name);
        }
    }
};
var argument5 = function (o) {
 callbackArguments.push(arguments) 

    out.push(serialize(o));
};
var argument6 = true;
var argument7 = true;
var base_0 = ["t","(3","5","`h*4D","<(B","M"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["t","(3","5","`h*4D","<(B","M"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["t","(3","5","`h*4D","<(B","M"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["t","(3","5","`h*4D","<(B","M"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test505.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)