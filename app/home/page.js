import HomePage from '../aaContainer/HomePage/HomePage'
import CalendarPopup from '../../component/Calendar/CalendarPopup';
import Link from 'next/link';
// import dynamic from "next/dynamic";

// const CalendarPopup = dynamic(() => import("../../components/CalendarPopup"), {
//   ssr: false
// });

const Home = () => {
  return (
    <>
      <HomePage />
      <div>
        <Link href='https://calendly.com/sehatnutrition/30min'>
          <CalendarPopup />
        </Link>
      </div>
    </>
  );
};

export default Home;
