#!/bin/bash

ls -al
[ "x$BUILD_TYPE" != "test" ] && npm run build:production && pm2-runtime start /app/pm2.json
[ "x$BUILD_TYPE" = "test" ] && npm run build:staging && pm2 start /app/pm2.json

