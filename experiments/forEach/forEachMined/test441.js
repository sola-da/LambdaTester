





var callbackArguments = [];
var argument1 = function (col) {
 callbackArguments.push(arguments) 

    if (!col.name.match(/\$/)) {
        name = col.name.match(/(\w+\.)(.*)/)[2];
        collections.push(name);
    }
};
var argument2 = function (axis) {
 callbackArguments.push(arguments) 

    this._axisSetScaleChartLevel[axis.message] & chartLevel && axis.isBound() && this._setAxisScale(axis, chartLevel);
};
var argument3 = function (handler) {
 callbackArguments.push(arguments) 

    handler.apply(this, args);
};
var argument4 = r_0;
var argument5 = "7";
var argument6 = function (name) {
 callbackArguments.push(arguments) 

    wsWidgetProto[name] = function (val, force) {
        if (!this._init || force || val !== this.options[name]) {
            this.element.prop(name, this.formatValue(val));
            this.options[name] = val;
            this._propertyChange(name);
            this.mirrorValidity();
        }
    };
};
var argument7 = true;
var argument8 = "0,";
var base_0 = [893,893,969,460,59,607,705,843,49,893]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,893,969,460,59,607,705,843,49,893]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,893,969,460,59,607,705,843,49,893]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,893,969,460,59,607,705,843,49,893]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test441.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)