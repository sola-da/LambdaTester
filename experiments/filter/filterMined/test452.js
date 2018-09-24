





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    var m = this.slice(0, parts[i].length), p = parts[i].slice(0, m.length);
    return m == p;
};
var argument2 = function (edge) {
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
var argument3 = true;
var argument4 = function () {
 callbackArguments.push(arguments) 

    for (i = 0; i < l; i++) {
        if (jQuery.contains(self[i], this)) {
            return true;
        }
    }
};
var argument5 = function (atom) {
 callbackArguments.push(arguments) 

    return def.hasOwnProp.call(atomsByKey, atom.key);
};
var argument6 = true;
var base_0 = [607,242,1.7976931348623157e+308,122,893,82,1.7976931348623157e+308,5e-324]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,242,1.7976931348623157e+308,122,893,82,1.7976931348623157e+308,5e-324]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,242,1.7976931348623157e+308,122,893,82,1.7976931348623157e+308,5e-324]
var r_2= undefined
try {
r_2 = base_2.filter(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,242,1.7976931348623157e+308,122,893,82,1.7976931348623157e+308,5e-324]
var r_3= undefined
try {
r_3 = base_3.filter(argument5,argument6)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test452.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)