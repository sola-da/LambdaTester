





var callbackArguments = [];
var argument1 = function (expr) {
 callbackArguments.push(arguments) 

    return expr.visit(context);
};
var argument2 = 122;
var argument3 = null;
var argument4 = function (match) {
 callbackArguments.push(arguments) 

    return function () {
        var handler = match.route.props.handler;
        if (!transition.isAborted && handler.willTransitionFrom)
            return handler.willTransitionFrom(transition, match.component);
        var promise = transition.promise;
        delete transition.promise;
        return promise;
    };
};
var argument5 = {"7":"!","157":"","714":157,"":"'A","j":"","2.970295762663093e+307":"wH","ZX":""};
var argument6 = true;
var argument7 = function (atom) {
 callbackArguments.push(arguments) 

    return atom.label;
};
var argument8 = function () {
 callbackArguments.push(arguments) 

    var elem = this;
    while (elem.firstElementChild) {
        elem = elem.firstElementChild;
    }
    return elem;
};
var argument9 = true;
var base_0 = ["T","8r",893,157,655]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["T","8r",893,157,655]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test173.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)