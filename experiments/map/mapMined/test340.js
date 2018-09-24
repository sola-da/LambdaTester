





var callbackArguments = [];
var argument1 = function (el, i) {
 callbackArguments.push(arguments) 

    return fn.call(el, i, el);
};
var argument2 = true;
var argument3 = function () {
 callbackArguments.push(arguments) 

    var offsetParent = this.offsetParent || document.body;
    while (offsetParent && (!rroot.test(offsetParent.nodeName) && jQuery.css(offsetParent, 'position') === 'static')) {
        offsetParent = offsetParent.offsetParent;
    }
    return offsetParent;
};
var argument4 = {"1.6122634510140385e+308":"|"};
var argument5 = function () {
 callbackArguments.push(arguments) 

    var elements = jQuery.prop(this, 'elements');
    return elements ? jQuery.makeArray(elements) : this;
};
var argument6 = null;
var argument7 = function (elem, i) {
 callbackArguments.push(arguments) 

    return callback.call(elem, i, elem);
};
var argument8 = {"1.2443388288581091e+308":"4","n|":1.7976931348623157e+308};
var argument9 = r_1;
var base_0 = ["t",213,"#","l","5aD|s","2","9","R]`"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["t",213,"#","l","5aD|s","2","9","R]`"]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["t",213,"#","l","5aD|s","2","9","R]`"]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["t",213,"#","l","5aD|s","2","9","R]`"]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test340.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)