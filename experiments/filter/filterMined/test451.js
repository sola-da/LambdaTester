





var callbackArguments = [];
var argument1 = function (match) {
 callbackArguments.push(arguments) 

    return !hasMatch(currentMatches, match);
};
var argument2 = function (item) {
 callbackArguments.push(arguments) 

    return new RegExp('^' + month, 'i').test(item);
};
var argument3 = "1";
var argument4 = function (n) {
 callbackArguments.push(arguments) 

    return !(vars.size.value in n);
};
var argument5 = r_2;
var argument6 = "";
var argument7 = function (edge) {
 callbackArguments.push(arguments) 

    var match = false;
    if (edge[self.source][id] == focus) {
        match = true;
        if (objects) {
            targets.push(edge[self.target]);
        }
    } else if (edge[self.target][id] == focus) {
        match = true;
        if (objects) {
            targets.push(edge[self.source]);
        }
    }
    return match;
};
var base_0 = [-1,595,-100,460,-1,705,627,5e-324,82,783]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,595,-100,460,-1,705,627,5e-324,82,783]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,595,-100,460,-1,705,627,5e-324,82,783]
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,595,-100,460,-1,705,627,5e-324,82,783]
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
require("fs").writeFileSync("./experiments/filter/filterMined/test451.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)