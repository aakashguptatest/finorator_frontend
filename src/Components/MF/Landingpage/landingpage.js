import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

import './landingpage.css';
import SidebarL from '../../../Pages/SidebarL';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import SliderSegment from '../../Home/Sliderhome';
import Downloads from '../../../Pages/Downloads';
import Blogs from '../../../Pages/blogs';
import ProfilePage from './ProfileSection';

function Landingpage() {

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
  marginLeft: 200,
   bgColor: 'white',
  rowTitleColor: "Black",
  rowContentColor: 'grey',

  // arrowColor: "red",
  zIndex: -1000
};

const config = {
  animate: true,
  tabFocus: true
};

  const username = "Aditya";
  return (
    <div>
    <SidebarL />
    <div className="Landingpage">
      <section className="welcome"> 
      <ProfilePage/>
 </section>

      
      <section style={{marginLeft: "30"}}>
      <Faq 
                data={data}
                styles={styles}
                config={config}
            />
      </section>
      <section id='Segment' style={{zIndex: 0}} >    <SliderSegment/>
</section>
<section id='blogs'>    <Blogs/>
</section>
<section id = 'downloads'>    <Downloads/>
</section>

    </div></div>
  );
}

export default Landingpage;
