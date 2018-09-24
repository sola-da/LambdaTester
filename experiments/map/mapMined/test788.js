





var callbackArguments = [];
var argument1 = function (p) {
 callbackArguments.push(arguments) 

    if (p.merge === '+') {
        if (lastSpacedGroup.length > 0) {
            spacedGroups.push(toExpression(lastSpacedGroup));
        }
        lastSpacedGroup = [];
    }
    lastSpacedGroup.push(p);
};
var argument2 = null;
var argument3 = function (opt) {
 callbackArguments.push(arguments) 

    return document.id(opt).get('value');
};
var argument4 = {"82":1.6676953628332133e+308,"100":1.2204409718012848e+308,"126":"@4X","157":157,"607":"","969":1.6523855654197865e+308,"":1.3491157320744734e+308,"q0":"","6.823935105045055e+307":"","1.672786168326013e+308":""};
var argument5 = function (x, callback) {
 callbackArguments.push(arguments) 

    iterator(x, function (err, criteria) {
        if (err) {
            callback(err);
        } else {
            callback(null, {
                value: x,
                criteria: criteria
            });
        }
    });
};
var argument6 = function () {
 callbackArguments.push(arguments) 

    return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
};
var base_0 = ["Rw",">","DU$","9","o","e:"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Rw",">","DU$","9","o","e:"]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Rw",">","DU$","9","o","e:"]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Rw",">","DU$","9","o","e:"]
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
require("fs").writeFileSync("./experiments/map/mapMined/test788.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)