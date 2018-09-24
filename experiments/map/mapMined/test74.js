





var callbackArguments = [];
var argument1 = function (i) {
 callbackArguments.push(arguments) 

    return 'c' + i;
};
var argument2 = null;
var argument3 = {"3":-100,"bU":""};
var argument4 = function (pipe) {
 callbackArguments.push(arguments) 

    if (_.has(ops, pipe.operator)) {
        var out = new ops[pipe.operator](pipe.options.split(' '));
        return out;
    } else {
        var errStr = 'No such operation: ' + pipe.operator;
        throw errStr;
    }
};
var argument5 = true;
var argument6 = [655,607,607];
var argument7 = function (t) {
 callbackArguments.push(arguments) 

    return t.width;
};
var argument8 = function () {
 callbackArguments.push(arguments) 

    var elem = this;
    while (elem.firstChild && elem.firstChild.nodeType === 1) {
        elem = elem.firstChild;
    }
    return elem;
};
var base_0 = ["$"]
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
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test74.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)