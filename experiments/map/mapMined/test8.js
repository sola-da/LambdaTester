





var callbackArguments = [];
var argument1 = function (cat) {
 callbackArguments.push(arguments) 

    var item2 = {}, elements = cat.split('__');
    item2.id = cat;
    item2.name = elements[0];
    item2.unit = elements.length > 1 ? elements[1] : '';
    return item2;
};
var argument2 = {"1.035347126226249e+308":1.39506954785199e+308,"":"|","1.3463009577694051e+308":"","!":"","8.143137626455915e+307":1.2260543441987487e+308,"1.1266870669512564e+308":"M","x":0,"B":"","1.366334416165349e+306":2.009102217549682e+307};
var argument3 = function () {
 callbackArguments.push(arguments) 

    var offsetParent = this.offsetParent || document.body;
    while (offsetParent && (!rroot.test(offsetParent.nodeName) && jQuery.css(offsetParent, 'position') === 'static')) {
        offsetParent = offsetParent.offsetParent;
    }
    return offsetParent;
};
var argument4 = function (v) {
 callbackArguments.push(arguments) 

    return v.eval(env);
};
var argument5 = function (x) {
 callbackArguments.push(arguments) 

    return x.charCodeAt(0);
};
var argument6 = null;
var base_0 = [618,627,618,783,-1,157,126,714,157]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,627,618,783,-1,157,126,714,157]
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,627,618,783,-1,157,126,714,157]
var r_2= undefined
try {
r_2 = base_2.map(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,627,618,783,-1,157,126,714,157]
var r_3= undefined
try {
r_3 = base_3.map(argument5,argument6)
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
require("fs").writeFileSync("./experiments/map/mapMined/test8.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)