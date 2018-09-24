





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    return d[id_var] === id;
};
var argument2 = ["z?",460,969,-100,627,25,"[v+m","_?","y"];
var argument3 = function (k) {
 callbackArguments.push(arguments) 

    return !~structs.indexOf(k);
};
var argument4 = false;
var argument5 = null;
var argument6 = function () {
 callbackArguments.push(arguments) 

    for (var i = 0, l = targets.length; i < l; i++) {
        if (jQuery.contains(this, targets[i])) {
            return true;
        }
    }
};
var argument7 = r_0;
var argument8 = function (x) {
 callbackArguments.push(arguments) 

    return !x.next;
};
var argument9 = null;
var base_0 = ["&U<x","X^f","l","$:M",";I","-","I}"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["&U<x","X^f","l","$:M",";I","-","I}"]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["&U<x","X^f","l","$:M",";I","-","I}"]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["&U<x","X^f","l","$:M",";I","-","I}"]
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test823.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)