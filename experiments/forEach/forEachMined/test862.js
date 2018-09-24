





var callbackArguments = [];
var argument1 = function (file, i) {
 callbackArguments.push(arguments) 

    file.match(/(.)+\.\d+px(\.baseline)*\.png/g).should.have.length(1);
};
var argument2 = "";
var argument3 = false;
var argument4 = function (doc) {
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
var argument5 = r_0;
var argument6 = false;
var argument7 = function (row) {
 callbackArguments.push(arguments) 

    self.compactDocument(row.id, 0, function () {
        count--;
        if (!count) {
            callback();
        }
    });
};
var argument8 = function (entity) {
 callbackArguments.push(arguments) 

    entity.entityAspect.acceptChanges();
};
var argument9 = false;
var base_0 = ["]","L+"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["]","L+"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["]","L+"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["]","L+"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test862.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)