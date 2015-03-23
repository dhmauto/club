/**
 * Created by hehe on 2015/3/23.
 */

hhycc.express = require('express');
hhycc.sign = require('./controllers/sign');
hhycc.topic = require('./controllers/topic');

hhycc.router = hhycc.express.router();
yhycc.router.get('/', hhycc.site.index);
yhycc.router.get('/topic', hhycc.topic.topicList);
