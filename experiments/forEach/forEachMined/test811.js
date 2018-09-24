





var callbackArguments = [];
var argument1 = function (e) {
 callbackArguments.push(arguments) 

    e.subdivide();
};
var argument2 = null;
var argument3 = function (doc) {
 callbackArguments.push(arguments) 

    if (returnValue.cancelled) {
        return completeReplication();
    }
    if (doc.ok) {
        result.docs_read++;
        currentBatch.pendingRevs++;
        currentBatch.docs.push(doc.ok);
        delete diffs[doc.ok._id];
    }
};
var argument4 = false;
var argument5 = function (fk, i) {
 callbackArguments.push(arguments) 

    childEntity.setProperty(fk, parentEntity.getProperty(pks[i].name));
};
var argument6 = null;
var argument7 = function (aTelVariant) {
 callbackArguments.push(arguments) 

    assert.equal(index.byTel[aTelVariant], MockFbFriendData.uid);
};
var argument8 = r_0;
var argument9 = "s";
var base_0 = [-100,607,969,627,0,25,59]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,607,969,627,0,25,59]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,607,969,627,0,25,59]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,607,969,627,0,25,59]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test811.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)