





var callbackArguments = [];
var argument1 = function (field) {
 callbackArguments.push(arguments) 

    return formatValue(row[field]);
};
var argument2 = function () {
 callbackArguments.push(arguments) 

    return $(this).outerWidth(true);
};
var argument3 = null;
var argument4 = "Z";
var argument5 = function (i, elem) {
 callbackArguments.push(arguments) 

    var val = jQuery(this).val();
    return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function (val, i) {
        return {
            name: elem.name,
            value: val
        };
    }) : {
        name: elem.name,
        value: val
    };
};
var argument6 = true;
var argument7 = true;
var argument8 = function () {
 callbackArguments.push(arguments) 

    this.end = getElementStyles(this.el[0]);
    this.diff = styleDifference(this.start, this.end);
    return this;
};
var argument9 = null;
var base_0 = ["-Sx1,","iggcZ-","&",",","A#","k"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["-Sx1,","iggcZ-","&",",","A#","k"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["-Sx1,","iggcZ-","&",",","A#","k"]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["-Sx1,","iggcZ-","&",",","A#","k"]
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
require("fs").writeFileSync("./experiments/map/mapMined/test661.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)