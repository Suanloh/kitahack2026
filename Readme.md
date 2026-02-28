# 🌾 BIW (Before It Waste) - AI-Powered Food Waste Prevention & Smart Inventory System

**A modern, cross-platform food sustainability platform built to track groceries, predict expiry, generate recipes, and reduce food waste using AI.**

## Project Overview

BIW — Before It Waste is an AI-assisted food management and waste-prevention platform powered by Google Gemini and Supabase.
Our system scans grocery receipts, detects items & expiry dates, tracks inventory, sends alerts, generates recipes, and encourages users to reduce waste — aligned with:

- SDG 12: Responsible Consumption & Production

- SDG 2: Zero Hunger


Built for students, families, communities, and anyone aiming for smarter consumption.

## 🎯 Platform Capabilities
**🧾 Receipt Scanner**
- Gemini 2.5 Vision for OCR
- Automatic item detection
- Predict expiry dates using AI heuristics

**🗃 Smart Inventory Tracker**
- Supabase database
- Auto updates when scanning new receipts
- Categorization by food type

**⏳ Expiry & Waste Alerts**
- Push notifications
- Reminder timeline
- “Use Soon” recommendation page

**🍳 AI Recipe Generator**
- Gemini-based recipe generation
- Custom prompts based on user inventory
- Zero-waste cooking suggestions

**♻️ Food Waste Analytics**
- Tracks monthly food saving
- Identifies frequently wasted items
- Visual progress charts (via Flutter)

## 🔐 Authentication System

Powered by Supabase Auth

**Features:**

- Email + Password login
- Magic link support
- JWT-based secured API
- Row Level Security (RLS) for user-specific data
- Multi-device login


**DB Tables:**

- users
- inventory_items
- receipts
- food_waste_logs
- recipe_history

## 🤖 Agents

### 1. 🧾 Receipt Intelligence Agent

**Purpose:** Extract items from receipts

**Tech:** Gemini 2.5 Vision

**Capabilities:**
- OCR extraction
- Item price + quantity detection
- Categorization (vegetable, dairy, canned food…)
- Expiry prediction model

---

### 2. 🗃 Inventory Management Agent

**Purpose:** Maintain real-time stock levels

**Tech:** Supabase Edge Functions

**Handles:**
- Insert new scanned items
- Update quantities
- Suggest items that need to be used within 3 days
- Auto-cleanup expired items

--- 

### 3. 🍳 Recipe Advisor Agent

**Purpose:** Generate AI recipes

**Tech:** Gemini 2.0 + 2.5 Text

**Features:**
- Ingredient-based recipes
- Meal planner
- Diet filters (Halal, vegetarian, low-budget)
- Zero-waste suggestions

--- 

## 📁 Project Structure

```
kitahack2026/                          ← THIS IS THE PROJECT ROOT! 🎯
│
├── .npmrc                             ← npm configuration
├── .vscode/                           ← VSCode settings
├── package.json                       ← Root package.json (minimal)
├── package-lock.json                  ← Root dependencies lock file
├── node_modules/                      ← Root node modules (can be ignored)
│
├── Readme.md                          ← Main README file ✏️
│
├── BIW/                               ← Angular Frontend Application 🅰️
│   ├── src/
│   │   ├── app/
│   │   │   ├── app.ts                 ← Main app component
│   │   │   ├── app.html
│   │   │   ├── app.config.ts
│   │   │   ├── app.routes.ts
│   │   │   ├── app.spec.ts
│   │   │   └── services/              ← Angular services
│   │   │       ├── supabase.service.ts
│   │   │       ├── receipt-processor.service.ts
│   │   │       ├── receipt.service.ts
│   │   │       └── inventory.service.ts
│   │   │
│   │   ├── environments/              ← Environment configurations 🔧
│   │   │   ├── environment.template.ts  ← Template file
│   │   │   └── environment.ts         ← Your actual config (create this!)
│   │   │
│   │   ├── index.html                 ← HTML entry point
│   │   ├── main.ts                    ← TypeScript entry point
│   │   └── styles.scss                ← Global styles
│   │
│   ├── .gemini/
│   │   └── GEMINI.md                  ← Gemini AI instructions
│   │
│   ├── package.json                   ← BIW dependencies
│   ├── package-lock.json
│   ├── angular.json                   ← Angular configuration
│   ├── tsconfig.json                  ← TypeScript configuration
│   ├── vitest.config.ts               ← Test configuration
│   └── README.md                      ← BIW specific README
│
├── supabase/                          ← Supabase Backend 🗄️
│   ├── functions/                     ← Edge Functions (Deno)
│   │   ├── ocr/
│   │   │   ├── index.ts               ← OCR function
│   │   │   └── deno.json
│   │   ├── parse-receipt/
│   │   │   ├── index.ts
│   │   │   └── deno.json
│   │   ├── classify-items/
│   │   │   ├── index.ts
│   │   │   └── deno.json
│   │   ├── meal-recommendation/
│   │   │   ├── index.ts
│   │   │   └── deno.json
│   │   ├── expiry-alerts/
│   │   │   ├── index.ts
│   │   │   └── deno.json
│   │   ├── get-usage-history/
│   │   │   ├── index.ts
│   │   │   └── deno.json
│   │   └── update-meal-rating/
│   │       ├── index.ts
│   │       └── deno.json
│   │
│   ├── .temp/                         ← Supabase CLI temp files
│   │   ├── project-ref                ← Your Supabase project ID
│   │   ├── pooler-url
│   │   ├── postgres-version
│   │   ├── cli-latest
│   │   └── ...
│   │
│   └── config.toml                    ← Supabase configuration
│
└──START_GUIDE
    ├── deploy-supabase.sh             ← Deploy Supabase functions
    ├── config-helper.sh               ← Environment setup helper
    ├── quick-deploy.sh                ← One-command deploy
    └── DEPLOYMENT_GUIDE.md            ← Detailed deployment guide


```
## 🚀 Quick Start
```bash
cd START_GUIDE

###setup your keys and API
./config-hlper.sh

# Deploy authentication infrastructure
./quick-deploy.sh

cd..
cd BIW

##start serve
ng serve
```
---
## Set up for Netlify
```bash
# Install Netlify CLI (if not already installed)
npm install -g netlify-cli

# Login to Netlify
netlify login

```

