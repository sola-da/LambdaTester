





var callbackArguments = [];
var argument1 = function (edge, i) {
 callbackArguments.push(arguments) 

    var v = vertices[i], cx = v[0], cy = v[1];
    edge.forEach(function (v) {
        v.angle = Math.atan2(v[0] - cx, v[1] - cy);
    });
    edge.sort(function (a, b) {
        return a.angle - b.angle;
    });
    for (var j = 0, m = edge.length - 1; j < m; j++) {
        triangles.push([
            v,
            edge[j],
            edge[j + 1]
        ]);
    }
};
var argument2 = function (item) {
 callbackArguments.push(arguments) 

    var message = fs.absolute(item.file) + ':' + c.colorize(item.line, 'COMMENT');
    if (item['function']) {
        message += ' in ' + c.colorize(item['function'], 'PARAMETER');
    }
    console.error('  ' + message);
};
var argument3 = "vzB|tpI";
var argument4 = function (value) {
 callbackArguments.push(arguments) 

    if (value)
        list.push(trim(value));
};
var argument5 = null;
var argument6 = null;
var argument7 = function (fold) {
 callbackArguments.push(arguments) 

    this.expandFold(fold);
};
var base_0 = [618,460,5e-324,-100,"^","|","#",126,893]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,460,5e-324,-100,"^","|","#",126,893]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,460,5e-324,-100,"^","|","#",126,893]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,460,5e-324,-100,"^","|","#",126,893]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test151.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)