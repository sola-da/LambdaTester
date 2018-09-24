





var callbackArguments = [];
var argument1 = function (dep) {
 callbackArguments.push(arguments) 

    switch (dep) {
    case 'require':
        return req;
    case 'exports':
        return module.exports;
    case 'module':
        return module;
    default:
        return req(dep);
    }
};
var argument2 = "UR";
var argument3 = function (player) {
 callbackArguments.push(arguments) 

    var result = {};
    var names = player.displayLastCommaFirst.split(', ').reverse();
    result.firstName = names[0].trim();
    result.lastName = (names[1] ? names[1] : '').trim();
    result.playerId = player.personId;
    return result;
};
var argument4 = "";
var argument5 = 7.204608415078851e+307;
var argument6 = function (edge) {
 callbackArguments.push(arguments) 

    return [
        edge[0] | 0,
        edge[1] | 0
    ];
};
var argument7 = "La";
var argument8 = function () {
 callbackArguments.push(arguments) 

    var $el = $(this);
    var href = $el.data('target') || $el.attr('href');
    var $href = /^#\w/.test(href) && $(href);
    return $href && $href.length && [[
            $href[offsetMethod]().top + (!$.isWindow(self.$scrollElement.get(0)) && self.$scrollElement.scrollTop()),
            href
        ]] || null;
};
var argument9 = null;
var base_0 = [403,460,5e-324,"Qplu",5e-324,"C","c",403,"Bq;$"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,460,5e-324,"Qplu",5e-324,"C","c",403,"Bq;$"]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,460,5e-324,"Qplu",5e-324,"C","c",403,"Bq;$"]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
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
require("fs").writeFileSync("./experiments/map/mapMined/test581.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)