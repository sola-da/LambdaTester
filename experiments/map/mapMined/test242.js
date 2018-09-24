





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    var offsetParent = this.offsetParent || document.body;
    while (offsetParent && (!rroot.test(offsetParent.nodeName) && jQuery.css(offsetParent, 'position') === 'static')) {
        offsetParent = offsetParent.offsetParent;
    }
    return offsetParent;
};
var argument2 = r_0;
var argument3 = 157;
var argument4 = function (val, key) {
 callbackArguments.push(arguments) 

    return {
        name: key,
        value: val
    };
};
var argument5 = null;
var argument6 = {"1":"","93":"lo","403":-100,"705":1.0135003480084612e+308,"":618,"9.050177264162202e+307":"","1.2271204989851682e+308":969,"1.3762563598095363e+308":"f`d#","7.780138533208252e+306":""};
var argument7 = function (segmentUrl) {
 callbackArguments.push(arguments) 

    return segmentUrl.clone();
};
var argument8 = {};
var argument9 = function (elem, i) {
 callbackArguments.push(arguments) 

    return callback.call(elem, i, elem);
};
var argument10 = null;
var base_0 = [-100,460]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,460]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,460]
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapMined/test242.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)