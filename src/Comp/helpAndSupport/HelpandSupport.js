import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import "./styles.css"; // Import the CSS file for transitions and effects
import Sidebar from "../MF/Sidebar/Sidebar";
import MfNavbar from "../MF/nabarmf/MfNavbar";
const HealAndSupportPage = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const data = {
    title: "FAQ (How it works)",
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
    timingFunc: "ease",
  };

  const config = {
    animate: true,
    // arrowIcon: "V",
    tabFocus: true,
  };

  return (
    <>
    <MfNavbar/>
    <Sidebar />
    <div className="flex flex-col justify-center items-center min-h-screen py-12">
      {/* <section className="w-full max-w-2xl bg-white rounded-lg p-6"> */}
      <div>
        <div className="text-2xl border-t-4 border-b-4 py-4 font-bold mb-3">
          HOW CAN WE HELP YOU?
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center m-4 space-x-6 p-6 rounded-lg">
        <div className="w-full sm:w-auto rounded-lg mb-3 bg-[#EEEEEE] bg-opacity-60 text-white p-6">
          <div className="text-lg bg-[#DF8744] text-center px-4 py-2 rounded-2xl text-white font-bold mb-2">
            Send Query
          </div>
          <div className="mt-4">
            <div className="text-[#000000] px-4 text-opacity-50 py-0 text-center font-bold">
              If you have any concerns,
            </div>
            <div className="text-[#000000] px-4 py-0 text-opacity-50 text-center font-bold">
              you may send us a query
            </div>
            <div className="text-center mt-8">
              <a href="/">View Registered Queries</a>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-auto rounded-lg mb-3 bg-[#EEEEEE] bg-opacity-60 text-white p-6">
          <div className="text-lg bg-[#DF8744] text-center px-4 py-2 rounded-2xl text-white font-bold mb-2">
            Give Suggestion
          </div>
          <div className="mt-4">
            <div className="text-[#000000] px-4 text-opacity-50 py-0 text-center font-bold">
              Drop us a line about what
            </div>
            <div className="text-[#000000] px-4 py-0 text-opacity-50 text-center font-bold">
              you'd like us to change
            </div>
            <div className="text-center mt-8">
              <a href="/">View Posted Suggestions</a>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-auto rounded-lg mb-3 bg-[#EEEEEE] bg-opacity-60 text-white p-6">
          <div className="text-lg bg-[#DF8744] text-center px-4 py-2 rounded-2xl text-white font-bold mb-2">
            Help/Demo Videos
          </div>
          <div className="mt-4">
            <div className="text-[#000000] px-4 text-opacity-50 py-0 text-center font-bold">
              Click below to refer any
            </div>
            <div className="text-[#000000] px-4 py-0 text-opacity-50 text-center font-bold">
              help/ demo video
            </div>
            <div className="text-center mt-8">
              <a href="/">View Registered Queries</a>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-11">
        <Faq data={data} styles={styles} config={config} />
      </div>

      {/* </section> */}
    </div></>
  );
};

export default HealAndSupportPage;
