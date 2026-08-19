/**
 * Reserved for the future WordPress headless integration (Blog).
 *
 * When you're ready:
 * 1. Point WP_API_URL (env var) at your WordPress instance's REST API,
 *    e.g. https://blog.carlosquerales.dev/wp-json/wp/v2
 * 2. Implement fetchPosts()/fetchPostBySlug() below.
 * 3. Rewrite getPosts()/getPostBySlug() in `services/content.js` to call
 *    these instead of a local data file.
 * 4. Nothing outside content.js changes — that's the whole point of the
 *    services/ boundary. See Phase 1 architecture doc, section 9.
 *
 * Not implemented now because there's no Blog route yet — no reason to
 * carry a WordPress client for content that doesn't exist.
 */

export async function fetchPosts() {
  const apiUrl = process.env.WP_API_URL;
  throw new Error(
    `wordpress/client.js: fetchPosts() not implemented yet (WP_API_URL=${apiUrl ?? 'unset'}). See file header.`
  );
}

export async function fetchPostBySlug(/** @type {string} */ slug) {
  throw new Error(
    `wordpress/client.js: fetchPostBySlug("${slug}") not implemented yet. See file header.`
  );
}
