import { Injectable } from '@angular/core';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeminiService {
  private genAI: GoogleGenerativeAI;
  private model: any;

  constructor() {
    this.genAI = new GoogleGenerativeAI(environment.geminiApiKey);
    
    // Try different model names in order
    const modelNames = [
      "gemini-1.5-pro",
      "gemini-2.0-flash-exp", 
      "gemini-1.5-flash",
      "models/gemini-1.5-pro",
      "gemini-pro"
    ];
    
    // Use the first one (we'll try others if it fails)
    this.model = this.genAI.getGenerativeModel({ model: modelNames[0] });
    
    console.log('Using model:', modelNames[0]);
  }

  async generateText(prompt: string): Promise<string> {
    try {
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      return response. text();
    } catch (error:  any) {
      console.error("Gemini Error:", error);
      console.error("Error details:", error. message);
      
      // Return a helpful error message
      if (error.message?. includes('404')) {
        return `Error: Model not found. Try updating @google/generative-ai package.\n\nRun: npm install @google/generative-ai@latest --legacy-peer-deps`;
      }
      
      return "Error: Could not connect to Gemini. Check your API Key.";
    }
  }
}