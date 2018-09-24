





var callbackArguments = [];
var argument1 = function (edge) {
 callbackArguments.push(arguments) 

    minY = Math.min(minY, edge[Y0]);
    maxY = Math.max(maxY, edge[Y1]);
};
var argument2 = function (anchor) {
 callbackArguments.push(arguments) 

    anchor.markerId = session.addMarker(new Range(anchor.row, anchor.column, anchor.row, anchor.column + _self.length), _self.othersClass, null, false);
    anchor.on('change', function (event) {
        session.removeMarker(anchor.markerId);
        anchor.markerId = session.addMarker(new Range(event.value.row, event.value.column, event.value.row, event.value.column + _self.length), _self.othersClass, null, false);
    });
};
var argument3 = null;
var argument4 = false;
var argument5 = function (property) {
 callbackArguments.push(arguments) 

    var fn = $.fn[property];
    $.fn[property] = function () {
        var ret = fn.apply(this, arguments);
        ret.prevObject = this;
        return ret;
    };
};
var argument6 = function (value, prop) {
 callbackArguments.push(arguments) 

    extended[prop] = options[prop];
};
var argument7 = null;
var argument8 = true;
var base_0 = [595,"R_<W","5{",823,157,"v","$z"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,"R_<W","5{",823,157,"v","$z"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,"R_<W","5{",823,157,"v","$z"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,"R_<W","5{",823,157,"v","$z"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test427.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)