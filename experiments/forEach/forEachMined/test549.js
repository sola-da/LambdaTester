





var callbackArguments = [];
var argument1 = function (dir) {
 callbackArguments.push(arguments) 

    site.use('/' + dir, staticDir(opts.baseDir + dir));
};
var argument2 = true;
var argument3 = r_0;
var argument4 = function (name) {
 callbackArguments.push(arguments) 

    $.fn[name] = function (callback) {
        if (callback)
            this.bind(name, callback);
        else
            this.each(function () {
                try {
                    this[name]();
                } catch (e) {
                }
            });
        return this;
    };
};
var argument5 = true;
var argument6 = 242;
var argument7 = function (docList) {
 callbackArguments.push(arguments) 

    docsToPersist = docsToPersist.concat(docList);
};
var argument8 = false;
var argument9 = r_2;
var argument10 = function (pair) {
 callbackArguments.push(arguments) 

    fun(pair[0], pair[1]);
};
var argument11 = {"460":"","969":"fZf","eK":":E","":"","1.5740098833165188e+308":1.1397250880058809e+308,"5.103369243827552e+307":1.2186421422982974e+308,"lP":126};
var argument12 = true;
var base_0 = [0,1.7976931348623157e+308,122,823,1.7976931348623157e+308,607]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,1.7976931348623157e+308,122,823,1.7976931348623157e+308,607]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,1.7976931348623157e+308,122,823,1.7976931348623157e+308,607]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,1.7976931348623157e+308,122,823,1.7976931348623157e+308,607]
var r_3= undefined
try {
r_3 = base_3.forEach(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test549.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)