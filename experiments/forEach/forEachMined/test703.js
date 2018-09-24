





var callbackArguments = [];
var argument1 = function (key) {
 callbackArguments.push(arguments) 

    result[key] = this.getOption(key);
};
var argument2 = true;
var argument3 = function (child) {
 callbackArguments.push(arguments) 

    child.setArrow && child.setArrow();
};
var argument4 = null;
var argument5 = function (target) {
 callbackArguments.push(arguments) 

    target.set('translateToLanguage', newL[0].locale);
};
var argument6 = r_1;
var argument7 = null;
var argument8 = function (leaf) {
 callbackArguments.push(arguments) 

    if (leaf.rev !== win && !leaf.opts.deleted) {
        conflicts.push(leaf.rev);
    }
};
var base_0 = ["%"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["%"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["%"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["%"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test703.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)