





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    for (i = 0; i < len; i++) {
        if (jQuery.contains(this, targets[i])) {
            return true;
        }
    }
};
var argument2 = "";
var argument3 = "li";
var argument4 = function (t) {
 callbackArguments.push(arguments) 

    return t;
};
var argument5 = null;
var argument6 = function (e) {
 callbackArguments.push(arguments) 

    return !_isNamedBlankNode(e);
};
var argument7 = r_0;
var argument8 = function () {
 callbackArguments.push(arguments) 

    return /(auto|scroll)/.test($.css(this, 'overflow') + $.css(this, 'overflow-y') + $.css(this, 'overflow-x'));
};
var argument9 = r_0;
var base_0 = ["A{@",";b","AI",100,893,0,893,"B",893]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["A{@",";b","AI",100,893,0,893,"B",893]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["A{@",";b","AI",100,893,0,893,"B",893]
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test314.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)