





var callbackArguments = [];
var argument1 = function (a) {
 callbackArguments.push(arguments) 

    return a.toCSS(this.env);
};
var argument2 = function () {
 callbackArguments.push(arguments) 

    var offsetParent = this.offsetParent || docElem;
    while (offsetParent && (!jQuery.nodeName(offsetParent, 'html') && jQuery.css(offsetParent, 'position') === 'static')) {
        offsetParent = offsetParent.offsetParent;
    }
    return offsetParent || docElem;
};
var argument3 = null;
var argument4 = function () {
 callbackArguments.push(arguments) 

    return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
};
var argument5 = null;
var argument6 = false;
var argument7 = function (x, i) {
 callbackArguments.push(arguments) 

    var result = selector.call(thisArg, x, i, source);
    isPromise(result) && (result = observableFromPromise(result));
    (Array.isArray(result) || isIterable(result)) && (result = observableFrom(result));
    return result;
};
var argument8 = null;
var argument9 = r_3;
var base_0 = [242]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242]
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
require("fs").writeFileSync("./experiments/map/mapMined/test68.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)