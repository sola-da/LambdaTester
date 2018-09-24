





var callbackArguments = [];
var argument1 = function (d, i) {
 callbackArguments.push(arguments) 

    var xKey = getXKey(id), rawX = d[xKey], x = generateTargetX(rawX, id, i);
    if (isCustomX && isCategorized && index === 0 && rawX) {
        if (i === 0) {
            __axis_x_categories = [];
        }
        __axis_x_categories.push(rawX);
    }
    if (typeof d[id] === 'undefined' || c3.data.xs[id].length <= i) {
        x = undefined;
    }
    return {
        x: x,
        value: d[id] !== null && !isNaN(d[id]) ? +d[id] : null,
        id: convertedId
    };
};
var argument2 = null;
var argument3 = [403,126,0,607,0,893,-100,627];
var argument4 = function () {
 callbackArguments.push(arguments) 

    var offsetParent = this.offsetParent || docElem;
    while (offsetParent && (!jQuery.nodeName(offsetParent, 'html') && jQuery.css(offsetParent, 'position') === 'static')) {
        offsetParent = offsetParent.offsetParent;
    }
    return offsetParent || docElem;
};
var argument5 = {"823":"","":"o","1.7731800524018398e+308":"D","B YX":"","w":";G"};
var argument6 = function () {
 callbackArguments.push(arguments) 

    var elem = this;
    while (elem.firstElementChild) {
        elem = elem.firstElementChild;
    }
    return elem;
};
var argument7 = true;
var argument8 = function (x) {
 callbackArguments.push(arguments) 

    return x * OIMO.INV_SCALE;
};
var argument9 = r_0;
var base_0 = [122,"O",242,"{",122,126,"S","F%3","1`L",823]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,"O",242,"{",122,126,"S","F%3","1`L",823]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,"O",242,"{",122,126,"S","F%3","1`L",823]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,"O",242,"{",122,126,"S","F%3","1`L",823]
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test364.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)