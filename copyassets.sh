#!/usr/bin/env bash
echo "Copy dist/ to Apache Server"
cd dist && npm pack && mv platform-commons-0.0.0.tgz platform-commons.tgz
cp -a platform-commons.tgz /var/www/html/desireplatform/micro-ui-libs/

