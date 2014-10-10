
module.exports = function(program, conf){
  program
    .option('-n, --name <string>', 'project name', conf.name)
    .option('-d, --description <string>', 'project description', conf.description)
    .option('-u, --username <name>', 'user legal name (e.g., Bob Ross)', conf.username)
    .option('-e, --email <address>', 'user email address', conf.email)
    .option('-s, --show-dependencies', 'render file showing module dependencies', conf.showDependencies)
    .option('-p, --published <boolean>', 'whether or not the project is published', conf.published)
    .option('-H, --hide-custom', 'hide custom commands', conf.hideCustom)
    .option('--project-conf <path>', 'program configuration path', conf.projectConf)
    .option('--project-version <version>', 'project version', conf.projectVersion)
    .option('--is-api', '', conf.isApi)
    .option('--is-cli', '', conf.isCli)
    .option('--is-stylus', '', conf.isStylus)
};
