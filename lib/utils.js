var anyFormat = require('whatever-format');
var conjoin = require('conjoin');

exports.resolvePackage = resolvePackage;
function resolvePackage(program){
  // TODO
  // break this out more
  var _package = {};
  var _component = {};
  var _conf = program.projectConf ? anyFormat(program.projectConf) : {};
  try {_package = require(process.cwd() + '/package.json')} catch(e){}
  try {_component = require(process.cwd() + '/component.json')} catch(e){}
  return conjoin.mutate(_conf, _package, _component);
}
