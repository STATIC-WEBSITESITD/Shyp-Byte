import type { FC, ReactNode } from "react";
import type { BlogBlock } from "../types/blog";

function RichText({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  const pattern = /\*\*(.+?)\*\*/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    nodes.push(<strong key={key}>{match[1]}</strong>);
    key += 1;
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return <>{nodes}</>;
}

const BlogContent: FC<{ blocks: BlogBlock[] }> = ({ blocks }) => {
  return (
    <div className='blog-article'>
      {blocks.map((block, index) => {
        if (block.type === "h2") {
          return (
            <h2 key={index} className='h4 fw-semibold tw-mt-6 tw-mb-3'>
              {block.text}
            </h2>
          );
        }

        if (block.type === "h3") {
          return (
            <h3 key={index} className='h5 fw-semibold tw-mt-5 tw-mb-2'>
              {block.text}
            </h3>
          );
        }

        if (block.type === "ul") {
          return (
            <ul key={index} className='blog-article__list'>
              {block.items.map((item) => (
                <li key={item}>
                  <RichText text={item} />
                </li>
              ))}
            </ul>
          );
        }

        const isSteps = block.text.includes("→");
        const isCta =
          /^\*\*(Planning to|Ready to|Sending Diwali)/.test(block.text);

        return (
          <p
            key={index}
            className={
              isCta
                ? "blog-article__cta"
                : isSteps
                  ? "blog-article__steps"
                  : "tw-text-body tw-leading-relaxed tw-mb-5"
            }
          >
            <RichText text={block.text} />
          </p>
        );
      })}
    </div>
  );
};

export default BlogContent;
