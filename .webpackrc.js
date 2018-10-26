const fs = require('fs');
const path = require('path');
const writeFile = require('write');
const packageInfo = require('./package.json');
const config = packageInfo.TC;
let TC_ENV = process.env.TC_ENV || 'develop';
let conf = {

}

switch (TC_ENV) {
  case 'develop': {
	  conf = {
      ...conf,
    }
    break
  }
	case 'production': {
		conf = {
			...conf,
		}
		break
	}
  default: {
	  conf = {
		  ...conf,
	  }
    break
  }
}

let createConfTimeOut = null

const TC_CONFIG = {
	...config,
	...conf,
	version: packageInfo.version
}

export default {
	"define": {
		"TC_ENV": TC_ENV,
		"TC_CONFIG": TC_CONFIG,
		"VERSION": packageInfo.version
	},
  "externals": {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  ...conf,
}
