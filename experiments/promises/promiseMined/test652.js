/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (err) {
 callbackArguments.push(arguments) 

    done();
};
var argument2 = {"122":8.721152389507695e+305,"403":"","":1.7953540033223009e+308,"7.364352309350597e+307":"@p","1.0196689986154981e+308":""};
var argument3 = r_1;
var argument4 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 11,
                end: 12
            },
            {
                start: 123,
                end: 124
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument5 = "NMr";
var argument6 = r_1;
var argument7 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 4,
                end: 5
            },
            {
                start: 22,
                end: 23
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument8 = false;
var argument9 = true;
var argument10 = function (result) {
 callbackArguments.push(arguments) 

    return new Destination({
        inputType: 'federatedName',
        address: result.destination_address,
        federatedName: federatedName,
        destinationTag: result.destination_tag || destinationTag,
        fixedDestinationTag: !!result.destination_tag
    });
};
var argument11 = false;
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.then(argument3,argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = p1
var r_2= undefined
try {
r_2 = base_2.then(argument6,argument7,argument8)
}
catch(e) {
r_2= e.message
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.then(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test652.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)