





var callbackArguments = [];
var argument1 = function (date) {
 callbackArguments.push(arguments) 

    model.compareThings(date, stuff).should.equal(-1);
    model.compareThings(stuff, date).should.equal(1);
};
var argument2 = "X";
var argument3 = r_0;
var argument4 = function (suite) {
 callbackArguments.push(arguments) 

    mapTOC(suite, obj);
};
var argument5 = false;
var argument6 = [-1,460,0,126,49,595,969,157,705];
var argument7 = function (dimension) {
 callbackArguments.push(arguments) 

    var Dimension = dimension.substr(0, 1).toUpperCase() + dimension.substr(1);
    $.fn['inner' + Dimension] = ioDim(dimension, false);
    $.fn['outer' + Dimension] = ioDim(dimension, true);
};
var argument8 = function (dp) {
 callbackArguments.push(arguments) 

    var pn = dp.name;
    var nv = newValue.getProperty(pn);
    oldValue.setProperty(pn, nv);
};
var argument9 = 1.1265980030122182e+308;
var base_0 = [627,403,1.7976931348623157e+308,126,893]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,403,1.7976931348623157e+308,126,893]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,403,1.7976931348623157e+308,126,893]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,403,1.7976931348623157e+308,126,893]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test745.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)