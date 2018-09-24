





var callbackArguments = [];
var argument1 = function (version) {
 callbackArguments.push(arguments) 

    return version == info.current ? chalk.yellow(version) : version;
};
var argument2 = null;
var argument3 = function (match) {
 callbackArguments.push(arguments) 

    return match.route;
};
var argument4 = true;
var argument5 = "P";
var argument6 = function (match) {
 callbackArguments.push(arguments) 

    return function () {
        var handler = match.route.props.handler;
        if (!transition.isAborted && handler.willTransitionTo)
            handler.willTransitionTo(transition, match.params, query);
        var promise = transition.promise;
        delete transition.promise;
        return promise;
    };
};
var argument7 = true;
var argument8 = "";
var argument9 = function () {
 callbackArguments.push(arguments) 

    return this.end = i(this.el[0]), this.diff = s(this.start, this.end), this;
};
var argument10 = r_0;
var argument11 = r_0;
var base_0 = ["|C","9J&"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["|C","9J&"]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["|C","9J&"]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["|C","9J&"]
var r_3= undefined
try {
r_3 = base_3.map(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/map/mapMined/test389.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)