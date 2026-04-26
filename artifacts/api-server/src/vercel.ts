// @ts-nocheck
import app from "./app.js";
import { seedAdmin } from "./lib/seed.js";

// Seed the admin user (Vercel will run this on cold start)
seedAdmin().catch(console.error);

// Export the app for Vercel serverless handling
export default app;
