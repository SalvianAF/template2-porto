import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/navbar';
import Layout from '../components/layout';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Navbar/>
      
      <Layout>
      <Head>
        <title>Template 2 porto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <div className={`${styles.section} ${styles.home}`}>
          <h1 className={styles['home-title-back']}>SOCIAL MEDIA SPECIALIST</h1>
          <div className={styles['container-rectangle']}>
            <div className={styles['rectangles']}>
              <div className={`${styles.rectangle} ${styles.stack1}`}></div>
              <div className={`${styles.rectangle} ${styles.stack2}`}></div>
              <div className={`${styles.rectangle} ${styles.stack3}`}></div>
            </div>
          </div>
          <h1 className={styles['home-title-front']}>SOCIAL MEDIA SPECIALIST</h1>
          <div className={styles['home-footer']}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor felis nulla, iaculis auctor magna facilisis in.</p>
          <div className={styles.circle}></div>
          </div>
        </div>
        
        <div className={`${styles.section} ${styles.team}`}>
          <div className={styles['team-title']}>
              <h2>MEET&nbsp; <span className={styles['txt-bg-black']}>OUR TEAM</span></h2>
          </div>
          <div className={styles.members}>
            <div className={styles.member}>
              <Image
                src="/images/man-pict.jpg" // Route of the image file
                height={200} // Desired size with correct aspect ratio
                width={200} // Desired size with correct aspect ratio
                alt="Default"
                className={styles['profile-pict']}
               />
               <h3 className={styles['profile-role-back']}>CREATIVE DIRECTOR</h3>
               <h3 className={`${styles['profile-role-front']} ${styles.left}`}>CREATIVE DIRECTOR</h3>
               <p className={styles['desc-role']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non eleifend augue.</p>
            </div>
            <div className={styles.member}>
              <Image
                src="/images/man-pict.jpg" // Route of the image file
                height={200} // Desired size with correct aspect ratio
                width={200} // Desired size with correct aspect ratio
                alt="Default"
                className={styles['profile-pict']}
               />
               <h3 className={styles['profile-role-back']}>CREATIVE DIRECTOR</h3>
               <h3 className={`${styles['profile-role-front']} ${styles.left}`}>CREATIVE DIRECTOR</h3>
               <p className={styles['desc-role']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non eleifend augue.</p>
            </div>
            <div className={styles.member}>
              <Image
                src="/images/man-pict.jpg" // Route of the image file
                height={200} // Desired size with correct aspect ratio
                width={200} // Desired size with correct aspect ratio
                alt="Default"
                className={styles['profile-pict']}
               />
               <h3 className={styles['profile-role-back']}>CREATIVE DIRECTOR</h3>
               <h3 className={`${styles['profile-role-front']} ${styles.left}`}>CREATIVE DIRECTOR</h3>
               <p className={styles['desc-role']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non eleifend augue.</p>
            </div>
            <div className={styles.member}>
              <Image
                src="/images/man-pict.jpg" // Route of the image file
                height={200} // Desired size with correct aspect ratio
                width={200} // Desired size with correct aspect ratio
                alt="Default"
                className={styles['profile-pict']}
               />
               <h3 className={styles['profile-role-back']}>CREATIVE DIRECTOR</h3>
               <h3 className={`${styles['profile-role-front']} ${styles.left}`}>CREATIVE DIRECTOR</h3>
               <p className={styles['desc-role']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non eleifend augue.</p>
            </div>
          </div>
        </div>
        
        <div className={styles["clients-sec"]}>
          <h3 className={styles["client-title-back"]}>OUR CLIENTS</h3>
              <h3 className={styles["client-title-front"]}>OUR CLIENTS</h3>
          <div className={styles.clients}>
              <div className={styles['client-logos']}>
                <Image
                    src="/images/gojek.png" // Route of the image file
                    height={200} // Desired size with correct aspect ratio
                    width={200} // Desired size with correct aspect ratio
                    alt="Default"
                    className={styles.logo}
                  />
                  <Image
                    src="/images/gojek.png" // Route of the image file
                    height={200} // Desired size with correct aspect ratio
                    width={200} // Desired size with correct aspect ratio
                    alt="Default"
                    className={styles.logo}
                  />
                  <Image
                    src="/images/gojek.png" // Route of the image file
                    height={200} // Desired size with correct aspect ratio
                    width={200} // Desired size with correct aspect ratio
                    alt="Default"
                    className={styles.logo}
                  />
                  <Image
                    src="/images/gojek.png" // Route of the image file
                    height={200} // Desired size with correct aspect ratio
                    width={200} // Desired size with correct aspect ratio
                    alt="Default"
                    className={styles.logo}
                  />
              </div>
          </div>
        </div>
       
       
        <div className={`${styles.section} ${styles.projects}`}>
          <h2>PROJECTS</h2>
          <div className={styles['projects-row']}>

            <div className={styles['projects-col']}>
              <div className={styles['project']}>
                <div className={styles['project-img-container']}>
                  <Image
                    src="/images/project.jpg" // Route of the image file
                    height={300} // Desired size with correct aspect ratio
                    width={300} // Desired size with correct aspect ratio
                    alt="Default"
                    className={styles['project-pict']}
                  />
                  <p className={styles['project-name']}>Lorem Ipsum asdfa</p>
                </div>
                <p className={styles['project-desc']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non eleifend augue.</p>
              </div>

              <div className={`${styles['project']} ${styles['end']}`}>
                <p className={`${styles['project-desc']} ${styles['end']}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non eleifend augue.</p>
                <div className={styles['project-img-container']}>
                  <Image
                    src="/images/project.jpg" // Route of the image file
                    height={300} // Desired size with correct aspect ratio
                    width={300} // Desired size with correct aspect ratio
                    alt="Default"
                    className={`${styles['project-pict']} ${styles['circle']}`}
                  />
                  <p className={styles['project-name']}>Lorem Ipsum asdfa</p>
                </div>
              </div>
            </div>

            <div className={`${styles['projects-col']} ${styles['col-reverse']}`}>
              <div className={styles['project']}>
                <div className={styles['project-img-container']}>
                  <Image
                    src="/images/project.jpg" // Route of the image file
                    height={300} // Desired size with correct aspect ratio
                    width={300} // Desired size with correct aspect ratio
                    alt="Default"
                    className={styles['project-pict']}
                  />
                  <p className={styles['project-name']}>Lorem Ipsum asdfa</p>
                </div>
                <p className={styles['project-desc']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non eleifend augue.</p>
              </div>

              <div className={`${styles['project']} ${styles['end']}`}>
                <p className={`${styles['project-desc']} ${styles['end']}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non eleifend augue.</p>
                <div className={styles['project-img-container']}>
                  <Image
                    src="/images/project.jpg" // Route of the image file
                    height={300} // Desired size with correct aspect ratio
                    width={300} // Desired size with correct aspect ratio
                    alt="Default"
                    className={`${styles['project-pict']} ${styles['circle']}`}
                  />
                  <p className={styles['project-name']}>Lorem Ipsum asdfa</p>
                </div>
              </div>

            </div>
            
          </div>
        </div>

        <div className={`${styles.section} ${styles.contact}`}>
          <div className={styles['contact-text-container']}>
            <div className={styles['contact-tagline']}>
              <h2>LET'S DO SOMETHING</h2>
              <h2 className={styles['inverted-txt']}>GREAT TOGETHER!</h2>
            </div>
            <div className={styles['contact-info']}>
              <p><b>name@mail.com</b></p>
              <p><b>+62 12345678</b></p>
              <p className={styles['contact-web']}><b>www.loremipsum.com</b></p>
            </div>
          </div>
          <div className={styles['contact-img-container']}>
            <Image
              src="/images/man-pict.jpg" // Route of the image file
              height={400} // Desired size with correct aspect ratio
              width={400} // Desired size with correct aspect ratio
              alt="Default"
              className={styles['contact-img']}
              />
              <div className={styles['circle-sm']}></div>
        </div>
        </div>
      </main>

      {/* <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer> */}
    </Layout>
    

    </>
  );
}
