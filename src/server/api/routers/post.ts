import { createTRPCRouter, protectedProcedure, publicProcedure } from "~/server/api/trpc";
import { posts } from "~/server/db/schema";
import { z } from "zod";
import fs from "fs";
import path from "path";
import axios from "axios";
import dotenv from "dotenv";
import { sql } from 'drizzle-orm';

// Load environment variables from .env file
dotenv.config();

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

  getLatest: protectedProcedure.query(async ({ ctx }) => {
    const latestPost = await ctx.db
      .select()
      .from(posts)
      .orderBy(sql`${posts.createdAt} DESC`)
      .limit(1)
      .all();
    return latestPost[0] || null;
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
      const response = await axios.post("https://api.google.com/gemini/generate", requestData, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.GOOGLE_GEMINI_API_KEY}`, // Use the API key from environment variables
        },
      });

      return response.data;
    }),
});
