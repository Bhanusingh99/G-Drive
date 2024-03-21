
export default function Home() {
  return (
    <main className="w-full h-screen bg-blue-500 pt-16 text-white">

     <div className="w-full h-[100%] bg-[#222] flex">

      <div className="w-[18%] h-[100%] bg-blue-500">
        <p>sidebar</p>
      </div>
      
      <div className="w-[82%] h-[100%] bg-green-600">
        <p>Main content</p>
      </div>

      </div> 

    </main>
  );
}
