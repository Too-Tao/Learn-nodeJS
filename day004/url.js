// let url = require('url')
let { URL } = require('url')

const u = new URL('https://ke.qq.com/webcourse/index.html/?id=123#cid=315597&term_id=100374543&taid=2329598851600589&vid=g14276bve49')

console.log(u.searchParams.get('id'))