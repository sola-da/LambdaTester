/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = p2;
var argument2 = function () {
 callbackArguments.push(arguments) 

    logger.success('loaded options for id=' + car.getProperty('id'));
    car.areOptionsLoaded = true;
    return car.getProperty('options');
};
var argument3 = p2;
var argument4 = true;
var argument5 = function (el) {
 callbackArguments.push(arguments) 

    el.value.should.equal('0');
};
var argument6 = function (config) {
 callbackArguments.push(arguments) 

    if (!config)
        config = {};
    var result = '';
    setProperty(config, key, castValue(value));
    if (extname === '.json') {
        result = JSON.stringify(config);
    } else {
        result = yaml.safeDump(config);
    }
    return fs.writeFile(configPath, result);
};
var argument7 = p1;
var argument8 = null;
var argument9 = function () {
 callbackArguments.push(arguments) 

    return HELPERS.ensureNoConnections(done);
};
var base_0 = p2
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
r_1 = base_1.then(argument4,argument5)
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
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.then(argument9)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test131.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)