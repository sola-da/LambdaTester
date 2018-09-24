/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (response) {
 callbackArguments.push(arguments) 

    if (response.status === 422 && response.data && _this.parseModelErrors) {
        _this.clearModelErrors();
        _this.addModelErrors(_this.parseModelErrors(response.data));
    }
    return $q.reject(response);
};
var argument2 = p1;
var argument3 = null;
var argument4 = null;
var argument5 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 31,
                end: 39
            },
            {
                start: 81,
                end: 89
            },
            {
                start: 106,
                end: 114
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument6 = function (content) {
 callbackArguments.push(arguments) 

    content = JSON.parse(content);
    that.service_config[name] = content.configuration;
};
var argument7 = "";
var argument8 = p1;
var argument9 = r_3;
var argument10 = function () {
 callbackArguments.push(arguments) 

    return sh.run([
        '-c',
        adb + ' push "' + utils.joinPath(targetFolder, 'application.zip') + '" /' + remotePath + '/webapps/' + buildAppName + '.' + gaiaDomain + '/application.zip'
    ]);
};
var argument11 = ["T","D","EK"];
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
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
var base_3 = p2
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test466.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)