FROM mhart/alpine-node

COPY public public
COPY src src
COPY package.json package.json
COPY tsconfig.json tsconfig.json
COPY craco.config.js craco.config.js

RUN npm install && npm run build

FROM mhart/alpine-node

COPY --from=0 build build
COPY index.js .
COPY package.json .

RUN npm install express && npm install path && npm install -g pm2
expose 8080

ENTRYPOINT ["pm2-runtime", "index.js"]
