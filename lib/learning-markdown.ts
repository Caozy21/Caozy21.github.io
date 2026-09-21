// GFM treats unescaped pipes as cell separators, even inside inline math.
// Keep the source files intact while expressing absolute values as TeX commands.
export function prepareLearningMarkdown(content: string): string {
  let fence: { marker: string; length: number } | undefined;
  return content.split('\n').map(line => {
    const marker = line.match(/^ {0,3}(`{3,}|~{3,})(.*)$/);
    if (fence) {
      if (marker && marker[1][0] === fence.marker && marker[1].length >= fence.length && !marker[2].trim()) fence = undefined;
      return line;
    }
    if (marker) {
      fence = { marker: marker[1][0], length: marker[1].length };
      return line;
    }
    if (!/^\s*\|/.test(line)) return line;
    // Inline code examples are literal, even when they contain dollar signs.
    return line.replace(/(`+)[^`]*?\1|\$([^$\n]+)\$/g, match => match.startsWith('`')
      ? match : match.replace(/(?<!\\)\|/g, '\\vert '));
  }).join('\n');
}
