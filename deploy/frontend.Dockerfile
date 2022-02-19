FROM node:14
# docker run -p 3000:3000 -v /Users/eric.bellet/Desktop/repositories/datablackgold:/app -it react:1.0 bash
# https://dgraph.io/blog/post/building-graphoverflow/
# https://github.com/salihozdemir/stackoverflow-clone
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install
#RUN npm install --save react react-dom
#RUN npm install --save react-digraph
RUN wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | apt-key add -

# add app
# åCOPY . ./

# start app
CMD ["npm", "start"]