//DB configuration stored and used for calls to Aurora DB.
//The configuration is reading environment variables (i.e. SECRET_ARN) created via CDK
const db = require('data-api-client')({
   secretArn: process.env.SECRET_ARN,
   resourceArn: process.env.CLUSTER_ARN,
   database: process.env.DB_NAME
});
export default db;