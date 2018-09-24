





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    var elem = this, isWin = !elem.nodeName || $.inArray(elem.nodeName.toLowerCase(), [
            'iframe',
            '#document',
            'html',
            'body'
        ]) != -1;
    if (!isWin)
        return elem;
    var doc = (elem.contentWindow || elem).document || elem.ownerDocument || elem;
    return /webkit/i.test(navigator.userAgent) || doc.compatMode == 'BackCompat' ? doc.body : doc.documentElement;
};
var argument2 = 403;
var argument3 = null;
var argument4 = function (key) {
 callbackArguments.push(arguments) 

    if (keys.length > colors.length || keys.length <= colors.length) {
        colorIndex = counter % colors.length;
    }
    var h = {
            units: data[key],
            hexcolor: colors[colorIndex]
        };
    h[category] = key;
    counter++;
    colorIndex = counter;
    return h;
};
var argument5 = function () {
 callbackArguments.push(arguments) 

    var elements = jQuery.prop(this, 'elements');
    return elements ? jQuery.makeArray(elements) : this;
};
var argument6 = function () {
 callbackArguments.push(arguments) 

    var elem = this;
    while (elem.firstElementChild) {
        elem = elem.firstElementChild;
    }
    return elem;
};
var argument7 = [122,618,627,969,843];
var base_0 = [823]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823]
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test19.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)