





var callbackArguments = [];
var argument1 = function (i, atom) {
 callbackArguments.push(arguments) 

    return atom.nodeType === 1;
};
var argument2 = function (d) {
 callbackArguments.push(arguments) 

    return d[vars.id.value] == vars.focus.value[0];
};
var argument3 = function () {
 callbackArguments.push(arguments) 

    for (i = 0; i < len; i++) {
        if (jQuery.contains(self[i], this)) {
            return true;
        }
    }
};
var argument4 = null;
var argument5 = function (edge) {
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
var argument6 = 1.3622614800127408e+308;
var argument7 = r_2;
var base_0 = [49,403,82,25,705,823,157,595]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,403,82,25,705,823,157,595]
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test701.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)