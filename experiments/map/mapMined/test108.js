





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    return $(this).button('widget')[0];
};
var argument2 = function (touch) {
 callbackArguments.push(arguments) 

    var point = d3_svg_mousePoint(container, touch);
    point.identifier = touch.identifier;
    return point;
};
var argument3 = "";
var argument4 = true;
var argument5 = function (c) {
 callbackArguments.push(arguments) 

    return superscript[c];
};
var argument6 = true;
var argument7 = function (i) {
 callbackArguments.push(arguments) 

    return 'c' + i + '=this._stride' + i;
};
var base_0 = [",","N*1l"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [",","N*1l"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [",","N*1l"]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [",","N*1l"]
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
require("fs").writeFileSync("./experiments/map/mapMined/test108.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)