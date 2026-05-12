import "@/styles/blog-content.css";

interface ArticleBodyProps {
    content: string;
}

export default function ArticleBody({ content }: ArticleBodyProps) {
    return (
        <div className="max-w-3xl mx-auto">
            <article 
                className="article-content"
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </div>
    );
}
