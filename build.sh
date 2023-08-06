#!/bin/bash

# Function to build the React frontend
function build_client() {
    cd client
    npm install 
    cd ..
}

# Function to build the Node.js Express backend
function build_backend() {
    cd back_end
    npm install
    cd ..
}
# Main build function
function build() {
# Check if the frontend directory exists
    if [ -d "client" ] && [ -d "back_end" ]; then
        echo "Building Client..."
        build_client
        echo "Building Backend..."
        build_backend
        echo "Build completed."
    else
        echo "Directory not found. Skipping directory build."
    fi
}

# Call the main build function
build
