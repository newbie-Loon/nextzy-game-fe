# Build stage
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Production stage
FROM node:22-alpine

WORKDIR /app

COPY --from=builder /app/package*.json ./

RUN npm install --omit=dev

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3051

CMD ["npm", "start", "--", "-p", "3051"]

docker stop nextzy-game-fe
docker rm nextzy-game-fe
docker build -t nextzy-game-fe .
docker run -d   --name nextzy-game-be   --env-file .env   -p 3051:3051   nextzy-game-fe

docker stop nextzy-game-be
docker rm nextzy-game-be
docker build -t nextzy-game-be .
docker run -d   --name nextzy-game-be   --env-file .env   -p 3050:3050   nextzy-game-be