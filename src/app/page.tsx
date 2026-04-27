import Link from 'next/link';
import { client } from '../sanity/lib/client';
import { urlFor } from '../sanity/lib/image';

export const revalidate = 0; // Para que muestre los cambios inmediatamente

interface Product {
  _id: string;
  name: string;
  price: number;
  image: any;
}

export default async function HomePage() {
  const products = await client.fetch<Product[]>(`*[_type == "product"] { _id, name, price, image }`);

  return (
    <main className="min-h-screen bg-zinc-50 flex flex-col items-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full space-y-12">
        
        {/* Encabezado */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900">
            Nuestra Colección
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-zinc-500">
            Descubre piezas únicas diseñadas para destacar. Calidad premium y diseño minimalista.
          </p>
        </div>

        {/* Lista de productos o estado vacío */}
        {products.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 space-y-6 bg-white rounded-[2rem] shadow-sm border border-zinc-100">
            <h2 className="text-2xl sm:text-3xl font-medium text-zinc-400">
              Próximamente más productos
            </h2>
            <p className="text-zinc-500">Estamos preparando algo increíble para ti.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div 
                key={product._id} 
                className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[4/5] bg-zinc-100 overflow-hidden">
                  {product.image ? (
                    <img 
                      src={urlFor(product.image).url()} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-zinc-300 bg-zinc-100">
                      Sin imagen
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 leading-tight">
                      {product.name}
                    </h3>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-lg font-medium text-zinc-500">
                      ${product.price}
                    </span>
                    <button className="px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 bg-zinc-900 rounded-full hover:bg-zinc-800 focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900">
                      Ver detalle
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
      </div>
    </main>
  );
}
