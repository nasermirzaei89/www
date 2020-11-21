FROM node:14.15.1-alpine

COPY package.json .
COPY yarn.lock .
RUN yarn install --no-progress --frozen-lockfile --ignore-engines

COPY . .

RUN yarn build

ENTRYPOINT ["yarn", "start"]
