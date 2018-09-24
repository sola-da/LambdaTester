





var callbackArguments = [];
var argument1 = function (pred) {
 callbackArguments.push(arguments) 

    var predVal = pred.visit(context);
    return '(' + predVal + ')';
};
var argument2 = function (el) {
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
var argument3 = function (key) {
 callbackArguments.push(arguments) 

    return View.dirtyViews[key];
};
var argument4 = r_1;
var argument5 = r_0;
var argument6 = function () {
 callbackArguments.push(arguments) 

    var offsetParent = this.offsetParent || docElem;
    while (offsetParent && (!jQuery.nodeName(offsetParent, 'html') && jQuery.css(offsetParent, 'position') === 'static')) {
        offsetParent = offsetParent.offsetParent;
    }
    return offsetParent || docElem;
};
var argument7 = null;
var argument8 = false;
var base_0 = ["I)(","1UmF","ynp","?4:R%","`","j","p","D#","q","v"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["I)(","1UmF","ynp","?4:R%","`","j","p","D#","q","v"]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["I)(","1UmF","ynp","?4:R%","`","j","p","D#","q","v"]
var r_2= undefined
try {
r_2 = base_2.map(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test456.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)