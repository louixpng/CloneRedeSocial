import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import Avatar from "./Avatar"
import Comment from "./Comment"

interface Author {
    avatarUrl: string,
    name: string,
    role: string;
}

interface Content {
    type: 'paragraph' | 'link',
    content: string;
}

export interface Posts {
    id: number,
    author: Author, 
    content: Content[];
}

interface PostProps {
    post: Posts;
}

export default function Post({ post }: PostProps) {

    const [comments, setComments] = useState(['Muito massa!']);
    const [newCommentText, setNewCommentText] = useState('');

    function handleCommentSubmit(event: FormEvent) {
        event.preventDefault();

        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentContent(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function deleteComment(commentToDelete: string) {
        const allExistentCommentsList = comments.filter(comment => {
            return commentToDelete != comment;
        })
        setComments(allExistentCommentsList);
    }

    function handleInvalidComment(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Preencha o campo!')
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className="p-6 border-purple-l border-2 rounded-md mb-4 bg-cream-st-white">
            <header className="flex flex-row items-center justify-between">
                <div className="flex gap-4 items-center">
                    <Avatar src={post.author.avatarUrl} />
                    <div className="flex flex-col">
                        <strong className="font-bold text-lg">{post.author.name}</strong>
                        <span className="sm:text-sm md:text-md font-medium sm:overflow-hidden">{post.author.role}</span>
                    </div>
                </div>

                <time className="text-sm">há 1h</time>
            </header>

            <div className="mt-6 leading-10">
                {post.content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p key={line.content} className="text-purple-l font-bold hover:text-purple-600"><a href={line.content}>{line.content}</a></p>
                    }
                })}
            </div>

            <div className="flex mt-4 border-t border-purple-l"></div>

            <footer>
                <p className="mt-6 text-sm font-semibold">Deixe seu comentário:</p>
                <form onSubmit={handleCommentSubmit}>
                    <textarea name="comment" value={newCommentText} onChange={handleNewCommentContent} onInvalid={handleInvalidComment} required className="p-4 my-4 text-sm w-full h-24 border-2 border-purple-l focus:border-purple-600 focus:outline-none rounded-md bg-cream-st-white resize-none placeholder-gray-400 placeholder:text-sm" placeholder="Comente aqui" />
                    <button type="submit" disabled={isNewCommentEmpty} className="bg-purple-l transition-colors hover:bg-purple-600 rounded-md py-2 px-8 text-cream-st-white font-semibold disabled:opacity-75 disabled:cursor-not-allowed">Enviar</button>
                </form>

                {comments.map(comment => {
                    return (
                        <Comment
                            key={comment}
                            commentContent={comment}
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </footer>
        </article>
    )
}