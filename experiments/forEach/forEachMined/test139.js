





var callbackArguments = [];
var argument1 = function (row) {
 callbackArguments.push(arguments) 

    if (row.doc && !row.deleted && row.value.rev.slice(0, 2) === '1-' && (!row.doc._attachments || Object.keys(row.doc._attachments).length === 0)) {
        result.docs_read++;
        currentBatch.pendingRevs++;
        currentBatch.docs.push(row.doc);
        delete currentBatch.diffs[row.id];
    }
};
var argument2 = {"0":1.6817615589410406e+308,"157":"","627":"","":"","1.7976931348623157e+308":"|","6.039883032163697e+307":893,"]}":"H","1.3742651775814065e+308":122,"2.530687348618865e+307":""};
var argument3 = null;
var argument4 = function (c) {
 callbackArguments.push(arguments) 

    if (c in map)
        options[map[c]] = true;
    else
        error('option not recognized: ' + c);
};
var argument5 = function (value) {
 callbackArguments.push(arguments) 

    result[++index] = (isFunc ? methodName : value[methodName]).apply(value, args);
};
var argument6 = 3.1952851243469343e+307;
var argument7 = false;
var argument8 = function (r, i) {
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
var argument9 = 126;
var argument10 = ["V]E","E","k"];
var base_0 = [627,213]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,213]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,213]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,213]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test139.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)