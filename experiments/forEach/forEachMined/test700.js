





var callbackArguments = [];
var argument1 = function (file) {
 callbackArguments.push(arguments) 

    var key = path.basename(file, '.json');
    data[key] = require(file);
};
var argument2 = 1.6659446165977058e+307;
var argument3 = false;
var argument4 = function (target) {
 callbackArguments.push(arguments) 

    target.set('translateToLanguage', newL[0].locale);
};
var argument5 = {"5.151110242844842e+307":"","8.22334750365332e+307":823};
var argument6 = function (data) {
 callbackArguments.push(arguments) 

    $.fn[data.name] = function () {
        var elems = [];
        this.each(function () {
            var shadowData = elementData(this, 'shadowData');
            var elem = shadowData && shadowData[data.prop] || this;
            if ($.inArray(elem, elems) == -1) {
                elems.push(elem);
            }
        });
        return this.pushStack(elems);
    };
};
var argument7 = 8.274696976512959e+307;
var argument8 = true;
var argument9 = function (key) {
 callbackArguments.push(arguments) 

    angular.isDefined(attr[key]) && attr.$observe(key, function (newValue) {
        timepicker.$options[key] = dateParser.getTimeForAttribute(key, newValue);
        !isNaN(timepicker.$options[key]) && timepicker.$build();
        validateAgainstMinMaxTime(controller.$dateValue);
    });
};
var base_0 = [627,213,714,705,843]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,213,714,705,843]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,213,714,705,843]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,213,714,705,843]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test700.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)