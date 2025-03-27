import Image from "next/image"

export default function Home() {
    return (
        <main className="flex min-h-[90vh] flex-col items-center justify-center gap-6">
            <p className="italic text-center text-3xl font-italic md:text-5xl lg:text-5xl xl:text-5xl animate-gradient">hola amigos</p>
            <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl animate-gradient text_primary_gradient">
                
                Welcome to TubeFlow
            </h1>
            <div className="text-center w-6/12">
                 <h1 className="text-5xl font-italic md:text-2xl lg:text-2xl xl:text-2xl animate-gradient">
                 Unlock the Power of Collaboration in YouTube Content Creation
          </h1>
                    <br/>
                    
                
                 <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                 Simplify video uploads with robust notification systems and secure features.
               
          </p>
            </div>
        </main>
    )
}
