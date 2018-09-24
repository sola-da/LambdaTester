





var callbackArguments = [];
var argument1 = function (id) {
 callbackArguments.push(arguments) 

    var el = _$(id);
    if (el)
        el.innerHTML = '';
};
var argument2 = "";
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
var argument4 = [-1,714];
var argument5 = null;
var argument6 = function (t) {
 callbackArguments.push(arguments) 

    if (t && funct[t.value] === 'const') {
        error('E013', t, t.value);
    }
};
var argument7 = function (itemData) {
 callbackArguments.push(arguments) 

    var itemScene = groupScene.createItem({ source: itemData }), itemValue = axis.domainItemValue(itemData);
    itemScene.color = colorScale(itemValue);
};
var argument8 = null;
var argument9 = null;
var base_0 = [242,100,627,-100,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,100,627,-100,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,100,627,-100,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,100,627,-100,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test26.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)