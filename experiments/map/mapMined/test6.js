





var callbackArguments = [];
var argument1 = function (key) {
 callbackArguments.push(arguments) 

    if (key[0] === '(')
        return;
    funct['(blockscope)'].unshadow(key);
};
var argument2 = function (r) {
 callbackArguments.push(arguments) 

    var labels = options.labels;
    var units = options.units;
    return {
        units: r[units],
        labels: r[labels],
        hexcolor: r.hexcolor
    };
};
var argument3 = function () {
 callbackArguments.push(arguments) 

    var offsetParent = this.offsetParent || docElem;
    while (offsetParent && (!jQuery.nodeName(offsetParent, 'html') && jQuery.css(offsetParent, 'position') === 'static')) {
        offsetParent = offsetParent.offsetParent;
    }
    return offsetParent || docElem;
};
var argument4 = function (i) {
 callbackArguments.push(arguments) 

    i = Math.round(i);
    i = (i > 255 ? 255 : i < 0 ? 0 : i).toString(16);
    return i.length === 1 ? '0' + i : i;
};
var argument5 = null;
var argument6 = ["^","3L","c","i","37tur",";","OV","z","9"];
var base_0 = [627,100,655,627]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,100,655,627]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,100,655,627]
var r_2= undefined
try {
r_2 = base_2.map(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,100,655,627]
var r_3= undefined
try {
r_3 = base_3.map(argument4,argument5,argument6)
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
require("fs").writeFileSync("./experiments/map/mapMined/test6.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)