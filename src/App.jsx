import { Container } from './Components/Container';
import { createTheme, MantineProvider } from '@mantine/core';

import './App.css';

import Dashboard from './Pages/Dashboard';
import Header from './Components/Layout/Header';

function App() {
  return (
    <>
      <MantineProvider>
        <div className='bg-hero-pattern bg-cover bg-right-bottom'>
          <Container className='border-b border-white/10 py-6'>
            <Header />
          </Container>
          <Container className='p-36 flex flex-col'>
            <p className='text-white font-bold text-[50px]'>Hi John 👋 </p>
            <span className='text-[16px] font-normal text-white/70'>Here you can see key information about your finances</span>
          </Container>
        </div>
        <div className='bg-gray-50 md:p-8'>
          <Dashboard />
        </div>
      </MantineProvider>
    </>
  );
}

export default App;
