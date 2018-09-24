





var callbackArguments = [];
var argument1 = function (arg, i) {
 callbackArguments.push(arguments) 

    if (i)
        output.comma();
    arg.print(output);
};
var argument2 = function (r) {
 callbackArguments.push(arguments) 

    sel.substractPoint(r.cursor);
};
var argument3 = "^7";
var argument4 = {"25":"GJ","969":"","":655};
var argument5 = function (side) {
 callbackArguments.push(arguments) 

    self[side] = value;
};
var argument6 = function (id) {
 callbackArguments.push(arguments) 

    withoutFadeIn[id] = false;
    legend.selectAll('.' + CLASS.legendItem + getTargetSelectorSuffix(id)).remove();
    c3.data.targets = c3.data.targets.filter(function (t) {
        return t.id !== id;
    });
};
var argument7 = "3}";
var base_0 = [627,49,126,403]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,49,126,403]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,49,126,403]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,49,126,403]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test527.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)