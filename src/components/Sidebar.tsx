import Avatar from "./Avatar";

export default function Sidebar() {
    return (
        <aside className="flex flex-col items-center bg-cream-st-white rounded-lg overflow-hidden border-2 border-purple-l">
            <img src="https://images6.alphacoders.com/132/1324262.jpeg" className="w-full h-[86px] object-cover filter grayscale-[60%]"></img>

            <div className="flex flex-col items-center -mt-8">
                <Avatar src='https://github.com/louixpng.png' />
                <strong className="text-lg font-bold text-purple-l mt-2">Luís Silvestre</strong>
                <span className="text-sm text-purple-l font-medium">Desenvolvedor Web</span>
            </div>

            <footer className="border-t-[1px] mt-4 border-purple-l">
                <a href="#">
                    <button className="flex flex-row justify-center gap-2 my-4 p-4 w-56 border-2 text-purple-l border-purple-l rounded-md hover:bg-purple-l hover:text-cream-st-white hover:transition-colors">
                        <svg className="w-6 fill-none hover:fill-cream-st-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.9" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                        Editar seu perfil
                    </button>
                </a>
            </footer>

        </aside>
    )
}