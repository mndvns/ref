
module.exports = function(program, conf){
  program
    .option('--name <string>', '', conf.name)
    .option('--description <string>', '', conf.description)
    .option('--username <name>', '', conf.username)
    .option('--email <address>', '', conf.email)
    .option('--published <boolean>', '', conf.published)
    .option('--keywords <word ...>', '', conf.keywords)
    .option('--hide-custom', 'hide custom commands', conf.hideCustom)
    .option('--project-conf <path>', 'program configuration path', conf.projectConf)
    .option('--is-api', '', conf.isApi)
    .option('--is-cli', '', conf.isCli)
    .option('--is-stylus', '', conf.isStylus)
    .option('--is-component', '', conf.isComponent)
    .option('--is-node', '', conf.isNode)
};
