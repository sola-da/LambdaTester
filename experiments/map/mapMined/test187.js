





var callbackArguments = [];
var argument1 = function (t, e) {
 callbackArguments.push(arguments) 

    return null == t ? e > 2 ? 1 : 0 : t;
};
var argument2 = function (a) {
 callbackArguments.push(arguments) 

    return jQuery.find(t, a);
};
var argument3 = function () {
 callbackArguments.push(arguments) 

    var $el = $(this);
    var href = $el.data('target') || $el.attr('href');
    var $href = /^#\w/.test(href) && $(href);
    return $href && $href.length && [[
            $href[offsetMethod]().top + (!$.isWindow(self.$scrollElement.get(0)) && self.$scrollElement.scrollTop()),
            href
        ]] || null;
};
var argument4 = null;
var argument5 = r_0;
var argument6 = function () {
 callbackArguments.push(arguments) 

    return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
};
var argument7 = r_0;
var argument8 = null;
var base_0 = [893,595,122,59,-1]
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
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
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
require("fs").writeFileSync("./experiments/map/mapMined/test187.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)