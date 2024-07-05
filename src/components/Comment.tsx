import { useState } from "react";
import Avatar from "./Avatar";

interface CommentProps {
    commentContent: string,
    onDeleteComment: (comment: string) => void;
}

export default function Comment({ commentContent, onDeleteComment }:CommentProps) {

    const [numberOfLikes, setNumberOfLikes] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(commentContent);
    }

    function giveLikes() {
        setNumberOfLikes((state) => {
            return state + 1;
        })
    }
    return (
        <div className="flex flex-col mt-8 gap-4">
            <div className="flex gap-4">
                <Avatar src="https://github.com/rafafigueiroa.png" borderStyles="w-12 h-12 rounded-md" />
                <div className="p-4 w-full bg-purple-l rounded-md text-cream-st-white">
                    <header className="flex flex-row ml-2 justify-between items-center">
                        <div className="flex flex-col">
                            <p className="text-sm font-semibold">Rafael Martins</p>
                            <span className="text-sm">Desenvolvedor C#</span>
                        </div>

                        <div className="flex flex-row items-center">
                            <time className="text-[8px] md:text-[12px] mr-2">Cerca de 1h</time>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                                </svg>
                            </button>
                            <button onClick={handleDeleteComment} className="hover:text-red-400 hover:transition-colors">
                                <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </button>
                        </div>
                    </header>

                    <div className="p-2 mt-2 text-sm font-normal leading-7">
                        <p>{commentContent}</p>
                    </div>
                </div>
            </div>
            <footer className="flex justify-start -mt-1 ml-16 gap-2 text-purple-l">
                <button onClick={giveLikes} className="text-sm flex items-center gap-2">
                    <svg className="fill-cream-st-white stroke-purple-l w-5 hover:scale-110 hover:fill-purple-l  focus:fill-purple-l hover:transition-colors" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                    </button>
                    <p className="text-sm">Likes <span>● {numberOfLikes}</span></p>
            </footer>
        </div>
    )
}