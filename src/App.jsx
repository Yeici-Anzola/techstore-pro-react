import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

function App() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-10 flex flex-col gap-10">
    <Navbar />

    <section className="grid grid-cols-1 gap-6">
      {/* Targeta 1 */}
      <div className="flex flex-col gap-2 p-4 rounded-xl shadow-md bg-white">
          <img src="https://exitocol.vtexassets.com/arquivos/ids/35288332/300-WIRELESS-COMPACT-MOUSE-WW-1011894_a.jpg?v=639250945488930000" className="rounded-lg" alt="Mouse Inalámbrico" />
          <h3 className="font-bold text-lg">Mouse Inalámbrico</h3>
          <p className="text-texto-dim text-sm">Mouse ergonómico, conexión Bluetooth</p>
          <p className="text-verde font-extrabold">$89.900</p>
        </div>
       {/* Tarjeta 2 */}
        <div className="flex flex-col gap-2 p-4 rounded-xl shadow-md bg-white">
          <img src="https://exitocol.vtexassets.com/arquivos/ids/29878779/teclado-mecanico-premium.jpg?v=638920764629730000" className="rounded-lg" alt="Teclado Mecánico" />
          <h3 className="font-bold text-lg">Teclado Mecánico</h3>
          <p className="text-texto-dim text-sm">Switches azules, retroiluminado RGB</p>
          <p className="text-verde font-extrabold">$149.900</p>
        </div>
      {/* Tarjeta 3 */}
        <div className="flex flex-col gap-2 p-4 rounded-xl shadow-md bg-white">
          <img src="https://exitocol.vtexassets.com/arquivos/ids/24798965/monitor-hp-24-pulgadas-ultrafino-ips-full-hd-100-hz-524sf.jpg?v=638622918979830000" className="rounded-lg" alt="Monitor 24 pulgadas" />
          <h3 className="font-bold text-lg">Monitor 24"</h3>
          <p className="text-texto-dim text-sm">Full HD, 75Hz, panel IPS</p>
          <p className="text-verde font-extrabold">$899.900</p>
        </div> 
    </section>
    <section className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    </section>
    <Footer />


    </main>
    
  )
}

export default App;

