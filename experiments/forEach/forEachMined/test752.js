





var callbackArguments = [];
var argument1 = function (deployment) {
 callbackArguments.push(arguments) 

    var indexDoc = _.defaults({
            docType: 'indexPage',
            areas: areas
        }, deployment);
    indexDoc.id = 'index' + (deployment.name === 'default' ? '' : '-' + deployment.name);
    docs.push(indexDoc);
};
var argument2 = r_0;
var argument3 = function (expr) {
 callbackArguments.push(arguments) 

    expr._validate(entityType, usesNameOnServer);
};
var argument4 = function (module) {
 callbackArguments.push(arguments) 

    module(scope);
};
var argument5 = {"157":59,"2.449245567738446e+307":"","":655,"1.661288223149329e+308":9.048929582594475e+307,"1.0064300495985859e+307":"-","1.1072290059904184e+307":5.701087099200098e+307,"1.4257664044573817e+308":8.522853779739655e+307,"<w":1.4425373051354813e+308,"1.7976931348623157e+308":1.610966140466973e+308};
var argument6 = null;
var argument7 = function (char) {
 callbackArguments.push(arguments) 

    var tmpArray = title.split(char);
    if (tmpArray.length > 1) {
        if (betterTitle)
            return self.cache['article-title'] = title;
        betterTitle = tmpArray[0].trim();
    }
};
var argument8 = r_1;
var argument9 = r_2;
var base_0 = [714,"t","%","r",-100,"R",1.7976931348623157e+308,122]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,"t","%","r",-100,"R",1.7976931348623157e+308,122]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,"t","%","r",-100,"R",1.7976931348623157e+308,122]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,"t","%","r",-100,"R",1.7976931348623157e+308,122]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test752.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)