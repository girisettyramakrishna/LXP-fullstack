# -------------------------------
# Stage 1: Base image
# -------------------------------
FROM node:20-alpine AS base

# Set working directory
WORKDIR /app

# Copy package files first (for efficient Docker caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your backend source code
COPY . .

# Expose the app port
EXPOSE 5000

# Set environment variable for production
ENV NODE_ENV=production

# Start the server
CMD ["npm", "start"]
