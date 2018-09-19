const domain = process.env.DOMAIN || 'localhost';
const port = process.env.PORT || 5000;
const protocol = process.env.PROTOCOL || 'http://';

module.exports.domain = domain;
module.exports.port = port;
module.exports.protocol = protocol;

module.exports.serverUrl = process.env.SERVER_URL || `${protocol}${domain}${port ? `:${port}` : ''}`;

module.exports.mongo = {
  uri: process.env.MONGOLAB_URI || 'mongodb://127.0.0.1:27017/herokuDeployment',
};