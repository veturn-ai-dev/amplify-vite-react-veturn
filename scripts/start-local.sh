#!/bin/bash

# Start the backend
echo "Starting backend service..."
cd backend
source venv/bin/activate  # If using virtual environment
uvicorn main:app --reload --host 0.0.0.0 --port 8000 &
BACKEND_PID=$!

# Start the frontend
echo "Starting frontend service..."
cd ..
npm run dev &
FRONTEND_PID=$!

# Function to cleanup on exit
cleanup() {
    echo "Stopping services..."
    kill $BACKEND_PID
    kill $FRONTEND_PID
    exit
}

# Trap SIGINT and SIGTERM signals and call cleanup
trap cleanup SIGINT SIGTERM

# Wait for both processes
wait $BACKEND_PID $FRONTEND_PID 