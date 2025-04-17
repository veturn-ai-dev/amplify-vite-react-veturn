from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import replicate
import os
from dotenv import load_dotenv
from mangum import Mangum
from typing import List, Optional
import json

# Load environment variables
load_dotenv()

app = FastAPI(redirect_slashes=False)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://main.d3qhharr5w9v34.amplifyapp.com",
        "http://localhost:3000",
        "http://localhost:5173"
    ],
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["Content-Type", "Authorization"],
    expose_headers=["*"],
    max_age=3600,
)

# Add security headers middleware
@app.middleware("http")
async def add_security_headers(request, call_next):
    response = await call_next(request)
    response.headers["X-Content-Type-Options"] = "nosniff"
    response.headers["X-Frame-Options"] = "DENY"
    response.headers["X-XSS-Protection"] = "1; mode=block"
    response.headers["Strict-Transport-Security"] = "max-age=31536000; includeSubDomains"
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    return response

@app.get("/")
async def root():
    return {"message": "Welcome to Veturn AI API"}

class ImagePrompt(BaseModel):
    prompt: str
    style: Optional[str] = "natural"
    num_outputs: Optional[int] = 1
    image_dimensions: Optional[str] = "1024x1024"

@app.post("/api/generate-image")
async def generate_image(request: Request):
    try:
        # Parse request body
        body = await request.json()
        prompt = body.get("prompt")
        
        if not prompt:
            raise HTTPException(status_code=400, detail="Prompt is required")

        if not os.getenv("REPLICATE_API_TOKEN"):
            raise HTTPException(status_code=500, detail="REPLICATE_API_TOKEN not configured")

        output = replicate.run(
            "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",
            input={
                "width": 1024,
                "height": 1024,
                "prompt": prompt,
                "num_outputs": 1,
                "num_inference_steps": 50,
                "guidance_scale": 7.5,
                "scheduler": "K_EULER"
            }
        )

        if not output:
            raise HTTPException(status_code=500, detail="No output received from Replicate API")

        # Ensure output is a list
        if not isinstance(output, list):
            output = [output]

        return {"imageUrl": output[0]}

    except json.JSONDecodeError:
        raise HTTPException(status_code=400, detail="Invalid JSON in request body")
    except Exception as e:
        print(f"Error in generate_image: {str(e)}")  # Log the error
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/health")
async def health_check():
    return {"status": "healthy"}

# Create handler for AWS Lambda
handler = Mangum(app) 