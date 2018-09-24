





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    for (i = 0; i < len; i++) {
        if (jQuery.contains(this, targets[i])) {
            return true;
        }
    }
};
var argument2 = function (index) {
 callbackArguments.push(arguments) 

    var element = jQuery(this);
    var change = element.data('gridstring').charAt(0) <= highestRow && element.data('gridstring').charAt(2) <= highestColumn;
    return change;
};
var argument3 = null;
var argument4 = function () {
 callbackArguments.push(arguments) 

    return regex.test($(this).children('a').text());
};
var argument5 = null;
var argument6 = true;
var argument7 = function (c) {
 callbackArguments.push(arguments) 

    leftToFetch--;
    var ret = utils.filterChange(opts)(c);
    if (ret) {
        results.results.push(c);
        utils.call(opts.onChange, c);
    }
    return ret;
};
var argument8 = null;
var base_0 = [655,"HL"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,"HL"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,"HL"]
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,"HL"]
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test560.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)