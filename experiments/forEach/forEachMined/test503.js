





var callbackArguments = [];
var argument1 = function (key) {
 callbackArguments.push(arguments) 

    self.remote[key] = methods[key];
};
var argument2 = function (docInfo) {
 callbackArguments.push(arguments) 

    var attachments = docInfo.data && docInfo.data._attachments ? Object.keys(docInfo.data._attachments) : [];
    if (!attachments.length) {
        return done();
    }
    function processedAttachment() {
        recv++;
        if (recv === attachments.length) {
            done();
        }
    }
    for (var key in docInfo.data._attachments) {
        preprocessAttachment(docInfo.data._attachments[key], processedAttachment);
    }
};
var argument3 = true;
var argument4 = function (dir) {
 callbackArguments.push(arguments) 

    var directory = dir + '/public';
    if (fileLoader.fileExists(directory)) {
        app.use(connect.static(directory, configuration.publicStaticOptions));
    }
};
var argument5 = null;
var argument6 = function (np) {
 callbackArguments.push(arguments) 

    var inverseNp = np.inverse;
    var fkNames = inverseNp ? inverseNp.foreignKeyNames : np.invForeignKeyNames;
    if (fkNames.length === 0)
        return;
    var npValue = parent.getProperty(np.name);
    var fkName = fkNames[propertyIx];
    if (np.isScalar) {
        if (!npValue)
            return;
        npValue.setProperty(fkName, newValue);
    } else {
        npValue.forEach(function (iv) {
            iv.setProperty(fkName, newValue);
        });
    }
};
var base_0 = [122,607,-100,893,893,82,705,1.7976931348623157e+308,705,157]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,607,-100,893,893,82,705,1.7976931348623157e+308,705,157]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,607,-100,893,893,82,705,1.7976931348623157e+308,705,157]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,607,-100,893,893,82,705,1.7976931348623157e+308,705,157]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test503.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)