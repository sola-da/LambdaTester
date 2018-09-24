





var callbackArguments = [];
var argument1 = function (docInfo) {
 callbackArguments.push(arguments) 

    var attachments = docInfo.data && docInfo.data._attachments ? Object.keys(docInfo.data._attachments) : [];
    if (!attachments.length) {
        return done();
    }
    function processedAttachment() {
        recv++;
        if (recv === attachments.length) {
            done();
        }
    }
    for (var key in docInfo.data._attachments) {
        preprocessAttachment(docInfo.data._attachments[key], processedAttachment);
    }
};
var argument2 = function (section) {
 callbackArguments.push(arguments) 

    section.style.transition = '';
};
var argument3 = function (fn) {
 callbackArguments.push(arguments) 

    fn.call(element, event);
};
var argument4 = r_0;
var argument5 = ["}0h","R","KI","h","T","x","C"];
var argument6 = function (sample, index, samples) {
 callbackArguments.push(arguments) 

    samples[index] = invertValue - sample;
};
var argument7 = false;
var argument8 = r_3;
var base_0 = ["6"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["6"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["6"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["6"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test743.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)