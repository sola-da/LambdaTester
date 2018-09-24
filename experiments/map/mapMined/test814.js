





var callbackArguments = [];
var argument1 = function (entry) {
 callbackArguments.push(arguments) 

    return (current.added ? '+' : '-') + entry;
};
var argument2 = function () {
 callbackArguments.push(arguments) 

    var parent = this.offsetParent || document.body;
    while (parent && !rootNodeRE.test(parent.nodeName) && $(parent).css('position') == 'static')
        parent = parent.offsetParent;
    return parent;
};
var argument3 = {"":"",">":""};
var argument4 = function (value) {
 callbackArguments.push(arguments) 

    return value == null ? '' : value + '';
};
var argument5 = function (n) {
 callbackArguments.push(arguments) 

    return dojox.fx.toggleClass(n, cssClass, force, args);
};
var argument6 = ["_","S","F5i","H","b","]6!([Ydu","G^","y*+%S","8Z"];
var argument7 = r_2;
var base_0 = [714,969,823,403,595,783,126,655]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,969,823,403,595,783,126,655]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,969,823,403,595,783,126,655]
var r_2= undefined
try {
r_2 = base_2.map(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,969,823,403,595,783,126,655]
var r_3= undefined
try {
r_3 = base_3.map(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test814.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)