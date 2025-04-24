# Use an official Nginx image from the Docker Hub
FROM nginx:alpine

# Copy the contents of the current directory to the nginx html folder
COPY . /usr/share/nginx/html 

# Expose port 80 to access the application in the browser
EXPOSE 80

# Run Nginx in the foreground to serve the app
CMD ["nginx", "-g", "daemon off;"]
