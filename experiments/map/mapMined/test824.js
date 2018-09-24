





var callbackArguments = [];
var argument1 = function (item) {
 callbackArguments.push(arguments) 

    return item.book.dayLimit;
};
var argument2 = null;
var argument3 = function (v) {
 callbackArguments.push(arguments) 

    if (Array.isArray(v)) {
        defs.apply(that, v);
    } else {
        defs(v);
    }
};
var argument4 = null;
var argument5 = function () {
 callbackArguments.push(arguments) 

    var elem = this;
    while (elem.firstChild && elem.firstChild.nodeType === 1) {
        elem = elem.firstChild;
    }
    return elem;
};
var argument6 = true;
var argument7 = r_1;
var argument8 = function (path) {
 callbackArguments.push(arguments) 

    return 'assets/' + path;
};
var argument9 = null;
var argument10 = r_0;
var base_0 = [213,213,969]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,213,969]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,213,969]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapMined/test824.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)