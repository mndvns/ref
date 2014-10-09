
module.exports = function(program, conf){
  program.option('-n, --name <string>', 'project name', conf.name)
  program.option('-d, --description <string>', 'project description', conf.description)
  program.option('-u, --username <name>', 'user legal name (e.g., Bob Ross)', conf.username)
  program.option('-e, --email <address>', 'user email address', conf.email)
  program.option('-s, --show-dependencies', 'render file showing module dependencies', conf.showDependencies)
  program.option('-p, --published <boolean>', 'whether or not the project is published', conf.published)
  program.option('-H, --hide-custom', 'hide custom commands', conf.hideCustom);
  program.option('--is-api', '', conf.isApi)
  program.option('--is-cli', '', conf.isCli)
  program.option('--is-stylus', '', conf.isStylus)
};
