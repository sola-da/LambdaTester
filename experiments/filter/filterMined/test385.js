





var callbackArguments = [];
var argument1 = function (file) {
 callbackArguments.push(arguments) 

    return path.join(__dirname, file) !== __filename && file !== 'pages.js';
};
var argument2 = function (edge) {
 callbackArguments.push(arguments) 

    var match = false;
    if (edge[self.source][id] == focus) {
        match = true;
        if (objects) {
            targets.push(edge[self.target]);
        }
    } else if (edge[self.target][id] == focus) {
        match = true;
        if (objects) {
            targets.push(edge[self.source]);
        }
    }
    return match;
};
var argument3 = function (match) {
 callbackArguments.push(arguments) 

    return !hasMatch(nextMatches, match);
};
var argument4 = "fOsz";
var argument5 = function (d) {
 callbackArguments.push(arguments) 

    return isBarType(d);
};
var argument6 = r_3;
var base_0 = ["@:","r|?0","-","D ","N","u","79"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["@:","r|?0","-","D ","N","u","79"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["@:","r|?0","-","D ","N","u","79"]
var r_2= undefined
try {
r_2 = base_2.filter(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["@:","r|?0","-","D ","N","u","79"]
var r_3= undefined
try {
r_3 = base_3.filter(argument5,argument6)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test385.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)