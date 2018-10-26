const packageJson = require('./package.json');

export default function (config, env) {
  const newConfig = config;
  // config.plugin('after-emit', console.log)
  // merge or override
  // console.log(newConfig.module.rules)
	const index = newConfig.module.rules.findIndex((item) => {
    if (item.test) {
	    return item.test.test('.less') || item.test.test('.css')
    }
    return false
  })
  const cssRules =newConfig.module.rules[index];
  if (cssRules && cssRules['use'] && cssRules['use'][1] && cssRules['use'][1].options && cssRules['use'][1].options.localIdentName) {
	  cssRules['use'][1].options.localIdentName = `${packageJson.name}__V${packageJson.version}__${cssRules['use'][1].options.localIdentName}`
  }
  return newConfig;
}
