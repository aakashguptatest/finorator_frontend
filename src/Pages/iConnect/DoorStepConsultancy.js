import React from 'react';
import IConnectNavbar from '../../Components/IConnectNavbar';

const DoorStepConsultancy = () => {
  const experts = [
    {
      imageSrc: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000",
      experience: "14 YEARS OF EXPERIENCE",
      name: "PRITAM KUMAR",
      ratings: "⭐⭐⭐⭐⭐",
      ranking: "12",
      address: "AVANTI VIHAR",
      expertise: "AREA OF EXPERTISE - LOAN, M.F , INSURANCE , ETC.",
      visits: "TOTAL NO. OF VISITS : 2100",
      votes: "TOTAL VOTES - 👍 91%",
      fees: "CONSULTANCY FEES - 750 /-",
      designation: "DESIGNATION - AGENT , ADVOCATE , ETC.",
      reviews: "CUSTOMERS - COMMENTS & REVIEWS"
    },
    {
      imageSrc: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000",
      experience: "10 YEARS OF EXPERIENCE",
      name: "MANISH PATEL",
      ratings: "⭐⭐⭐⭐",
      ranking: "18",
      address: "AVANTI VIHAR",
      expertise: "AREA OF EXPERTISE - LOAN, INSURANCE , ETC.",
      visits: "TOTAL NO. OF VISITS : 1470",
      votes: "TOTAL VOTES - 👍 89%",
      fees: "CONSULTANCY FEES - 550 /-",
      designation: "DESIGNATION - AGENT , ADVOCATE , ETC.",
      reviews: "CUSTOMERS - COMMENTS & REVIEWS"
    },
    // Add more expert objects here
  ];
  return (
    <div className='min-h-screen'>
      <div className='w-full '>
        <IConnectNavbar/>
      </div>
      <div className='bg-[#9EC2D8] py-4'>
        <div className='flex mx-8'>
          <input width={20} className='py-2  rounded-2xl' placeholder='Search for location' type="text" />
          <input className='ml-4 py-2 rounded-2xl' placeholder='Search for financial consultant, advisor, agent, or chartered accountant' type="text" />
        </div>
        <div className='flex justify-center mt-2 mx-4'>
          <div className='text-xl mt-3 font-bold mx-8 px-8 text-[#16567B]'>
            Popular Searches :
          </div>
          <div className='bg-[#3E86B0] cursor-pointer rounded-lg mt-2 mx-2 text-xl px-4 py-2 font-bold text-white'>
            Loans
          </div>
          <div className='bg-[#3E86B0] cursor-pointer rounded-lg mt-2 mx-2 text-xl px-4 py-2 font-bold text-white'>
            Mutual Fund
          </div>
          <div className='bg-[#3E86B0] cursor-pointer rounded-lg mt-2 mx-2 text-xl px-4 py-2 font-bold text-white'>
            Stock Trading
          </div>
          <div className='bg-[#3E86B0] cursor-pointer rounded-lg mt-2 mx-2 text-xl px-4 py-2 font-bold text-white'>
            Investment
          </div>
          <div className='bg-[#3E86B0] cursor-pointer rounded-lg mt-2 mx-2 text-xl px-4 py-2 font-bold text-white'>
            Income Tax Filling
          </div>
        </div>
      </div>
      <div>
        {experts.map((expert, index) => (
          <div key={index} className='bg-[#9EC2D8] flex py-4 my-8 mx-8 rounded-xl'>
            <div className='px-4'>
              <img className='' height={220} width={240} src={expert.imageSrc} alt='' />
              <div className='my-4 text-xl bg-[#3D86B0] px-4 py-2 font-bold text-white'>{expert.experience}</div>
            </div>
            <div>
              <div className='flex mx-4'>
                <div className='mx-4 my-2 rounded-lg text-md bg-[#3D86B0] px-4 py-2 font-bold text-white'>NAME : {expert.name}</div>
                <div className='mx-4 my-2 rounded-lg text-md bg-[#3D86B0] px-4 py-2 font-bold text-white'>RATINGS {expert.ratings}</div>
                <div className='mx-4 my-2 rounded-lg text-md bg-[#3D86B0] px-4 py-2 font-bold text-white'>OVERALL RANKING : {expert.ranking}</div>
              </div>
              <div className='flex mx-4'>
                <div className='mx-4 my-2 rounded-lg text-md bg-[#3D86B0] px-4 py-2 font-bold text-white'>ADDRESS : {expert.address}</div>
                <div className='mx-4 my-2 rounded-lg text-md bg-[#3D86B0] px-4 py-2 font-bold text-white'>{expert.expertise}</div>
              </div>
              <div className='flex mx-4'>
                <div className='mx-4 my-2 rounded-lg text-md bg-[#3D86B0] px-4 py-2 font-bold text-white'>{expert.visits}</div>
                <div className='mx-4 my-2 rounded-lg text-md bg-[#3D86B0] px-4 py-2 font-bold text-white'>{expert.votes}</div>
                <div className='mx-4 my-2 rounded-lg text-md bg-[#3D86B0] px-4 py-2 font-bold text-white'>{expert.fees}</div>
              </div>
              <div className='flex mx-4'>
                <div className='mx-4 my-4 rounded-lg text-md bg-white border-[#3D86B0] border-4 px-4 py-2 font-bold text-[#3D86B0]'>{expert.designation}</div>
                <div className='mx-4 my-4 rounded-lg text-md bg-white border-[#3D86B0] border-4 px-4 py-2 font-bold text-[#3D86B0]'>{expert.reviews}</div>
              </div>
            </div>
            <div className='items-center mt-8'>
              <div className='mx-2 my-2 rounded-2xl text-xl text-center cursor-pointer bg-[#16567B] px-2 py-2 font-bold text-white'>BOOK NOW</div>
              <div className='flex mx-4'>
                <div className='mx-2 text-center rounded-xl cursor-pointer text-md bg-[#16567B] px-3 py-2 font-bold text-white'>DATE</div>
                <div className='mx-2 text-center rounded-xl cursor-pointer text-md bg-[#16567B] px-3 py-2 font-bold text-white'>TIMING</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DoorStepConsultancy;