### Initialize Netlify site
```bash
netlify init
# Select: Create & configure a new site
```

### Set environment variables
```bash
netlify env:set SUPABASE_URL "https://your-project.supabase.co"
netlify env:set SUPABASE_ANON_KEY "your-supabase-anon-key"
netlify env:set GEMINI_API_KEY "your-gemini-api-key"

# List env vars to verify
netlify env:list
```
---
### Test build locally
```bash
cd BIW
npm install
npm run build:netlify

# Go back to root
cd ..

# Deploy to preview (optional)
netlify deploy

# Deploy to production
netlify deploy --prod
```

---

## 📦 Prerequisites

- Angular CLI 21.0++
- Supabase CLI
- Node.js 18+
- Zone.js 0.16
- Google AI Studio API Key
- GitHub account

## 🏗 Architecture
### Overall Architecture
```
User → Angular → Supabase Auth → Database
      ↓
  Gemini AI Receipt Scan → Edge Function → Inventory Update
      ↓
  Recipe Agent (Gemini) → Suggestions
```

## 📊 Cost Estimation

### Google Gemini
**Free tier:** Up to 60 requests/min

**Estimated usage:** Free → $0.10/million request if exceed


### Supabase
- Free tier available
- DB + Auth + Storage
- Estimated usage: Free → $25/month

### Total Estimated Monthly Cost:
$0 – $35 depending on traffic.

---

## 🛡 Security
- Supabase RLS enabled
- JWT authentication signed as ECC (P-256)
- No sensitive tokens stored on client
- Gemini API called via secure Supabase Edge Functions

---

## Troubleshooting
### Receipt Not Scanning?
You can try using [sample receipt 1](./sample%20receipt%201.jpeg)
- Ensure high-resolution image
- Use bright lighting & Limit background objects
- in JPEG, JPG, WEBP or PNG

### Cannot Login?
- Check Supabase credentials
- Ensure user email confirmed

### AI Recipe Not Generating?
- Ensure Gemini API key is active
- Check rate limits (tier 1 account or above)

---

## 📌 Roadmap

### Phase 1 — Core Features (Completed)
- [x] **Receipt Scanning** – OCR integration for automatic data entry.
- [x] **Inventory Tracking** – Real-time monitoring of pantry levels.
- [x] **Recipe Generator** – AI-driven suggestions based on available stock.

---

### Phase 2 — Community Features (Current)
- [x] **Inventory Management** – User manually add or change their food inside inventory
- [x] **Expiry Alerts** – Automated notifications for aging items.
- [ ] **Waste Badges** – Gamified rewards for sustainable habits.

---

### Phase 3 — Advanced AI (Planned)
- [ ] **Nutrition Calculation** – Macro/Micro-nutrient breakdown.
- [ ] **Personalized Diet Planning** – AI-tailored health goals.
- [ ] **Multi-language Support** – Global localization.
- [ ] **Voice Interface Agent** – understand user voice input.

---

## 🛠 Technology Stack
### Frontend
Angular CLI

### Backend
- Supabase Auth
- Supabase Database
- Supabase Edge Functions

### AI Models
- Google Gemini 2.0
- Google Gemini 2.5 Flash
- Google Gemini 2.5 Flash Lite

---

## License
This project is part of the BIW (BeforeItWaste) initiative.  

---

## Acknowledgments
* Team Potato Server
* Google Gemini AI
* Supabase Team
* Angular Community
* KITAHack 2026
---
