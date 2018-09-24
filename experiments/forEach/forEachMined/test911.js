





var callbackArguments = [];
var argument1 = function (key) {
 callbackArguments.push(arguments) 

    global[key] = globals[key];
};
var argument2 = null;
var argument3 = true;
var argument4 = function (m) {
 callbackArguments.push(arguments) 

    if (m.$tearDown) {
        m.$tearDown();
    }
};
var argument5 = function (r, i) {
 callbackArguments.push(arguments) 

    var p = r.cursor;
    var l = maxCol - p.column;
    var d = spaceOffsets[i] - minSpace;
    if (l > d)
        session.insert(p, lang.stringRepeat(' ', l - d));
    else
        session.remove(new Range(p.row, p.column, p.row, p.column - l + d));
    r.start.column = r.end.column = maxCol;
    r.start.row = r.end.row = p.row;
    r.cursor = r.end;
};
var argument6 = r_1;
var argument7 = function (task) {
 callbackArguments.push(arguments) 

    result.push('{id: ' + task.id + ', ' + 'time: ' + task.time + '}');
};
var base_0 = [59,655,607,655,59,627,893,-100,460]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,655,607,655,59,627,893,-100,460]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,655,607,655,59,627,893,-100,460]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,655,607,655,59,627,893,-100,460]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test911.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)