





var callbackArguments = [];
var argument1 = function (dp) {
 callbackArguments.push(arguments) 

    var val = rawValueFn(rawEntity, dp);
    return parseRawValue(val, dp.dataType);
};
var argument2 = false;
var argument3 = function (n, i) {
 callbackArguments.push(arguments) 

    return filter.call(n, i, nodes, arg);
};
var argument4 = 0;
var argument5 = false;
var argument6 = function () {
 callbackArguments.push(arguments) 

    var offsetParent = this.offsetParent || document.body;
    while (offsetParent && (!rroot.test(offsetParent.nodeName) && jQuery.css(offsetParent, 'position') === 'static')) {
        offsetParent = offsetParent.offsetParent;
    }
    return offsetParent;
};
var argument7 = {"3.384836566400847e+307":"","":-1,"1.8950584054065857e+307":""};
var argument8 = null;
var argument9 = function () {
 callbackArguments.push(arguments) 

    return this.cloneNode(!0);
};
var argument10 = ["30#2!;6R*","Y6h"];
var base_0 = [126,")F","$",5e-324]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,")F","$",5e-324]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,")F","$",5e-324]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,")F","$",5e-324]
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
require("fs").writeFileSync("./experiments/map/mapMined/test103.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)