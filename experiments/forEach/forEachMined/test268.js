





var callbackArguments = [];
var argument1 = function (data) {
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
var argument2 = r_0;
var argument3 = null;
var argument4 = function (cancelFn) {
 callbackArguments.push(arguments) 

    (cancelFn || noop)(true);
};
var argument5 = function (name) {
 callbackArguments.push(arguments) 

    el.classList.add(name);
};
var argument6 = r_0;
var argument7 = 1.680706443648388e+308;
var argument8 = function (fn) {
 callbackArguments.push(arguments) 

    if (!fn.only || (fn.only = 'prop' && type == 'prop') || fn.only == 'attr' && type != 'prop') {
        fn.call(elem, value, boolValue, isVal ? 'val' : curType, type);
    }
};
var base_0 = [403,655,1.7976931348623157e+308,783,403]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,655,1.7976931348623157e+308,783,403]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,655,1.7976931348623157e+308,783,403]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,655,1.7976931348623157e+308,783,403]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test268.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)