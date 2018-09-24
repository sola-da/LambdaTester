





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    console.log(d.points);
};
var argument2 = function (c) {
 callbackArguments.push(arguments) 

    var source = c[vars.edges.source], target = c[vars.edges.target];
    var claim = target[vars.id.value] == primaryId ? source : target;
    claimed.push(claim[vars.id.value]);
};
var argument3 = true;
var argument4 = function (arg, i) {
 callbackArguments.push(arguments) 

    if (utils.messageName(arg) == 'ArrayBuffer') {
        ret.push({
            'CDVType': 'ArrayBuffer',
            'data': base64.fromArrayBuffer(arg)
        });
    } else {
        ret.push(arg);
    }
};
var argument5 = function (key) {
 callbackArguments.push(arguments) 

    internalValues[key] = defaults[key];
    Object.defineProperty(values, key, {
        get: function () {
            return internalValues[key];
        },
        configurable: false,
        enumerable: true
    });
};
var argument6 = true;
var base_0 = [607,242,1.7976931348623157e+308,122,893,82,1.7976931348623157e+308,5e-324]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,242,1.7976931348623157e+308,122,893,82,1.7976931348623157e+308,5e-324]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,242,1.7976931348623157e+308,122,893,82,1.7976931348623157e+308,5e-324]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,242,1.7976931348623157e+308,122,893,82,1.7976931348623157e+308,5e-324]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test452.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)