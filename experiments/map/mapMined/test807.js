





var callbackArguments = [];
var argument1 = function (value) {
 callbackArguments.push(arguments) 

    return value == null ? '' : value + '';
};
var argument2 = function (r) {
 callbackArguments.push(arguments) 

    var p = r.cursor;
    var line = session.getLine(p.row);
    var spaceOffset = line.substr(p.column).search(/\S/g);
    if (spaceOffset == -1)
        spaceOffset = 0;
    if (p.column > maxCol)
        maxCol = p.column;
    if (spaceOffset < minSpace)
        minSpace = spaceOffset;
    return spaceOffset;
};
var argument3 = null;
var argument4 = false;
var argument5 = function () {
 callbackArguments.push(arguments) 

    return this.cloneNode(true);
};
var argument6 = r_1;
var argument7 = null;
var argument8 = function () {
 callbackArguments.push(arguments) 

    var offsetParent = this.offsetParent || docElem;
    while (offsetParent && (!jQuery.nodeName(offsetParent, 'html') && jQuery.css(offsetParent, 'position') === 'static')) {
        offsetParent = offsetParent.offsetParent;
    }
    return offsetParent || docElem;
};
var argument9 = "";
var base_0 = [122,82,969,25,213,655,655]
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
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,82,969,25,213,655,655]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,82,969,25,213,655,655]
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
require("fs").writeFileSync("./experiments/map/mapMined/test807.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)