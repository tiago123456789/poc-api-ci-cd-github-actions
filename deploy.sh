#!/bin/bash

cd /root/apps/poc-api-ci-cd-github-actions
npm i 
pm2 reload app
