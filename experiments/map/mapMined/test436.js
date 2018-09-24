





var callbackArguments = [];
var argument1 = function (li) {
 callbackArguments.push(arguments) 

    return that.tabs.index(li);
};
var argument2 = null;
var argument3 = null;
var argument4 = function () {
 callbackArguments.push(arguments) 

    var $el = $(this);
    var href = $el.data('target') || $el.attr('href');
    var $href = /^#./.test(href) && $(href);
    return $href && $href.length && $href.is(':visible') && [[
            $href[offsetMethod]().top + offsetBase,
            href
        ]] || null;
};
var argument5 = function (instr, i) {
 callbackArguments.push(arguments) 

    return pad(String(i)) + ': ' + instr.toString();
};
var argument6 = function (pos) {
 callbackArguments.push(arguments) 

    if (index > pos) {
        return pos;
    }
    if (length >= 0) {
        return pos + length;
    } else {
        return Math.max(index, pos + length);
    }
};
var argument7 = 823;
var base_0 = ["yR",")","f","tC",";","D^","*"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["yR",")","f","tC",";","D^","*"]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["yR",")","f","tC",";","D^","*"]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["yR",")","f","tC",";","D^","*"]
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test436.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)