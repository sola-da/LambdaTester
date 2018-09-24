





var callbackArguments = [];
var argument1 = function (stop) {
 callbackArguments.push(arguments) 

    return Color(stop[1]);
};
var argument2 = function (completion) {
 callbackArguments.push(arguments) 

    return {
        text: completion.name,
        type: completion.message,
        guess: !!res.guess
    };
};
var argument3 = function (str, i) {
 callbackArguments.push(arguments) 

    return pad(++i, width) + ' |' + ' ' + str;
};
var argument4 = r_1;
var argument5 = function (name) {
 callbackArguments.push(arguments) 

    if (excludedTables.indexOf(name) < 0) {
        return config.database.knex(name).select();
    }
};
var argument6 = null;
var base_0 = ["Z","nh"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Z","nh"]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Z","nh"]
var r_2= undefined
try {
r_2 = base_2.map(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Z","nh"]
var r_3= undefined
try {
r_3 = base_3.map(argument5,argument6)
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
require("fs").writeFileSync("./experiments/map/mapMined/test15.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)