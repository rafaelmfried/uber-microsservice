FROM node:19-alpine AS base

WORKDIR /app

# Copy package files only and install dependencies
COPY package*.json ./
RUN npm ci

# Development stage
FROM base AS development

ARG APP
ENV APP_NAME=$APP

# Copy entire project for development
COPY . .

# Use npx to ensure the locally installed nest CLI is used
CMD npx nest start $APP_NAME --watch

# Build stage
FROM base AS build

ARG APP

# Copy source files
COPY . .

# Build the application using npx to ensure the locally installed nest is used
RUN npx nest build ${APP}

# Production stage
FROM node:19-alpine AS production

WORKDIR /app

ARG APP
ENV NODE_ENV=production
ENV APP_NAME=$APP

# Copy package files and install only production dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy built application from build stage
COPY --from=build /app/dist/apps/${APP} ./dist/apps/${APP}

# Copy necessary files for the specific microservice
CMD node dist/apps/$APP_NAME/main