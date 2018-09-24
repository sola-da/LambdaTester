





var callbackArguments = [];
var argument1 = function (cat) {
 callbackArguments.push(arguments) 

    return cat.name;
};
var argument2 = 1.4159006141767113e+308;
var argument3 = function (item) {
 callbackArguments.push(arguments) 

    return context.propertyPathFn(item.propertyPath) + (item.isDesc ? ' desc' : '');
};
var argument4 = ["h",460,"|","$:M;",-100];
var argument5 = function (content) {
 callbackArguments.push(arguments) 

    if (!resources.components[result.stages[content.id].component.name])
        return content;
    return resources.components[result.stages[content.id].component.name].content.get(content, result.stages[content.id], result.project, result.cycle);
};
var argument6 = null;
var argument7 = function (e) {
 callbackArguments.push(arguments) 

    return e.eval(env);
};
var base_0 = [-100,460]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,460]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test265.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)