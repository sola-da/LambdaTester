





var callbackArguments = [];
var argument1 = function (el) {
 callbackArguments.push(arguments) 

    return el[0];
};
var argument2 = null;
var argument3 = ["7","OJ"];
var argument4 = function (pos) {
 callbackArguments.push(arguments) 

    if (index > pos) {
        return pos;
    }
    if (length >= 0) {
        return pos + length;
    } else {
        return Math.max(index, pos + length);
    }
};
var argument5 = null;
var argument6 = function () {
 callbackArguments.push(arguments) 

    var elements = jQuery.prop(this, 'elements');
    return elements ? jQuery.makeArray(elements) : this;
};
var argument7 = {"":843,"8.017633214005706e+307":"","T;":1.0649488299276588e+308};
var argument8 = [82];
var argument9 = function (elem) {
 callbackArguments.push(arguments) 

    return [
        elem.nextSibling,
        elem.parentNode
    ];
};
var base_0 = [714,59,893,"t","H5>*m","Z",59,126,0]
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
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,59,893,"t","H5>*m","Z",59,126,0]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,59,893,"t","H5>*m","Z",59,126,0]
var r_3= undefined
try {
r_3 = base_3.map(argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test270.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)