





var callbackArguments = [];
var argument1 = function (element) {
 callbackArguments.push(arguments) 

    element = angular.element(element);
    var data = element.data(NG_ANIMATE_STATE);
    if (data && data.active) {
        forEach(data.active, function (runner) {
            runner.cancel();
        });
    }
};
var argument2 = null;
var argument3 = function (r, i) {
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
var argument4 = null;
var argument5 = r_0;
var argument6 = function (e) {
 callbackArguments.push(arguments) 

    e.entityAspect.rejectChanges();
};
var argument7 = r_2;
var argument8 = r_0;
var argument9 = function (axis) {
 callbackArguments.push(arguments) 

    var axisKey = vars[axis].value;
    if (requirements.indexOf(axis) >= 0 && axisKey && vars[axis].scale.value === 'continuous') {
        exceptions.push(axisKey);
        nestedData.key(function (d) {
            return fetchValue(vars, d, axisKey);
        });
    }
};
var argument10 = true;
var argument11 = null;
var base_0 = ["<","r8","x2zw>IWn","jL","JSr}","X","f",">",":","%"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["<","r8","x2zw>IWn","jL","JSr}","X","f",">",":","%"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["<","r8","x2zw>IWn","jL","JSr}","X","f",">",":","%"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["<","r8","x2zw>IWn","jL","JSr}","X","f",">",":","%"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test753.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)