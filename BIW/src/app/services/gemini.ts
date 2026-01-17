import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeminiService {

  private readonly MODELS_TO_TRY = [
    'gemini-1.5-flash',
    'gemini-1.5-pro',
    'gemini-pro',
    'gemini-1.0-pro',
    'text-bison-001',
  ];

  async generateText(prompt: string): Promise<string> {
    const API_KEY = environment.geminiApiKey;
    
    // Try each model until one works
    for (const model of this.MODELS_TO_TRY) {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent? key=${API_KEY}`;
      
      try {
        console.log(`Trying model: ${model}...`);
        
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [{
              parts: [{
                text: prompt
              }]
            }]
          })
        });

        if (response.ok) {
          const data = await response.json();
          console.log(`✅ SUCCESS with model:  ${model}`);
          
          const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
          
          if (text) {
            return text;
          }
        } else {
          const errorData = await response.json();
          console.log(`❌ ${model} failed:`, errorData.error?.message);
        }
        
      } catch (error:  any) {
        console.log(`❌ ${model} error:`, error.message);
      }
    }
    
    return '❌ All models failed.  Your API key might not have access to Gemini models.  Try creating a new API key at https://aistudio.google.com/app/apikey';
  }
}