# Veturn AI Suite

A full-stack application for AI-powered creative tools, built with React, FastAPI, and AWS Amplify.

## Project Structure

```
veturn-ai-suite/
├── frontend/           # React frontend application
│   ├── src/           # Source code
│   ├── public/        # Static assets
│   └── package.json   # Frontend dependencies
├── backend/           # FastAPI backend
│   ├── main.py        # API endpoints
│   └── requirements.txt # Python dependencies
└── amplify.yml        # AWS Amplify configuration
```

## Local Development

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

## Deployment

The application is configured for deployment with AWS Amplify. The `amplify.yml` file contains the build and deployment configuration.

### Environment Variables

Create the following environment variables in your AWS Amplify console:

- `REPLICATE_API_TOKEN`: Your Replicate API token
- `API_GATEWAY_URL`: The URL of your API Gateway endpoint

## API Endpoints

- Text to Image Generation: `/api/generate-image`
- Health Check: `/api/health`