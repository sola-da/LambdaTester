





var callbackArguments = [];
var argument1 = function (x) {
 callbackArguments.push(arguments) 

    return x.rev;
};
var argument2 = 618;
var argument3 = {"618":"","714":783,"893":1.084733238720132e+308,"B=5KF=)'lK":4.08232194559938e+307,"1.2586831571396713e+308":242,"":"iE"};
var argument4 = function () {
 callbackArguments.push(arguments) 

    return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
};
var argument5 = {"627":6.847461394243504e+307,"":"","1.5715751892067498e+308":"","<N0":"","8.830621814489701e+307":"+"};
var argument6 = 126;
var argument7 = function (i) {
 callbackArguments.push(arguments) 

    return parseInt(i, 10);
};
var argument8 = null;
var argument9 = false;
var argument10 = function (match) {
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
var base_0 = ["tj+?","o4","Q$x","Rp`$","ypQz","Zb","C","1q^","@SGWZ"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["tj+?","o4","Q$x","Rp`$","ypQz","Zb","C","1q^","@SGWZ"]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument10)
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
require("fs").writeFileSync("./experiments/map/mapMined/test82.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)