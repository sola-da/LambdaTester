





var callbackArguments = [];
var argument1 = function (c) {
 callbackArguments.push(arguments) 

    return scaled(c, 255);
};
var argument2 = function () {
 callbackArguments.push(arguments) 

    var offsetParent = this.offsetParent || document.body;
    while (offsetParent && (!rroot.test(offsetParent.nodeName) && jQuery.css(offsetParent, 'position') === 'static')) {
        offsetParent = offsetParent.offsetParent;
    }
    return offsetParent;
};
var argument3 = null;
var argument4 = function (m) {
 callbackArguments.push(arguments) 

    return new L.LatLng(m.startPoint.lat, m.startPoint.lng);
};
var argument5 = null;
var argument6 = null;
var argument7 = function (e) {
 callbackArguments.push(arguments) 

    return e === prevKey ? key : e;
};
var argument8 = r_3;
var base_0 = [59,403,618,-1,126,242]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,403,618,-1,126,242]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,403,618,-1,126,242]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,403,618,-1,126,242]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test907.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)