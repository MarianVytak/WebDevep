#!/bin/bash
rm -rf node_modules;
rm -rf dist;
yarn install;
yarn build;
chmod 777 build.sh;
