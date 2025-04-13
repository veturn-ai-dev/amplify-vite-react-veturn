from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import replicate
import os
from dotenv import load_dotenv
from mangum import Mangum

# Load environment variables
load_dotenv()

app = FastAPI(redirect_slashes=False)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",  # Vite default port
        "http://localhost:5174",  # Alternative Vite port
        "http://127.0.0.1:5173",  # Localhost alternative
        "http://127.0.0.1:5174",  # Localhost alternative
        "https://*.amplifyapp.com",  # All Amplify domains
        "https://veturn.ai",
        "https://w54xn6l1k9.execute-api.us-east-1.amazonaws.com",  # API Gateway domain
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["*"]
)

@app.get("/")
async def read_root():
    return {"message": "Welcome to the API!"}

class ImagePrompt(BaseModel):
    prompt: str
    style: str = "realistic"  # default style
    num_outputs: int = 1
    image_dimensions: str = "512x512"

@app.post("/api/generate-image")
@app.post("/api/generate-image/")
async def generate_image(prompt_data: ImagePrompt):
    try:
        print(f"Received request with prompt: {prompt_data.prompt}")
        
        # Validate Replicate API token
        api_token = os.getenv("REPLICATE_API_TOKEN")
        if not api_token:
            raise HTTPException(
                status_code=500,
                detail="Replicate API token not configured"
            )

        # Initialize Replicate client
        client = replicate.Client(api_token=api_token)

        # Model selection based on style
        model_versions = {
            "realistic": "stability-ai/stable-diffusion:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf",
            "artistic": "stability-ai/stable-diffusion:ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e33b",
            "anime": "cjwbw/anything-v4.0:42df87e16124c36d2297bb6892cf91b16c160204554e42486e80c9c26509e33b",
        }

        model_version = model_versions.get(prompt_data.style, model_versions["realistic"])
        print(f"Using model version: {model_version}")

        # Generate image
        output = replicate.run(
            model_version,
            input={
                "prompt": prompt_data.prompt,
                "negative_prompt": "blurry, bad quality, distorted, disfigured",
                "width": 512,
                "height": 512,
                "num_outputs": prompt_data.num_outputs,
                "num_inference_steps": 50,
                "guidance_scale": 7.5,
                "scheduler": "K_EULER_ANCESTRAL",
            }
        )

        print(f"Raw output from Replicate: {output}")

        # Extract image URLs from the raw output
        if isinstance(output, list):
            image_urls = output
            print(f"Image url passed to UI: {image_urls}")
            return {
                "success": True,
                "images": image_urls,
                "message": "Images generated successfully"
            }
        else:
            raise ValueError("Unexpected response format from Replicate API")

    except Exception as e:
        print(f"Error generating image: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail=f"Failed to generate image: {str(e)}"
        )

@app.get("/api/health")
async def health_check():
    return {"status": "healthy"}

# Create handler for AWS Lambda
handler = Mangum(app) 