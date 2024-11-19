import DataTable from '@/components/Body/DataTable';
import FilterContainer from '@/components/Body/FilterContainer';
import FilterModal from '@/components/Body/FilterModal';
import { useLanguage } from '@/components/contexts/LanguageContext.js';

export default function Home() {

  const lang = "EN";
  // const { lang } = useLanguage();

  return (
    <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 flex justify-center">
      <div className="max-w-screen-lg w-full">
        <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100"
        > { lang === "EN" ? "Public Services" : "საჯარო სერვისები" }</h1>
        
        <FilterContainer />
        <DataTable />
      </div>
    </div>
  );
}
