#!/bin/bash

set -e

cd "$(dirname "$0")"

echo ""
echo "Starting Ekano..."
echo ""

# PostgreSQL
echo "PostgreSQL   starting..."
docker start ekano-postgres >/dev/null 2>&1 || true
echo "PostgreSQL   running"

# Backend
echo "Backend      starting..."
(
    cd backend
    npm run dev
) &

BACKEND_PID=$!

# Frontend
echo "Frontend     starting..."
(
    cd frontend
    npm run dev
) &

FRONTEND_PID=$!

echo ""
echo "Ekano is running"
echo ""
echo "  Frontend    http://localhost:3000"
echo "  Backend     http://localhost:8080"
echo "  PostgreSQL  localhost:5432"
echo ""
echo "Press Ctrl+C to stop."
echo ""

cleanup() {
    echo ""
    echo "Stopping Ekano..."

    kill $BACKEND_PID 2>/dev/null || true
    kill $FRONTEND_PID 2>/dev/null || true

    docker stop ekano-postgres >/dev/null 2>&1 || true

    echo "Ekano stopped."
}

trap cleanup SIGINT SIGTERM

wait