#!/bin/bash

# make sure yarn is installed
npm i -g yarn

# install deps
yarn install

# build server
yarn build-strapi
