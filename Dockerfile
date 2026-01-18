# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the app
RUN npm run build

# Expose port 4173 (default for Vite preview)
EXPOSE 4173

# Start the app using Vite preview
CMD ["npm", "run", "preview"]
