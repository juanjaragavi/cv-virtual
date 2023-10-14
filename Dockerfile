# Use the reploy/reactjs image as the base image
FROM reploy/reactjs:latest

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the current directory contents into the container at /usr/src/app
COPY . .

# If you have any build or environment setup commands, add them here
# For example:
# RUN npm install
# RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]