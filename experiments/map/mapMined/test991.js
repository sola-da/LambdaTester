





var callbackArguments = [];
var argument1 = function (el) {
 callbackArguments.push(arguments) 

    if (el) {
        var value = parseInt(el.slice(0, 2)) || 0;
        switch (el[el.length - 1]) {
        case 'h':
            value = value * 3600;
            break;
        case 'm':
            value = value * 60;
            break;
        }
        ;
        return value;
    }
    return 0;
};
var argument2 = 3.1592925304343186e+307;
var argument3 = function () {
 callbackArguments.push(arguments) 

    return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
};
var argument4 = false;
var argument5 = {"100":"5","F":""};
var argument6 = function (i) {
 callbackArguments.push(arguments) 

    return 'stride[' + i + ']';
};
var argument7 = r_1;
var argument8 = ["HL","[Je7t"];
var argument9 = function (node) {
 callbackArguments.push(arguments) 

    if ((node = node.parentNode) && node !== document && ancestors.indexOf(node) < 0) {
        ancestors.push(node);
        return node;
    }
};
var argument10 = r_2;
var base_0 = ["T","^"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapMined/test991.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)