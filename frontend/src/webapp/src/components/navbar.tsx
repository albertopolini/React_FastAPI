import { Link } from 'react-router-dom';

function NavBar (){
    return (
    <nav className="bg-gray-800 mb-10">
        <div className="items-center max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
    
            </div>
            <div className="flex flex-1 items-center justify-center">
                <div className="flex flex-shrink-0 items-center">
                </div>
                <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                <Link to="/" className="rounded-md px-3 py-2 text-sm font-medium text-white">Riepilogo Rose</Link>
                <Link to="/asta-giocatore" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Asta Giocatore</Link>
                <Link to="/dettaglio-giocatore" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Dettaglio Giocatore</Link>
                <Link to="/dettaglio-squadra" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Dettaglio Squadra</Link>
                <Link to="/lista-giocatori" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Lista Giocatori</Link>
                <Link to="/suggerisci-giocatore" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Suggerisci Giocatore</Link>

                </div>
                </div>
            </div>
            </div>
        </div>
        </nav>
    )
}

export default NavBar;