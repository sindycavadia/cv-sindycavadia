import { Inter } from 'next/font/google'
import { Sidebar } from '@/components/Sidebar';

const inter = Inter ({subsets:['latin']})


const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      CenterContent 
     
    </div>
  );
};
 export default Home;
