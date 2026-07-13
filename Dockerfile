FROM node:18-alpine
RUN npm install express
COPY server.js .
EXPOSE 3000
CMD ["node", "server.js"]
