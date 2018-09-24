





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    var offsetParent = this.offsetParent || document.documentElement;
    while (offsetParent && (!jQuery.nodeName(offsetParent, 'html') && jQuery.css(offsetParent, 'position') === 'static')) {
        offsetParent = offsetParent.offsetParent;
    }
    return offsetParent || document.documentElement;
};
var argument2 = null;
var argument3 = function (f) {
 callbackArguments.push(arguments) 

    return f[1];
};
var argument4 = true;
var argument5 = "1";
var argument6 = function (item) {
 callbackArguments.push(arguments) 

    item['title'] = item['name'];
    return item;
};
var argument7 = null;
var argument8 = function (elem, i) {
 callbackArguments.push(arguments) 

    return callback.call(elem, elem, i);
};
var argument9 = ["P!","a{","wim","]6m","?R"];
var base_0 = [714,242]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,242]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,242]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,242]
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
require("fs").writeFileSync("./experiments/map/mapMined/test123.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)