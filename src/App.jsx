export default function App() {
    function login(){
        alert("Login Executado!")
    }
    return (
        <div className="w-full h-screen bg-[url('../public/bg-netflix.jpg')]">
            <div className="w-full h-full bg-black/50 flex items-center justify-center relative ">
                <img src="/logo-netflix.svg" alt="" width="200px" className="absolute top-5 left-[250px]" />
                <div className="w-[500px] h-auto min-h-[400px] bg-black/70 py-[30px] px-[60px]">
                <h1 className="font-bold text-[30px]">Sign in</h1>
                <form 
                onSubmit={login}
                 className="flex flex-col gap-[10px] mt-[20px]">
                    <input 
                    type="email"
                     placeholder="Email address"
                     className="w-full h-[40px] bg-[#2727276a] border border-gray-400 pl-4"
                     />
                     <input 
                     type="password"
                      placeholder="Password"
                      className="w-full h-[40px] bg-[#2727276a] border border-gray-400 pl-4"
                     />
                     <button type="submit" className="w-full h-[40px] bg-[#E50816] rounded-sm border-nome font-bold">
                        Sign in
                     </button>


                </form>

                </div>
            </div>
        </div>
    )
}