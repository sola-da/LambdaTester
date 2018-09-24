





var callbackArguments = [];
var argument1 = function (container) {
 callbackArguments.push(arguments) 

    return container.destroy();
};
var argument2 = function (y) {
 callbackArguments.push(arguments) 

    if (typeof y === 'function') {
        vars.data.time.values.forEach(function (t) {
            if (y(t.getTime()))
                years.push(t.getTime());
        });
    } else if (y.constructor === Date) {
        years.push(new Date(y).getTime());
    } else {
        var d = new Date(y.toString());
        if (d !== 'Invalid Date') {
            d.setTime(d.getTime() + d.getTimezoneOffset() * 60 * 1000);
            years.push(d.getTime());
        }
    }
};
var argument3 = null;
var argument4 = true;
var argument5 = function (value) {
 callbackArguments.push(arguments) 

    appObj[property](value);
};
var argument6 = 0;
var argument7 = function (child, index) {
 callbackArguments.push(arguments) 

    child.clearDom();
    child.fieldEditable = false;
    child.index = index;
};
var argument8 = r_1;
var argument9 = true;
var base_0 = ["b","S:","JUg","B","I","d}","_","Br","z"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["b","S:","JUg","B","I","d}","_","Br","z"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["b","S:","JUg","B","I","d}","_","Br","z"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["b","S:","JUg","B","I","d}","_","Br","z"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test915.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)