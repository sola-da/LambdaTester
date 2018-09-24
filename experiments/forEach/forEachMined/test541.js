





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
var argument2 = false;
var argument3 = {"49":";","126":"","618":"0by ","655":403,"":627,"8.426904267813549e+307":242,"+s+CC":"","Y":1.6969138830306937e+308,"`Op":893};
var argument4 = function (d) {
 callbackArguments.push(arguments) 

    assert.notStrictEqual(d, undefined);
    assert.notStrictEqual(d.cluster, undefined);
    assert.strictEqual(d.cluster.length, 1);
    singlet.forEach(function (e) {
        if (d !== e) {
            assert.ok(spec.metric(d, e) > spec.clusterDistance);
        }
    });
};
var argument5 = function (schedule) {
 callbackArguments.push(arguments) 

    console.log(schedule + ',' + scheduledCounts[schedule]);
};
var argument6 = function (axis) {
 callbackArguments.push(arguments) 

    def.hasOwn(this.axes, axis.id) || this._addAxis(axis);
};
var argument7 = false;
var base_0 = [-1,-100]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,-100]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,-100]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,-100]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test541.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)