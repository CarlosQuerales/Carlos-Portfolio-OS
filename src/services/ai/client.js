/**
 * Reserved for the future "Ask Carlos" RAG assistant.
 *
 * When you're ready:
 * 1. Add OPENAI_API_KEY as a server-only env var (never NEXT_PUBLIC_*).
 * 2. Implement askCarlos(question) — embed the question, retrieve relevant
 *    chunks of your own content (data/*.js is a fine source to embed),
 *    call the completion endpoint, return the answer.
 * 3. Call this only from a server route (app/api/ask-carlos/route.js),
 *    never from a client component — keeps the API key server-side.
 *
 * Not implemented now because there's no Ask Carlos route yet.
 */

export async function askCarlos(/** @type {string} */ question) {
  throw new Error(
    `ai/client.js: askCarlos("${question}") not implemented yet. See file header.`
  );
}
