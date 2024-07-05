import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Post, { Posts } from "./components/Post"

const posts : Posts[]= [
  {
  id: 1,
  author: {
    avatarUrl: "https://github.com/ialeAlmeida.png",
    name: "Iale Almeida",
    role: "Analista de Sistemas"
  },
  content: [
    {type: "paragraph", content:"Tirem o olho do meu esposo!!!"},
    {type: "paragraph", content:"Me segue lá no Github:"},
    {type:"link", content:"https://github.com/ialeAlmeida"}
  ]
},
{
  id: 2,
  author: {
    name: "Rafael Martins",
    avatarUrl: "https://github.com/rafafigueiroa.png",
    role: "Desenvolvedor C#"
  },
  content: [
    {type: "paragraph", content:"RECEBA &"},
    {type: "paragraph", content:"LA ELE &"},
    {type: "paragraph", content:"BORA BILL!!!"},
    {type: "paragraph", content:"Me segue lá no Github:"},
    {type:"link", content:"https://github.com/rafafigueiroa"}
  ]
},
{
  id: 3,
  author: {
    name: "Carol Costa",
    avatarUrl: "https://github.com/carolcaracol.png",
    role: "Desenvolvedora IOS"
  },
  content: [
    {type: "paragraph", content:"AMOOOOOOOOO"},
    {type: "paragraph", content:"Me segue lá no Github:"},
    {type:"link", content:"https://github.com/carolcaracol"}
  ]
},
{
  id: 4,
  author: {
    name: "Nicholas Bergqvist",
    avatarUrl: "https://github.com/NicholasBergqvist.png",
    role: "Desenvolvedor Back-end"
  },
  content: [
    {type: "paragraph", content:"Muito massa, Luis. Bora comprar MM!!!"},
    {type: "paragraph", content:"Me segue lá no Github:"},
    {type:"link", content:"https://github.com/NicholasBergqvist"}
  ]
},
{
  id: 5,
  author: {
    name: "Lorenzo Leão",
    avatarUrl: "https://github.com/LrzoL.png",
    role: "Desenvolvedor Front-end"
  },
  content: [
    {type: "paragraph", content:"Vou processar Rock!!!"},
    {type: "paragraph", content:"Me segue lá no Github:"},
    {type:"link", content:"https://github.com/LrzoL"}
  ]
}
]

export default function App() {
  return (
    <>
      <Navbar />

      <main className="max-w-[70rem] grid md:grid-cols-[262px_1fr] items-start  gap-8 mx-auto my-4 px-8
      sm:grid-cols-1">
        <Sidebar />
        <div>
          {posts.map(post => {
            return (
            <Post
              key = {post.id}
              post={post}
            />
            )
          })}
          </div>
      </main>
    </>
  )
}
