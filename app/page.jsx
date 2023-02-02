import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import { use } from 'react';



export default function Home(props) {
  console.log(props);
  console.log(props.exploreData);
  
  return (
    <>
      <Header />
      <Banner />
      <main>
        <section>
          <h2>Explore Nearby vgjgykuglhi;lui</h2>

          {/* {props.data?.map((item)=> (
            <h1>{item.location}</h1>
          ))} */}
        </section>
        
      </main>
    </>
  )
}

// export const getStaticProps = async () => {
//   const data = await (await fetch('https://www.jsonkeeper.com/b/4G1G')).json();
//   console.log(data);
//   return{
//     props: {
//       data,
//     }
//   }
  
// }
export async function getStaticProps(context) {
  const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G').then(
    (res) => res.json()
  );
console.log(exploreData);
  return {
    props: {
       exploreData,
    }
  }
}
