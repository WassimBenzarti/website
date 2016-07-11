import * as express from 'express';
var router:express.Router = express.Router();

router.use((req,res,next) => {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log('An api call is made from %s',ip);
  next();
});

export = router;
