





var callbackArguments = [];
var argument1 = function (item) {
 callbackArguments.push(arguments) 

    var entry;
    if (item.webkitGetAsEntry) {
        entry = item.webkitGetAsEntry();
        if (entry) {
            entry._file = item.getAsFile();
        }
        return entry;
    }
    return item.getAsEntry();
};
var argument2 = null;
var argument3 = function () {
 callbackArguments.push(arguments) 

    return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
};
var argument4 = 2.732400995134863e+307;
var argument5 = null;
var argument6 = function (elem, i) {
 callbackArguments.push(arguments) 

    return callback.call(elem, i, elem);
};
var argument7 = function (d) {
 callbackArguments.push(arguments) 

    return d.map(function (d) {
        var data = d.__data__;
        return data.data ? data.data : data;
    });
};
var argument8 = false;
var base_0 = ["S","x-","Xk8Tb6","PsR<&p","q","a$5Yc","E","-","Oa"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["S","x-","Xk8Tb6","PsR<&p","q","a$5Yc","E","-","Oa"]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["S","x-","Xk8Tb6","PsR<&p","q","a$5Yc","E","-","Oa"]
var r_2= undefined
try {
r_2 = base_2.map(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["S","x-","Xk8Tb6","PsR<&p","q","a$5Yc","E","-","Oa"]
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
require("fs").writeFileSync("./experiments/map/mapMined/test992.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)