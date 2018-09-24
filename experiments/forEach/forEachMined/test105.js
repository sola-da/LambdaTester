





var callbackArguments = [];
var argument1 = function (docInfo) {
 callbackArguments.push(arguments) 

    var attachments = docInfo.data && docInfo.data._attachments ? Object.keys(docInfo.data._attachments) : [];
    if (!attachments.length) {
        return done();
    }
    var recv = 0;
    function attachmentProcessed() {
        recv++;
        if (recv === attachments.length) {
            done();
        }
    }
    for (var key in docInfo.data._attachments) {
        preprocessAttachment(docInfo.data._attachments[key], attachmentProcessed);
    }
};
var argument2 = 122;
var argument3 = null;
var argument4 = function (eventLongname) {
 callbackArguments.push(arguments) 

    doc = _events[eventLongname] || find(data, {
        longname: eventLongname,
        kind: 'event'
    })[0];
    if (doc) {
        if (!doc.listeners) {
            doc.listeners = [listener.longname];
        } else {
            doc.listeners.push(listener.longname);
        }
        _events[eventLongname] = _events[eventLongname] || doc;
    }
};
var argument5 = null;
var argument6 = null;
var argument7 = function (attr) {
 callbackArguments.push(arguments) 

    node.removeAttributeNS(attr.namespaceURI, attr.name);
};
var argument8 = false;
var argument9 = function (field) {
 callbackArguments.push(arguments) 

    if (!field in fields)
        throw new Error('Invalid field "' + field + '"');
    field in fields && initField(this, StructT, field).write(values[field]);
};
var argument10 = r_3;
var base_0 = ["N*1l","1","Z","H","n"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["N*1l","1","Z","H","n"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["N*1l","1","Z","H","n"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["N*1l","1","Z","H","n"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test105.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)