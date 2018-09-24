





var callbackArguments = [];
var argument1 = function (b) {
 callbackArguments.push(arguments) 

    var tr = resultsTable.insertRow(-1);
    var assignedTo = b.assigned_to.name;
    if (assignedTo === 'nobody') {
        tr.classList.add('unassigned');
    }
    addColumn(tr, versionBadge(b.blocks));
    addColumn(tr, linkBug(b.id));
    addColumn(tr, linkBug(b.id, b.summary));
    addColumn(tr, assignedTo);
    addColumn(tr, b.last_change_time);
};
var argument2 = false;
var argument3 = 3.344462607668472e+307;
var argument4 = function (resp) {
 callbackArguments.push(arguments) 

    if (resp.error)
        return resp.error(err);
};
var argument5 = function (word, idx) {
 callbackArguments.push(arguments) 

    if (!word || word === currentWord)
        return;
    var distance = Math.abs(prefixPos - idx);
    var score = words.length - distance;
    if (wordScores[word]) {
        wordScores[word] = Math.max(score, wordScores[word]);
    } else {
        wordScores[word] = score;
    }
};
var argument6 = null;
var argument7 = ":";
var argument8 = function (k) {
 callbackArguments.push(arguments) 

    rec[k] = recFields[k];
};
var argument9 = ["y uZ","&","]_%","gi","&","]k","g%;","mGM","5[p"];
var base_0 = [82,0,403,49]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,0,403,49]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,0,403,49]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,0,403,49]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test614.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)