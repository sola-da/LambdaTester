





var callbackArguments = [];
var argument1 = function (dp) {
 callbackArguments.push(arguments) 

    var pn = dp.name;
    var nv = newValue.getProperty(pn);
    oldValue.setProperty(pn, nv);
};
var argument2 = false;
var argument3 = "";
var argument4 = function (err) {
 callbackArguments.push(arguments) 

    main_callback(true);
};
var argument5 = function (m) {
 callbackArguments.push(arguments) 

    m.$verify();
};
var argument6 = null;
var argument7 = false;
var argument8 = function (t) {
 callbackArguments.push(arguments) 

    if (typeof t === 'string') {
        if (t[0] === '\n') {
            column = t.length - 1;
            row++;
        } else
            column += t.length;
        text += t;
    } else {
        if (!t.start)
            t.start = {
                row: row,
                column: column
            };
        else
            t.end = {
                row: row,
                column: column
            };
    }
};
var base_0 = ["6q","C","s"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["6q","C","s"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["6q","C","s"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["6q","C","s"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test208.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)