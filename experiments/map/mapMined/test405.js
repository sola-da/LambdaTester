





var callbackArguments = [];
var argument1 = function (value) {
 callbackArguments.push(arguments) 

    return value * 2;
};
var argument2 = null;
var argument3 = null;
var argument4 = function (param) {
 callbackArguments.push(arguments) 

    return param ? decodeURIComponent(param) : null;
};
var argument5 = function (li) {
 callbackArguments.push(arguments) 

    return that.tabs.index(li);
};
var argument6 = function (match) {
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
var argument7 = null;
var base_0 = [705,0,843]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,0,843]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,0,843]
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test405.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)