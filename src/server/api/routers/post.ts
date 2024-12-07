// Import necessary modules and utilities
import { createTRPCRouter, publicProcedure, protectedProcedure } from '~/server/api/trpc'; // TRPC router and procedure utilities
import { z } from 'zod'; // Schema validation library
import path from 'path'; // Node.js utility for file and directory paths
import fs from 'fs'; // Node.js file system module
import dotenv from 'dotenv'; // Load environment variables
import { GoogleGenerativeAI } from "@google/generative-ai"; // Google Generative AI SDK
import { posts } from '~/server/db/schema'; // Database schema for posts table

// Load environment variables from .env file
dotenv.config();

// Initialize the Google Generative AI client with the API key from environment variables
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY as string);

// Select a specific generative AI model for content generation
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Load descriptions from a JSON file located in the public folder
const descriptionsPath = path.resolve(process.cwd(), "public", "jsondata.json");
const descriptions = JSON.parse(fs.readFileSync(descriptionsPath, "utf-8"));

// Define a TRPC router for handling API endpoints related to posts
export const postRouter = createTRPCRouter({
  // A simple public procedure that returns a greeting message
  hello: publicProcedure
    .input(z.object({ text: z.string() })) // Define the expected input schema
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`, // Return a greeting message with the provided input text
      };
    }),

  // A protected procedure for creating a new post
  create: protectedProcedure
    .input(z.object({ name: z.string().min(1) })) // Validate that the name field is a non-empty string
    .mutation(async ({ ctx, input }) => {
      // Insert a new post record into the database with the provided name and user ID
      await ctx.db.insert(posts).values({
        name: input.name,
        createdById: ctx.session.user.id, // Associate the post with the currently logged-in user
      });
    }),

  // A public procedure for generating ideas using Google Generative AI
  generateIdea: publicProcedure
    .input(z.object({
      schoolName: z.string(), // School name as a string
      hackathonName: z.string(), // Hackathon name as a string
      grade: z.string(), // Grade as a string
      techStack: z.string(), // Technology stack as a string
      challenges: z.string(), // Challenges as a string
    }))
    .mutation(async ({ input }) => {
      // Combine user input with predefined descriptions for the API request
      const requestData = {
        descriptions,
        userInput: input, // User-provided data
      };

      // Call the Google Gemini API to generate content
      let response: any;
      try {
        console.log("Request data:", requestData); // Log the request data for debugging
        const prompt = JSON.stringify(requestData); // Prepare the API prompt
        response = await model.generateContent(prompt); // Make the API call
        const responseText = await response.response.text(); // Extract response text
        console.log(responseText); // Log the API response for debugging

        return responseText; // Return the generated content
      } catch (err) {
        console.error(err); // Log any errors
        return { error: 'Failed to fetch data from the Gemini API.' }; // Return an error message
      }
    }),
});
