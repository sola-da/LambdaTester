





var callbackArguments = [];
var argument1 = function (a, b, c) {
 callbackArguments.push(arguments) 

    return b == c.indexOf(a);
};
var argument2 = false;
var argument3 = function () {
 callbackArguments.push(arguments) 

    var i = 0;
    for (; i < l; i++) {
        if (jQuery.contains(this, targets[i])) {
            return true;
        }
    }
};
var argument4 = r_0;
var argument5 = null;
var argument6 = function (edge) {
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
var argument7 = function (ref) {
 callbackArguments.push(arguments) 

    return ref.identifier.name === variable.name;
};
var base_0 = ["I","s(S:C",-100,"j;","P",655,"^",893,595]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
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
require("fs").writeFileSync("./experiments/filter/filterMined/test664.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)