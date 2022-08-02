import React from "react";
import Link from "next/link";


import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://user-images.githubusercontent.com/47992691/176894686-611ff20c-1530-4c1b-a78f-0f9928a3b580.jpg')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    قصتكم تبدأ معنا
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    مغامرات - تحديات - حياة الخلاء
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-flag"></i>
                    </div>
                    <h6 className="text-xl font-semibold">حب الوطن</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      توعية الكشاف حول أهمية حب الوطن و تقديس تحية العلم في
                      المخيمات و الرحلات
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      <i className="fas fa-campground"></i>
                    </div>
                    <h6 className="text-xl font-semibold">مخيمات عالمية</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      تنظيم مخيمات و رحلات في كامل تراب الجمهورية
                      <br />و المشاركة في المخيمات العالمية
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i class="fas fa-atom"></i>
                    </div>
                    <h6 className="text-xl font-semibold">تعلم متواصل</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      من خلال ورشات تكوينية في مختلف المجالات
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold text-right leading-normal">
                العمل معنا متعة
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-right text-blueGray-600">
                ينظم فوج المروج 1 أنشطة سنوية مختلفة من أجل التعريف بالحركة الكشفية و عبر ذلك : مساعدة أبناء المنطقة، توعية الشباب من خلال توكيلهم مسؤوليات مناسبة لعمرهم
                </p>
                <Link href="/activities">
                  <a href="/activities" className="font-bold text-blueGray-700 mt-8">
                  ! زورو صفحة الأنشطة
                  </a>
                </Link>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                  <img
                    alt="..."
                    src="https://user-images.githubusercontent.com/47992691/177042379-3ffd76aa-0cb9-4978-8870-e40069948665.jpg"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-blueGray-700 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                    صورة من مخيم الربيع 2022 في زغوان 
                    </h4>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://user-images.githubusercontent.com/47992691/182466856-9f4c7e66-c92b-4048-bec6-33cfb4847177.jpg"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blueGray-200">
                    <i className="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">مرحبا بالجميع</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  كل الفئات العمرية مرحب بها بالكشافة التونسية
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                          الأشبال و الزهرات : من 6 إلى 12 سنة
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                          الكشافة و المرشدات : من 12 إلى 18 سنة 
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                          الجوالة و الدليلات : من 18 سنة
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">إطار الفوج</h2>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                  : كل أنشطتنا تحت تنظيم و مسؤولية إطارنا الكفؤ المتكون من
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 px-4">
                <div className="flex flex-col items-center">
                  <img
                    alt="..."
                    src="/img/team/raouf-ayouni-scouts.jpg"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">رؤوف العيوني</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                    قائد الفوج  
                    </p>
                    
                  </div>
                </div>
              </div>
              <div className="w-full md:w-5/12 lg:w-4/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="/img/team/hassen-zellit-scouts.jpg"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">حسان الزليط</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      قائد فرقة أشبال البساتين
                    </p>
                    
                  </div>
                </div>
              </div>
              <div className="w-full md:w-5/12 lg:w-4/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="/img/team/aziz-brb-scouts.jpg"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">عزيز بن رابح</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                    قائد فرقة صلاح الدين الأيوبي 5  
                    </p>
                    
                  </div>
                </div>
              </div>
              <div className="w-full md:w-5/12 lg:w-4/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="/img/team/raouia-bouchriha-scouts.jpg"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">راوية بوشريحة</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      قائدة فرقة المرشدات
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 relative block bg-blueGray-800">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          
        </section>
        
      </main>
      <Footer />
    </>
  );
}
