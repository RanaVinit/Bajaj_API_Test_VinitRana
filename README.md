# Bajaj API - Qualifier 1

REST APIs built with Node.js + Express for the Bajaj shortlisting process.

## Endpoints

### GET `/health`
Returns API status.

### POST `/bfhl`
Accepts one key per request: `fibonacci`, `prime`, `lcm`, `hcf`, or `AI`.

## Setup

```bash
npm install
npm start
```

## Environment Variables

```
OFFICIAL_EMAIL=vinit2321.be23@chitkara.edu.in
GEMINI_API_KEY=your_key
PORT=3000
```
