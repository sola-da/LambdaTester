





var callbackArguments = [];
var argument1 = function (o, i) {
 callbackArguments.push(arguments) 

    this[i] = o;
};
var argument2 = function (v, i) {
 callbackArguments.push(arguments) 

    return {
        index: i,
        x: v[0],
        y: v[1]
    };
};
var argument3 = false;
var argument4 = false;
var argument5 = function (i) {
 callbackArguments.push(arguments) 

    return i.all(order);
};
var argument6 = false;
var argument7 = function (p) {
 callbackArguments.push(arguments) 

    if (p.merge === '+') {
        if (lastSpacedGroup.length > 0) {
            spacedGroups.push(toExpression(lastSpacedGroup));
        }
        lastSpacedGroup = [];
    }
    lastSpacedGroup.push(p);
};
var base_0 = [0,714,213,122,595,607,893,969,25,25]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,714,213,122,595,607,893,969,25,25]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
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
require("fs").writeFileSync("./experiments/map/mapMined/test465.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)