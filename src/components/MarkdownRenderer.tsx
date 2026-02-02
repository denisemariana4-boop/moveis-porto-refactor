import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

/**
 * Renderizador simples de Markdown para HTML
 * Suporta: headings, bold, italic, links, listas, código
 * Links internos usam React Router para navegação sem reload.
 */
export const MarkdownRenderer = ({ content, className = "" }: MarkdownRendererProps) => {
  const navigate = useNavigate();

  const renderMarkdown = (text: string): string => {
    let html = text;

    // Escape HTML para segurança (exceto as tags que vamos criar)
    html = html
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // Headings (h2, h3, h4)
    html = html.replace(/^#### (.+)$/gm, '<h4 class="text-lg font-semibold mt-6 mb-3">$1</h4>');
    html = html.replace(/^### (.+)$/gm, '<h3 class="text-xl font-semibold mt-8 mb-4">$1</h3>');
    html = html.replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold mt-10 mb-4">$1</h2>');

    // Bold e Italic
    html = html.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>');
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');

    // Links internos (começam com /) — marca com data-internal para captura no click handler
    html = html.replace(
      /\[([^\]]+)\]\((\/[^)]+)\)/g,
      '<a href="$2" data-internal="true" class="text-primary hover:underline">$1</a>'
    );
    // Links externos
    html = html.replace(
      /\[([^\]]+)\]\((https?:[^)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">$1</a>'
    );

    // Listas não ordenadas
    html = html.replace(/^- (.+)$/gm, '<li class="ml-6 list-disc">$1</li>');
    
    // Agrupar itens de lista
    html = html.replace(
      /(<li[^>]*>.*<\/li>\n?)+/g,
      '<ul class="my-4 space-y-2">$&</ul>'
    );

    // Listas ordenadas (1. 2. 3.)
    html = html.replace(/^\d+\. (.+)$/gm, '<li class="ml-6 list-decimal">$1</li>');

    // Código inline
    html = html.replace(/`([^`]+)`/g, '<code class="bg-muted px-1 py-0.5 rounded text-sm">$1</code>');

    // Blocos de código
    html = html.replace(
      /```(\w*)\n([\s\S]*?)```/g,
      '<pre class="bg-muted p-4 rounded-lg overflow-x-auto my-4"><code>$2</code></pre>'
    );

    // Parágrafos (linhas não vazias que não são elementos especiais)
    const lines = html.split("\n");
    const processedLines = lines.map((line) => {
      const trimmed = line.trim();
      if (
        trimmed === "" ||
        trimmed.startsWith("<h") ||
        trimmed.startsWith("<ul") ||
        trimmed.startsWith("<ol") ||
        trimmed.startsWith("<li") ||
        trimmed.startsWith("<pre") ||
        trimmed.startsWith("</")
      ) {
        return line;
      }
      return `<p class="mb-4 leading-relaxed">${line}</p>`;
    });

    html = processedLines.join("\n");

    // Remover parágrafos vazios
    html = html.replace(/<p class="mb-4 leading-relaxed"><\/p>/g, "");
    html = html.replace(/<p class="mb-4 leading-relaxed">\s*<\/p>/g, "");

    return html;
  };

  // Captura clicks em links internos e usa React Router
  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const link = target.closest('a[data-internal="true"]') as HTMLAnchorElement | null;
    if (link) {
      e.preventDefault();
      navigate(link.getAttribute("href")!);
    }
  }, [navigate]);

  return (
    <div 
      className={`prose prose-slate max-w-none ${className}`}
      onClick={handleClick}
      dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
    />
  );
};
