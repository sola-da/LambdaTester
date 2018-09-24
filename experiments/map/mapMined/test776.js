





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    var e = t(this);
    return {
        el: e,
        start: i(this)
    };
};
var argument2 = [25,"G"];
var argument3 = r_0;
var argument4 = function (dimName) {
 callbackArguments.push(arguments) 

    return atoms[dimName].key;
};
var argument5 = "sd";
var argument6 = function () {
 callbackArguments.push(arguments) 

    var offsetParent = this.offsetParent || docElem;
    while (offsetParent && (!jQuery.nodeName(offsetParent, 'html') && jQuery.css(offsetParent, 'position') === 'static')) {
        offsetParent = offsetParent.offsetParent;
    }
    return offsetParent || docElem;
};
var argument7 = {"705":7.786522949960296e+307,"893":7.240280692924666e+307,"969":"BK7","":6.938448406309804e+307,"1.3947812539337836e+308":"M","1.0821041346426643e+308":655,"1.30623148789356e+308":"`Ei","4.3134993151644504e+306":"R","1.2565065491335115e+308":627,"1.4528813035371673e+308":5.246456772914463e+307};
var argument8 = function (c) {
 callbackArguments.push(arguments) 

    return pv.color(c);
};
var base_0 = [25,213,5e-324,242,242]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,213,5e-324,242,242]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,213,5e-324,242,242]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,213,5e-324,242,242]
var r_3= undefined
try {
r_3 = base_3.map(argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test776.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)