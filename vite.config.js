import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "mock-contact-api",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === "/api/contact" && req.method === "POST") {
            let body = "";
            req.on("data", (chunk) => {
              body += chunk;
            });
            req.on("end", () => {
              res.writeHead(200, { "Content-Type": "application/json" });
              res.end(JSON.stringify({ ok: true, message: "Message received" }));
            });
            return;
          }
          next();
        });
      },
    },
  ],
  server: {
    port: 5173,
    host: true,
  },
});
