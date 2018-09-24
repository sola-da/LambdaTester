





var callbackArguments = [];
var argument1 = function (id) {
 callbackArguments.push(arguments) 

    withoutFadeIn[id] = false;
    legend.selectAll('.' + CLASS.legendItem + getTargetSelectorSuffix(id)).remove();
    c3.data.targets = c3.data.targets.filter(function (t) {
        return t.id !== id;
    });
};
var argument2 = false;
var argument3 = function (data) {
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
var argument4 = null;
var argument5 = 6.197670619595775e+307;
var argument6 = function (row) {
 callbackArguments.push(arguments) 

    for (var field in row) {
        if (!fieldSet.has(field)) {
            fields.push(fieldSet.add(field));
        }
    }
};
var argument7 = r_0;
var argument8 = function (s) {
 callbackArguments.push(arguments) 

    var evt = s.getAttribute('event') || s.getAttribute('data-dojo-event') || 'postscript', func = parser._functionFromScript(s);
    connect.connect(wc.prototype, evt, func);
};
var argument9 = r_1;
var argument10 = null;
var base_0 = [213,242,1.7976931348623157e+308,893,49,595,-100,595,714]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,242,1.7976931348623157e+308,893,49,595,-100,595,714]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,242,1.7976931348623157e+308,893,49,595,-100,595,714]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,242,1.7976931348623157e+308,893,49,595,-100,595,714]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test621.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)