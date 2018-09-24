





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    var elements = jQuery.prop(this, 'elements');
    return elements ? jQuery.makeArray(elements) : this;
};
var argument2 = function (r) {
 callbackArguments.push(arguments) 

    var failText = 'OOM';
    if (r.data.timeout)
        failText = 'T/O';
    return [
        path.basename(r.file),
        r.data.mem != null ? r.data.time : failText,
        r.data.mem != null ? r.data.mem.toFixed(2) : failText
    ];
};
var argument3 = r_1;
var argument4 = {"59":1.661288223149329e+308,"655":157,"-100":969,"b":"","9.048929582594475e+307":1.0064300495985859e+307,"-":1.1072290059904184e+307,"5.701087099200098e+307":1.4257664044573817e+308,"8.522853779739655e+307":"<w","1.4425373051354813e+308":1.7976931348623157e+308};
var argument5 = function (key) {
 callbackArguments.push(arguments) 

    return value[key];
};
var argument6 = [82,460,59,-1,843,595,705,122];
var argument7 = r_1;
var argument8 = function (index, element) {
 callbackArguments.push(arguments) 

    return Array.prototype.slice.call(element.parentNode.children).filter(function (child) {
        return child !== element;
    });
};
var argument9 = r_1;
var base_0 = ["T","r","%","R","190","+"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["T","r","%","R","190","+"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["T","r","%","R","190","+"]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["T","r","%","R","190","+"]
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
require("fs").writeFileSync("./experiments/map/mapMined/test801.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)