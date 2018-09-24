





var callbackArguments = [];
var argument1 = function (match) {
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
var argument2 = function () {
 callbackArguments.push(arguments) 

    return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
};
var argument3 = r_0;
var argument4 = function (e) {
 callbackArguments.push(arguments) 

    return e.refKey || e.key;
};
var argument5 = "";
var argument6 = function (id) {
 callbackArguments.push(arguments) 

    return attributes.as().find(id);
};
var argument7 = null;
var argument8 = 2.2233507087602223e+307;
var base_0 = ["oY",783,-100,122,"6","Nw6Y"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["oY",783,-100,122,"6","Nw6Y"]
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
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test551.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)