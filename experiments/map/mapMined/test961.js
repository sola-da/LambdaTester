





var callbackArguments = [];
var argument1 = function (e) {
 callbackArguments.push(arguments) 

    return '<li> error importing <code>' + e + '</code></li>';
};
var argument2 = null;
var argument3 = function (d) {
 callbackArguments.push(arguments) 

    return d.map(function (d) {
        var data = d.__data__;
        return data.data ? data.data : data;
    });
};
var argument4 = true;
var argument5 = function (elem, i) {
 callbackArguments.push(arguments) 

    return callback.call(elem, i, elem);
};
var argument6 = null;
var argument7 = function () {
 callbackArguments.push(arguments) 

    var elements = jQuery.prop(this, 'elements');
    return elements ? jQuery.makeArray(elements) : this;
};
var argument8 = null;
var base_0 = ["V","w","O","l(","hW",";"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["V","w","O","l(","hW",";"]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test961.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)