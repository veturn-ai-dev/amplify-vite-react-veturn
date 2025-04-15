from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import replicate
import os
from dotenv import load_dotenv
from mangum import Mangum
from typing import List, Optional

# Load environment variables
load_dotenv()

app = FastAPI(redirect_slashes=False)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://localhost:5173",
        "https://*.amplifyapp.com",
        "https://main.d3qhharr5w9v34.amplifyapp.com",
        "https://w54xn6l1k9.execute-api.us-east-1.amazonaws.com"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
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
@app.post("/api/generate-image/")
async def generate_image(prompt: ImagePrompt):
    try:
        if not os.getenv("REPLICATE_API_TOKEN"):
            raise HTTPException(status_code=500, detail="REPLICATE_API_TOKEN not configured")

        output = replicate.run(
            "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",
            input={
                "width": 1024,
                "height": 1024,
                "prompt": prompt.prompt,
                "num_outputs": prompt.num_outputs,
                "num_inference_steps": 50,
                "guidance_scale": 7.5,
                "scheduler": "K_EULER"
            }
        )

        if not output or not isinstance(output, list):
            raise HTTPException(status_code=500, detail="Unexpected response format from Replicate")

        return {"imageUrl": output[0]}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/health")
async def health_check():
    return {"status": "healthy"}

# Create handler for AWS Lambda
handler = Mangum(app) 