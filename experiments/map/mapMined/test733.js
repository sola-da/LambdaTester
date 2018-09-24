





var callbackArguments = [];
var argument1 = function (id) {
 callbackArguments.push(arguments) 

    return attributes.as().find(id);
};
var argument2 = function (r) {
 callbackArguments.push(arguments) 

    var r1 = r.clone();
    r1.isBackwards = r.cursor == r.start;
    return r1;
};
var argument3 = function (polygon, i) {
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
var argument4 = r_1;
var argument5 = true;
var argument6 = function (n, j) {
 callbackArguments.push(arguments) 

    if ($.inArray(n, regrefs[k]) >= 0)
        i++;
    if ($.inArray(n, regrefs[k]) >= 0 && i > 1) {
        hashs2.splice(hashs2.indexOf(n), 1);
    }
};
var base_0 = [403,783]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,783]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,783]
var r_2= undefined
try {
r_2 = base_2.map(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,783]
var r_3= undefined
try {
r_3 = base_3.map(argument6)
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
require("fs").writeFileSync("./experiments/map/mapMined/test733.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)