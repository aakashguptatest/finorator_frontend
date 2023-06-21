import React from "react";
import Faq from "react-faq-component";
import "../assets/css/helpandsupport.css"; // Import the CSS file for transitions and effects
import Sidebar from "../Components/MF/Sidebar/Sidebar";
const HealAndSupportPage = () => {

  const data = {
    // title: "FAQ (How it works)",
    rows: [
      {
        title: "Lorem ipsum dolor sit amet,",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
      },
      {
        title: "Nunc maximus, magna at ultricies elementum",
        content:
          "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
      },
      {
        title: "Curabitur laoreet, mauris vel blandit fringilla",
        content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
      },
      {
        title: "What is the package version",
        content: <p>current version is 1.2.1</p>,
      },
    ],
  };
  const styles = {
    // bgColor: 'white',
    titleTextColor: "black",
    rowTitleColor: "black",
    rowContentColor: "grey",
    // arrowColor: "red",
    rowContentPaddingLeft:'16px',
    // rowContentPaddingRight:'16px',
    timingFunc: "ease",
    
  };

  const config = {
    animate: true,
    // arrowIcon: "V",
    tabFocus: true,
  };

  return (
    <>
    <Sidebar />
    <div className="flex flex-col items-center justify-center min-h-screen py-12">
      {/* <section className="w-full max-w-2xl p-6 bg-white rounded-lg"> */}
      <div>
        <div className="py-4 mb-10 text-3xl font-bold border-t-2 border-b-2">
          HOW CAN WE HELP YOU?
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center p-3 m-4 space-x-6 rounded-lg">
        <div className="w-full p-6 mb-3 text-white bg-white rounded-lg sm:w-auto bg-opacity-60">
          <div className="text-lg bg-[#DF8744] text-center px-18 py-2 rounded-2xl text-white font-bold mb-2">
            Send Query
          </div>
          <div className="mt-4">
            <div className="text-[#000000] px-4 text-opacity-50 py-0 text-center font-bold">
              If you have any concerns,
            </div>
            <div className="text-[#000000] px-4 py-0 text-opacity-50 text-center font-bold">
              you may send us a query
            </div>
            <div className="mt-8 text-center">
              <a href="/">View Registered Queries</a>
            </div>
          </div>
        </div>
        <div className="w-full p-6 mb-3 text-white bg-white rounded-lg sm:w-auto bg-opacity-60">
          <div className="text-lg bg-[#DF8744] text-center px-18 py-2 rounded-2xl text-white font-bold mb-2">
            Give Suggestion
          </div>
          <div className="mt-4">
            <div className="text-[#000000] px-4 text-opacity-50 py-0 text-center font-bold">
              Drop us a line about what
            </div>
            <div className="text-[#000000] px-4 py-0 text-opacity-50 text-center font-bold">
              you'd like us to change
            </div>
            <div className="mt-8 text-center">
              <a href="/">View Posted Suggestions</a>
            </div>
          </div>
        </div>
        <div className="w-full p-6 mb-3 text-white bg-white rounded-lg sm:w-auto bg-opacity-60">
          <div className="text-lg bg-[#DF8744] text-center px-18 py-2 rounded-2xl text-white font-bold mb-2">
            Help/Demo Videos
          </div>
          <div className="mt-4">
            <div className="text-[#000000] px-4 text-opacity-50 py-0 text-center font-bold">
              Click below to refer any
            </div>
            <div className="text-[#000000] px-4 py-0 text-opacity-50 text-center font-bold">
              help/ demo video
            </div>
            <div className="mt-8 text-center">
              <a href="/">View Registered Queries</a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-3 text-2xl font-bold text-center">
        FAQ's
      </div>
      <div className="px-40">
        <Faq data={data} styles={styles} config={config} />
      </div>

      {/* </section> */}
    </div></>
  );
};

export default HealAndSupportPage;
