# FROM node:20.15-alpine3.19
# WORKDIR /app
# RUN npm install -g serve
# COPY package.json .
# COPY package-lock.json .
# RUN npm install
# COPY . .
# RUN npm run build
# EXPOSE 3000
# CMD ["serve", "-s", "dist", "-l", "3000"]

# Étape de base commune
FROM node:20.15-alpine3.19 AS base
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install

# Étape de développement
FROM base AS development
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev"]

# Étape de build pour la production
FROM base AS build
COPY . .
RUN npm run build

# Étape de production
FROM node:20.15-alpine3.19 AS production
WORKDIR /app
RUN npm install -g serve
COPY --from=build /app/dist ./dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]