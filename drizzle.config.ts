import { type Config } from "drizzle-kit"

import { env } from "@/env.mjs"

export default {
  schema: "./src/db/schema.ts",
  driver: "pg",
  out: "./drizzle",
  dbCredentials: {
    connectionString: env.DATABASE_URL,
  },
  tablesFilter: ["shadcn-table_*"],
} satisfies Config
