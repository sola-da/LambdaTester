/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = "";
var argument2 = function () {
 callbackArguments.push(arguments) 

    return runCommand(ember, 'help', 'generate', 'model', {
        onOutput: function (string) {
            output += string;
        }
    });
};
var argument3 = p2;
var argument4 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 0,
                end: 1
            },
            {
                start: 54,
                end: 55
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument5 = p2;
var argument6 = p2;
var argument7 = null;
var argument8 = function (notes) {
 callbackArguments.push(arguments) 

    if (notes) {
        value(notes);
        updateStatus('Notes loaded.');
    } else {
        updateStatus('No saved notes found!');
    }
};
var argument9 = r_2;
var argument10 = function (err) {
 callbackArguments.push(arguments) 

    expect(err).to.exist;
    done();
};
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = p2
var r_1= undefined
try {
r_1 = base_1.then(argument4,argument5,argument6)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.then(argument7,argument8,argument9)
}
catch(e) {
r_2= e.message
}
var base_3 = p2
var r_3= undefined
try {
r_3 = base_3.catch(argument10)
}
catch(e) {
r_3= e.message
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test607.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)