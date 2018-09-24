





var callbackArguments = [];
var argument1 = function (line) {
 callbackArguments.push(arguments) 

    return '  ' + line;
};
var argument2 = function () {
 callbackArguments.push(arguments) 

    var offsetParent = this.offsetParent || docElem;
    while (offsetParent && (!jQuery.nodeName(offsetParent, 'html') && jQuery.css(offsetParent, 'position') === 'static')) {
        offsetParent = offsetParent.offsetParent;
    }
    return offsetParent || docElem;
};
var argument3 = false;
var argument4 = function (t, e) {
 callbackArguments.push(arguments) 

    return s.call(t, e, l, f);
};
var argument5 = [5e-324,-1,783,25];
var argument6 = function (chunk) {
 callbackArguments.push(arguments) 

    return chunk.toString(encoding);
};
var argument7 = ["T","9","O8+2E5<","D",";"];
var argument8 = [618,655,122,783];
var base_0 = [100,-100,843,82,969,969,783,-100,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,-100,843,82,969,969,783,-100,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,-100,843,82,969,969,783,-100,1.7976931348623157e+308]
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
require("fs").writeFileSync("./experiments/map/mapMined/test823.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)