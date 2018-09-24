





var callbackArguments = [];
var argument1 = function (x) {
 callbackArguments.push(arguments) 

    return x.charCodeAt(0);
};
var argument2 = false;
var argument3 = function (atom) {
 callbackArguments.push(arguments) 

    var datum = def.getOwn(datumsBySeriesKey, atom.key);
    return datum ? datum.atoms.value.value : null;
};
var argument4 = true;
var argument5 = r_0;
var argument6 = function () {
 callbackArguments.push(arguments) 

    var offsetParent = this.offsetParent || docElem;
    while (offsetParent && (!jQuery.nodeName(offsetParent, 'html') && jQuery.css(offsetParent, 'position') === 'static')) {
        offsetParent = offsetParent.offsetParent;
    }
    return offsetParent || docElem;
};
var argument7 = r_0;
var argument8 = true;
var argument9 = function () {
 callbackArguments.push(arguments) 

    var styleInfo = this, dfd = $.Deferred(), opts = $.extend({}, o, {
            queue: false,
            complete: function () {
                dfd.resolve(styleInfo);
            }
        });
    this.el.animate(this.diff, opts);
    return dfd.promise();
};
var argument10 = true;
var argument11 = null;
var base_0 = ["tAxt"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["tAxt"]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["tAxt"]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["tAxt"]
var r_3= undefined
try {
r_3 = base_3.map(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/map/mapMined/test566.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)