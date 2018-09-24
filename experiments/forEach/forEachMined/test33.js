





var callbackArguments = [];
var argument1 = function (joinObserver) {
 callbackArguments.push(arguments) 

    joinObserver.subscribe();
    group.add(joinObserver);
};
var argument2 = function (element) {
 callbackArguments.push(arguments) 

    if (result.length === 0)
        return result.push(element);
    else {
        if (element[column].valueOf() > result[0][column].valueOf()) {
            result.length = 0;
            return result.push(element);
        }
        if (element[column].valueOf() === result[0][column].valueOf()) {
            return result.push(element);
        }
    }
};
var argument3 = function (docInfo) {
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
var argument4 = function (value) {
 callbackArguments.push(arguments) 

    var td = document.createElement('td');
    td.textContent = value || '';
    tr.appendChild(td);
};
var base_0 = [460,714,82,100,49]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,714,82,100,49]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,714,82,100,49]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,714,82,100,49]
var r_3= undefined
try {
r_3 = base_3.forEach(argument4)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test33.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)