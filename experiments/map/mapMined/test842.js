





var callbackArguments = [];
var argument1 = function (polygon, i) {
 callbackArguments.push(arguments) 

    var cx = points[i][0], cy = points[i][1], angle = polygon.map(function (v) {
            return Math.atan2(v[0] - cx, v[1] - cy);
        }), order = d3.range(polygon.length).sort(function (a, b) {
            return angle[a] - angle[b];
        });
    return order.filter(function (d, i) {
        return !i || angle[d] - angle[order[i - 1]] > ε;
    }).map(function (d) {
        return polygon[d];
    });
};
var argument2 = null;
var argument3 = null;
var argument4 = function () {
 callbackArguments.push(arguments) 

    this.end = getElementStyles(this.el[0]);
    this.diff = styleDifference(this.start, this.end);
    return this;
};
var argument5 = null;
var argument6 = function (i) {
 callbackArguments.push(arguments) 

    return start + step * i;
};
var argument7 = null;
var argument8 = function (x) {
 callbackArguments.push(arguments) 

    return church_ast_to_string(x);
};
var base_0 = ["^wSIk",")","ee","d=-"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["^wSIk",")","ee","d=-"]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["^wSIk",")","ee","d=-"]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["^wSIk",")","ee","d=-"]
var r_3= undefined
try {
r_3 = base_3.map(argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test842.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)