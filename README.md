# Bajaj API Development - Qualifier 1

This project implements two REST APIs for the Bajaj shortlisting process.

## Tech Stack
- **Node.js**: Runtime environment
- **Express**: Web framework
- **Google Gemini API**: For AI single-word responses
- **dotenv**: For environment variable management
- **Cors**: For cross-origin resource sharing

## API Endpoints

### 1. GET `/health`
Returns the status of the API and the official email.

**Response:**
```json
{
  "is_success": true,
  "official_email": "vinit2321.be23@chitkara.edu.in"
}
```

### 2. POST `/bfhl`
Processes various math operations or AI queries. Exactly one of the following keys must be present in the request body.

**Request Keys:**
- `fibonacci` (Integer): Returns Fibonacci series up to n elements.
- `prime` (Integer Array): Filters prime numbers from the array.
- `lcm` (Integer Array): Calculates the LCM of the array.
- `hcf` (Integer Array): Calculates the HCF of the array.
- `AI` (String): Returns a single-word AI response to the question.

**Response Structure:**
```json
{
  "is_success": true,
  "official_email": "vinit2321.be23@chitkara.edu.in",
  "data": ...
}
```

## Setup & Running Locally

1. **Clone the repository.**
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Configure environment variables:**
   Create a `.env` file in the root directory and add:
   ```env
   OFFICIAL_EMAIL=vinit2321.be23@chitkara.edu.in
   GEMINI_API_KEY=your_gemini_api_key
   PORT=3000
   ```
4. **Start the server:**
   ```bash
   npm start
   ```

## Deployment

This project is ready to be deployed on platforms like **Vercel**, **Railway**, or **Render**. Ensure you set the environment variables in the platform's dashboard.

## Validation & Robustness
- Strict input validation for all keys.
- Graceful error handling with appropriate HTTP status codes.
- Security guardrails implemented via CORS.
- Single-word AI response enforcement.
