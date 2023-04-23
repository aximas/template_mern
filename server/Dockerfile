# download node package, alpine means zipped or light size
FROM node:16-alpine3.16 

# work directory, you can change it if you want
WORKDIR /usr/src/app

# copy package.json file in our work directory folder for install required libraries
COPY package.json ./

# copy yarn.lock file in our work directory folder for install required libraries with dependencies 
COPY yarn.lock ./

# command will run after copy
RUN yarn

# after installed everything will copy from current to work directory
COPY . .