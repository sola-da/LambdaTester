





var callbackArguments = [];
var argument1 = function (elem, i) {
 callbackArguments.push(arguments) 

    return callback.call(elem, i, elem);
};
var argument2 = null;
var argument3 = function () {
 callbackArguments.push(arguments) 

    var offsetParent = this.offsetParent || docElem;
    while (offsetParent && (!jQuery.nodeName(offsetParent, 'html') && jQuery.css(offsetParent, 'position') === 'static')) {
        offsetParent = offsetParent.offsetParent;
    }
    return offsetParent || docElem;
};
var argument4 = "";
var argument5 = false;
var argument6 = function (obj) {
 callbackArguments.push(arguments) 

    find_keys(obj, 0, {});
    return obj;
};
var argument7 = function (stop) {
 callbackArguments.push(arguments) 

    return Color(stop[1]);
};
var base_0 = ["#B%T>","]ID ","%","#Qin","2"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["#B%T>","]ID ","%","#Qin","2"]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["#B%T>","]ID ","%","#Qin","2"]
var r_2= undefined
try {
r_2 = base_2.map(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["#B%T>","]ID ","%","#Qin","2"]
var r_3= undefined
try {
r_3 = base_3.map(argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test894.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)