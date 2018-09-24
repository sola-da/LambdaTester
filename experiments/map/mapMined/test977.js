





var callbackArguments = [];
var argument1 = function (child) {
 callbackArguments.push(arguments) 

    if (Array.isArray(child)) {
        return traverse(child);
    }
    return child;
};
var argument2 = function (p) {
 callbackArguments.push(arguments) 

    return p.substring(1, p.length - 1);
};
var argument3 = "";
var argument4 = function (match) {
 callbackArguments.push(arguments) 

    return function () {
        var handler = match.route.props.handler;
        if (!transition.isAborted && handler.willTransitionTo)
            handler.willTransitionTo(transition, match.params, query);
        var promise = transition.promise;
        delete transition.promise;
        return promise;
    };
};
var argument5 = true;
var argument6 = function (obj) {
 callbackArguments.push(arguments) 

    return rename_key_value(obj);
};
var base_0 = ["Qa","@","-"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Qa","@","-"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument6)
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
require("fs").writeFileSync("./experiments/map/mapMined/test977.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)