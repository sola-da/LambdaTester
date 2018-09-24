





var callbackArguments = [];
var argument1 = function (o) {
 callbackArguments.push(arguments) 

    var obj = {
            'id': o,
            'text': vars.format.value(o)
        };
    data.push(obj);
};
var argument2 = function (cp) {
 callbackArguments.push(arguments) 

    var ctInstance = instance.getProperty(cp.name);
    if (Array.isArray(ctInstance)) {
        ctInstance.forEach(function (ctInst) {
            cp.dataType._initializeInstance(ctInst);
        });
    } else {
        cp.dataType._initializeInstance(ctInstance);
    }
};
var argument3 = {"157":714,"705":100,"1.7080655697317329e+308":122,"":82,"_":1.5146125140865533e+308,"3.2789088158878554e+307":"","YD":1.595511630167922e+307};
var argument4 = false;
var argument5 = function (data) {
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
var argument6 = {"126":1.214522557021266e+308,"843":714,"":1.1985050344457018e+308};
var argument7 = function (res) {
 callbackArguments.push(arguments) 

    imports_built.push(res.build(nesting, async));
};
var argument8 = "a";
var base_0 = [607,460,"Ic"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,460,"Ic"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,460,"Ic"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,460,"Ic"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test109.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)