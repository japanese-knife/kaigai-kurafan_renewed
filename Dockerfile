# 1. Build stage
FROM node:20-alpine AS builder

WORKDIR /app
COPY . .
RUN npm install --frozen-lockfile
RUN npm run build


# 2. Production stage
FROM node:20-alpine

WORKDIR /app
COPY --from=builder /app ./
RUN if [ -n "$ENV_FILE" ]; then cp $ENV_FILE .env; fi

EXPOSE 3000

ENV NODE_ENV=production

CMD ["npm", "start"]