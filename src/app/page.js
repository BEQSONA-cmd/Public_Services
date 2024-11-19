import FilterModal from '@/components/Body/FilterModal';
import FilterContainer from '@/components/Body/FilterContainer';
import DataTable from '@/components/Body/DataTable';

export default function Home() {
  return (
    <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 flex justify-center">
      <div className="max-w-screen-lg w-full">
        <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Data Page</h1>
        {/* <FilterContainer>
          <FilterModal />
        </FilterContainer> */}
        <DataTable />
      </div>
    </div>
  );
}