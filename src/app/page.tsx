import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8 text-center">
        
        {/* Contenedor principal estilo "Glass/Card" sutil */}
        <div className="space-y-6 bg-white p-8 sm:p-16 rounded-[2rem] shadow-sm border border-zinc-100 transition-all duration-500 hover:shadow-md">
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-zinc-900">
            Eleva tu estilo con <br className="hidden sm:block" />
            <span className="text-zinc-400">nuestra colección.</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-zinc-500">
            Descubre piezas únicas diseñadas para destacar. Calidad premium y diseño minimalista en cada detalle de nuestro catálogo.
          </p>
          
          <div className="pt-8">
            <Link 
              href="/coleccion" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-all duration-300 bg-zinc-900 rounded-full hover:bg-zinc-800 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900"
            >
              Explorar Colección
            </Link>
          </div>
          
        </div>
        
      </div>
    </main>
  );
}
