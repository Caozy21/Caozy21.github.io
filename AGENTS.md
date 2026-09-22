# Repository instructions

## Learning notes

- When adding or updating a published Markdown note under `content/learning/<category>/`, always create or update the complete English translation under `content/learning/<category>/en/` in the same change unless the user explicitly asks for Chinese only.
- Preserve equations, lists, tables, blockquotes, code, links, and heading structure. Translate prose and text inside LaTeX `\text{...}` blocks, and keep the Chinese original authoritative.
- Use the same lowercase ASCII slug for both files. English frontmatter must include an English `title`, an English `description`, `translation: "AI-assisted English translation"`, and the current SHA-256 `sourceHash` of the complete Chinese file.
- Before publishing, run `npm run verify:learning` and a production build. Do not push a partial, stale, or placeholder translation. If the working model's quota is insufficient, stop with the translation unpublished and report the resumable state.
