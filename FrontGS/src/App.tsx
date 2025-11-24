import Cabecalho from "./components/Cabecalho/Cabecalho"
import Rodape from "./components/Rodape/Rodape"
import { lazy, Suspense } from "react";
import { useTheme } from "./hooks/useTheme";

const OutletsPage = lazy(() =>
  import("react-router-dom").then((module) => ({ default: module.Outlet }))
);

export default function App() {
  const { theme } = useTheme();

  return (
    <div className={`flex flex-col min-h-screen ${theme === 'dark' ? 'bg-slate-900 text-slate-200' : 'bg-white text-gray-900'}`}> 
      <Cabecalho />

      <main className="flex-1 w-full">
        <Suspense
          fallback={
            <div className="w-full h-screen flex items-center justify-center">
              <div className="flex flex-col items-center gap-4">
                <div className={`w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin`}></div>
                <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Carregando...</p>
              </div>
            </div>
          }
        >
          <OutletsPage />
        </Suspense>
      </main>

      <Rodape />
    </div>
  );
}