import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

export interface ImageGenerationRequest {
  prompt: string;
  style?: 'realistic' | 'artistic' | 'anime';
  num_outputs?: number;
  image_dimensions?: string;
}

export interface ImageGenerationResponse {
  success: boolean;
  images: string[];
  message: string;
}

export const generateImage = async (request: ImageGenerationRequest): Promise<ImageGenerationResponse> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/generate-image`, request);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.detail || 'Failed to generate image');
    }
    throw error;
  }
}; 