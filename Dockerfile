FROM node:18

WORKDIR /app

# Copy only package files first (better caching)
COPY package*.json ./

RUN npm install

# Copy rest of the code
COPY . .

# Expose port (documentation purpose)
EXPOSE 3000

CMD ["node", "app.js"]
