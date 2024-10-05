import { createTRPCRouter, publicProcedure, protectedProcedure } from '~/server/api/trpc';
import { z } from 'zod';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { posts } from '~/server/db/schema';

// Load environment variables from .env file
dotenv.config();

// Initialize the Google Generative AI client
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY as string);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Load descriptions from JSON file in the public folder
const descriptionsPath = path.resolve(process.cwd(), "public", "jsondata.json");
const descriptions = JSON.parse(fs.readFileSync(descriptionsPath, "utf-8"));

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: protectedProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(posts).values({
        name: input.name,
        createdById: ctx.session.user.id,
      });
    }),

  generateIdea: publicProcedure
    .input(z.object({
      schoolName: z.string(),
      hackathonName: z.string(),
      grade: z.string(),
      techStack: z.string(),
      challenges: z.string(),
    }))
    .mutation(async ({ input }) => {
      // Combine user input with descriptions
      const requestData = {
        descriptions,
        userInput: input,
      };

      // Call Google Gemini API
      let response: any;
      try {
        const prompt = JSON.stringify(requestData);
        response = await model.generateContent(prompt);
        console.log(response.response.text());

        // Extract relevant information from the response
        const ideas = response.response.text().map((idea: any) => ({
          name: idea.name,
          reason: idea.reason,
        }));

        return ideas;
      } catch (err) {
        console.error(err);
        return { error: 'Failed to fetch data from the Gemini API.' };
      }
    }),
});