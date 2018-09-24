





var callbackArguments = [];
var argument1 = function (key) {
 callbackArguments.push(arguments) 

    return View.dirtyViews[key];
};
var argument2 = "";
var argument3 = {};
var argument4 = function (t, prop) {
 callbackArguments.push(arguments) 

    var filter = Attachments.filters[prop], term = model.get(prop);
    if (!filter)
        return;
    if (term && !this.filters[prop])
        this.filters[prop] = filter;
    else if (!term && this.filters[prop] === filter)
        delete this.filters[prop];
    else
        return;
    return true;
};
var argument5 = "@";
var argument6 = function (guest) {
 callbackArguments.push(arguments) 

    return guest.name.split(' ')[0];
};
var argument7 = 1.5225427665492287e+307;
var argument8 = function (doc, i) {
 callbackArguments.push(arguments) 

    if (doc._id && utils.isLocalId(doc._id)) {
        return doc;
    }
    var newDoc = utils.parseDoc(doc, newEdits);
    newDoc._bulk_seq = i;
    return newDoc;
};
var argument9 = 1.7976931348623157e+308;
var argument10 = "";
var base_0 = ["Y4wZs","!",")M$v","q8","{Z","*1o","F,D"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Y4wZs","!",")M$v","q8","{Z","*1o","F,D"]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Y4wZs","!",")M$v","q8","{Z","*1o","F,D"]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Y4wZs","!",")M$v","q8","{Z","*1o","F,D"]
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapMined/test815.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)