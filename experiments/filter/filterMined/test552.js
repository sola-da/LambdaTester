





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    var i = 0;
    for (; i < l; i++) {
        if (jQuery.contains(this, targets[i])) {
            return true;
        }
    }
};
var argument2 = null;
var argument3 = null;
var argument4 = function (r) {
 callbackArguments.push(arguments) 

    if (r.cursor.row == row)
        return true;
    row = r.cursor.row;
};
var argument5 = true;
var argument6 = function () {
 callbackArguments.push(arguments) 

    return /(auto|scroll)/.test($.css(this, 'overflow') + $.css(this, 'overflow-y') + $.css(this, 'overflow-x'));
};
var argument7 = null;
var argument8 = function (b) {
 callbackArguments.push(arguments) 

    return block_ids.includes(b.blockID);
};
var argument9 = {"":"s"};
var argument10 = "l";
var base_0 = [618,82,"$",783,"F",-1,"u","pc"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,82,"$",783,"F",-1,"u","pc"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,82,"$",783,"F",-1,"u","pc"]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,82,"$",783,"F",-1,"u","pc"]
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test552.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)