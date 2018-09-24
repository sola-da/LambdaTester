





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
var argument2 = true;
var argument3 = function (c) {
 callbackArguments.push(arguments) 

    return Math.round(c);
};
var argument4 = null;
var argument5 = function (val) {
 callbackArguments.push(arguments) 

    return {
        name: elem.name,
        value: val.replace(rCRLF, '\r\n')
    };
};
var argument6 = r_1;
var argument7 = r_1;
var argument8 = function (e) {
 callbackArguments.push(arguments) 

    return '<li> error importing <code>' + e + '</code></li>';
};
var base_0 = [-100,893,595,595,627,213,893]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,893,595,595,627,213,893]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,893,595,595,627,213,893]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
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
require("fs").writeFileSync("./experiments/map/mapMined/test77.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)