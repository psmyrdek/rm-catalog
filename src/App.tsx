import { useStatus } from '@featurevisor/react';
import { Outlet } from 'react-router-dom';

const App = () => {
  const { isReady } = useStatus();

  return (
    <div>
      <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
        <h1 className="text-xl font-bold text-center">🚀 Rick and Morty!</h1>
      </div>
      {isReady && <Outlet />}
    </div>
  );
};

export default App;
