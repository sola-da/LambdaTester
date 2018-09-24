





var callbackArguments = [];
var argument1 = function (event) {
 callbackArguments.push(arguments) 

    return event + '.wijlightbox-overlay';
};
var argument2 = null;
var argument3 = function (m) {
 callbackArguments.push(arguments) 

    return HLP.readMPI(m);
};
var argument4 = "";
var argument5 = function (x, callback) {
 callbackArguments.push(arguments) 

    iterator(x, function (err, criteria) {
        if (err) {
            callback(err);
        } else {
            callback(null, {
                value: x,
                criteria: criteria
            });
        }
    });
};
var argument6 = false;
var argument7 = null;
var argument8 = function (name) {
 callbackArguments.push(arguments) 

    return lang.getObject(name);
};
var argument9 = 655;
var argument10 = {"":""};
var base_0 = [59,618,655,59,82,49]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,618,655,59,82,49]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
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
require("fs").writeFileSync("./experiments/map/mapMined/test942.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)