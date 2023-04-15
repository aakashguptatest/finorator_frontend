import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./App.css"

export default function SliderLearnandexplore() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        
            <Carousel.Item>
        <div class="row justify-content-center">
                                            <div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card" >
                                             <a href="https://finoratorandinvestment.blogspot.com/2022/07/make-your-budget-in-4-easy-steps.html" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>How to make a BUDGET in 4 Simple Steps!!</h3>
                                                    </div>
                                                    <div>
                                                       <p class="theme-p px-2 trucket mb-0">Click here to <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://finoratorandinvestment.blogspot.com/2022/07/6-musts-for-your-financial-management.html" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>6 musts for financial management</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">Check this out <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://www.instagram.com/p/Cgezl5ZpM6X/?igshid=YmMyMTA2M2Y=" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>3 master tips to pay off debt like a pro</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">Check this out <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div></div></Carousel.Item>
                                            <Carousel.Item><div class="row justify-content-center">
                                            <div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card" style={{height: "97%"}}>
                                             <a href="https://www.instagram.com/p/CgZ4a5JBp_I/?igshid=YmMyMTA2M2Y=" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>4 reasons to invest in mutual funds</h3>
                                                    </div>
                                                    <div>
                                                       <p class="theme-p px-2 trucket mb-0">Know it now!! <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://www.instagram.com/reel/CgXWh0JBO_9/?igshid=YmMyMTA2M2Y=" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>5 types of stocks you should never trade on</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">Know them now <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://www.instagram.com/p/CgSMNQaNlA-/?igshid=YmMyMTA2M2Y=" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>6 tasks to do before this year ends</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">Do it before 2023!! <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div></div> </Carousel.Item>
                                            <Carousel.Item><div class="row justify-content-center">
                                            <div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card" style={{height: "97%"}}>
                                             <a href="https://www.instagram.com/p/CgPlTv6NPnQ/?igshid=YmMyMTA2M2Y=" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>3 in-demand skills you must learn today</h3>
                                                    </div>
                                                    <div>
                                                       <p class="theme-p px-2 trucket mb-0">Learn these today <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://www.instagram.com/reel/CgKdmgeh3EY/?igshid=YmMyMTA2M2Y=" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>5 money habits you teach your kids</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">Check it out <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://www.instagram.com/p/CgHuPvftmdp/?igshid=YmMyMTA2M2Y=" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>FinoQuote of the day</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">Leran this today <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div></div></Carousel.Item>
                                            <Carousel.Item> <div class="row justify-content-center">
                                            <div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card" style={{height: "97%"}}>
                                             <a href="https://www.instagram.com/p/CgCvxKkhWQ3/?igshid=YmMyMTA2M2Y=" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>FinoFact of the day</h3>
                                                    </div>
                                                    <div>
                                                       <p class="theme-p px-2 trucket mb-0">Know it today. <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://www.instagram.com/p/CgACQ6FN81a/?igshid=YmMyMTA2M2Y=" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>Do I need a Life Insurance</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">Know it now!! <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://www.instagram.com/p/Cf65bEUhMAP/?igshid=YmMyMTA2M2Y=" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>No fails in Stock market</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">Know the truth!! <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div></div>
                                            </Carousel.Item>
                                            <Carousel.Item><div class="row justify-content-center">
                                            <div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card" style={{height: "97%"}}>
                                             <a href="https://www.instagram.com/p/Cf4c7JPh8dy/?igshid=YmMyMTA2M2Y=" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>FinoQuote if the day</h3>
                                                    </div>
                                                    <div>
                                                       <p class="theme-p px-2 trucket mb-0">Get to know this <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://www.instagram.com/p/CfzTFRmtw77/?igshid=YmMyMTA2M2Y=" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>6 musts for your financial management</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">This finotip will take you places <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://www.instagram.com/reel/CfwfOXJjqJD/?igshid=YmMyMTA2M2Y=" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>FinoQuote you must know</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">Tap to read <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div></div>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                            <div class="row justify-content-center">
                                            <div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card" style={{height: "97%"}}>
                                             <a href="https://www.linkedin.com/posts/fi-norator_finances-savings-investments-activity-6953407406064164864-v0Kq?utm_source=linkedin_share&amp;utm_medium=android_app" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>6 ways to refresh your finances</h3>
                                                    </div>
                                                    <div>
                                                       <p class="theme-p px-2 trucket mb-0">Read the blog to know more!! <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://www.instagram.com/reel/Cfo_NOohekC/?igshid=YmMyMTA2M2Y=" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>I am 30+ can I start investing now?</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">Learn from CAs <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://www.instagram.com/p/Cfmc78FhKRa/?igshid=YmMyMTA2M2Y=" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>3 investment rules to live by</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">FinoTip of the day!! <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div></div></Carousel.Item>
                                            <Carousel.Item>
                                            <div class="row justify-content-center">
                                            <div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card" style={{height: "97%"}}>
                                             <a href="https://www.instagram.com/reel/CfhVKVwhpOP/?igshid=YmMyMTA2M2Y=" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>5 skills that will help you earn money through social media</h3>
                                                    </div>
                                                    <div>
                                                       <p class="theme-p px-2 trucket mb-0">Learn them today!! <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://youtube.com/shorts/MfNYrI33osw?feature=share" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>6 soft skills to develop in your 20s</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">Develop them today!! <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://youtube.com/shorts/InC82D7M4ug?feature=share" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>6 highest paying jobs in finance</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">Do you wanna make a successful career in finance, check this out <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div></div></Carousel.Item>
                                            <Carousel.Item><div class="row justify-content-center">
                                            <div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card" style={{height: "97%"}}>
                                             <a href="https://youtube.com/shorts/Re5z1WD1ZVg?feature=share" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>Best podcasts to listen to for personal finance</h3>
                                                    </div>
                                                    <div>
                                                       <p class="theme-p px-2 trucket mb-0">Read this out <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://youtube.com/shorts/DUNawjtdZ-U?feature=share" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>5 social skills for workplace success</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">Develop these skills and skyrocket your career <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://www.instagram.com/p/CfW-t3GtHF_/?igshid=YmMyMTA2M2Y=" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>Finorator compares 35+ insurance companies</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">Check this out!! <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div></div></Carousel.Item>
                                            <Carousel.Item>
                                            <div class="row justify-content-center">
                                            <div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card" style={{height: "97%"}}>
                                             <a href="https://www.instagram.com/p/CfPOKwRpQZc/?igshid=YmMyMTA2M2Y=" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>Tax on Junk food!?</h3>
                                                    </div>
                                                    <div>
                                                       <p class="theme-p px-2 trucket mb-0">Know this FinoFact today!! <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://www.instagram.com/p/CfMr6BUhnYx/?igshid=YmMyMTA2M2Y=" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>7 types of life insurance</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">Here are 7 types of life insurance <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://www.instagram.com/reel/CfKO570hFrJ/?igshid=YmMyMTA2M2Y=" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>Get Insured by following these really simple steps</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">Get insured in 2 mins <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div></div></Carousel.Item><Carousel.Item><div class="row justify-content-center">
                                            <div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card" style={{height: "97%"}}>
                                             <a href="https://www.instagram.com/p/CfHj2wor_CM/?igshid=YmMyMTA2M2Y=" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>FinoQuote of the day</h3>
                                                    </div>
                                                    <div>
                                                       <p class="theme-p px-2 trucket mb-0">Read this now!! <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://youtube.com/shorts/IQeiHCQ0gr4?feature=share" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>5 things you must do before travelling abroad</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">Check this out!! <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://www.instagram.com/p/Ce_1cHPt8Wf/?igshid=YmMyMTA2M2Y=" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>FinoTip of the day!!</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">Life Insurance and tax benefits!! <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div></div></Carousel.Item><Carousel.Item><div class="row justify-content-center">
                                            <div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card" style={{height: "97%"}}>
                                             <a href="https://www.instagram.com/p/Ce9kB-ytbrT/?igshid=YmMyMTA2M2Y=" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>4 money lessons to learn from your father</h3>
                                                    </div>
                                                    <div>
                                                       <p class="theme-p px-2 trucket mb-0">Learn from the real SuperHero!! <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://www.instagram.com/p/CemFXaPBfm2/?igshid=YmMyMTA2M2Y=" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>What is Balloon Mortgage?</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">Check out this finoword now!! <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://www.instagram.com/p/CeeTyLWDiVj/?igshid=YmMyMTA2M2Y=" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>FinoTip of the day!!</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">Make bite size money goals <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div></div></Carousel.Item><Carousel.Item><div class="row justify-content-center">
                                            <div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card" style={{height: "97%"}}>
                                             <a href="https://www.instagram.com/reel/Ceb2ugGB7Ov/?igshid=YmMyMTA2M2Y=" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>5 Money Mistakes to avoid in your 30s</h3>
                                                    </div>
                                                    <div>
                                                       <p class="theme-p px-2 trucket mb-0">Avoid these mistakes and thank yourself later!! <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://www.instagram.com/p/CeWkTXLNHtL/" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>What is Repo Rate</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">Repo Rate is <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://www.instagram.com/p/CeO2A3pDI00/" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>6 best Podcasts on Personal Finance</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">Here are some of the Podcasts <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div></div> </Carousel.Item><Carousel.Item><div class="row justify-content-center">
                                            <div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card" style={{height: "97%"}}>
                                             <a href="https://www.instagram.com/p/CeJvnQWIQsw/" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>What is an Emergency Fund?</h3>
                                                    </div>
                                                    <div>
                                                       <p class="theme-p px-2 trucket mb-0">Emergency fund is <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://www.instagram.com/p/Cd85k6mhIpY/" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>6 highest paying Finance jobs in India</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">Here are some of the highest paying <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://www.instagram.com/p/Cd6UnrHKZ7d/" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>What is TINA?</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">TINA refers to <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div></div> </Carousel.Item><Carousel.Item><div class="row justify-content-center">
                                            <div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card" style={{height: "97%"}}>
                                             <a href="https://www.instagram.com/p/Cd3yxP0hKdX/" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>6 Soft skills to develop in your 20s</h3>
                                                    </div>
                                                    <div>
                                                       <p class="theme-p px-2 trucket mb-0">Here are top 6 <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://www.instagram.com/p/Cd1C571qs4H/" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>What is Credit Rating?</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">Credit Rating refers to <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://www.instagram.com/p/CdoUcNOIq3T/" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>Who are Sandwich generation?</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">. <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div></div> </Carousel.Item><Carousel.Item><div class="row justify-content-center">
                                            <div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card" style={{height: "97%"}}>
                                             <a href="https://www.instagram.com/p/CdlxzKeB4-Y/" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>4 Money traps millennials fall into easily</h3>
                                                    </div>
                                                    <div>
                                                       <p class="theme-p px-2 trucket mb-0">Know the money traps that you fall into easily <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://www.instagram.com/p/CdjLITuIrla/" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>What is Term Life Insurance</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">Still confused? <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://www.instagram.com/p/CdfJ62jJaUF/" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>5 myths about Investing</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">We all have certain myths when it comes to investment <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div></div> </Carousel.Item><Carousel.Item><div class="row justify-content-center">
                                            <div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card" style={{height: "97%"}}>
                                             <a href="https://www.instagram.com/p/CdWNLOkJD12/" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>What is SHRINKFLATION?</h3>
                                                    </div>
                                                    <div>
                                                       <p class="theme-p px-2 trucket mb-0">Is there anything we can do in such a situation?
Not really.
The only way to combat inflation is through proper investment planning and savings.💸
But how do marketing tactics like these affect us?
Being aware of what is happening on a day-to-day basis is very important, as it keeps us prepared and consequently helps us to efficiently manage our finances!
@finorator will come up with such #FINOwords that matter to you, so stay tuned
And Follow for more!! <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://www.instagram.com/p/CdR8J_wpZM6/" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>Happy MOTHER's Day</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">One day is definitely not enough to celebrate motherhood but we can surely make our moms feel special by doing these simple yet thoughtful things🌻❤
A very Happy Mother's Day!!!
#celebrateherdaily <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://www.instagram.com/p/CdOi621hBHe/" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>5 money mistakes to avoid in your 20s</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">In your 20s?
you must be doing some mistakes <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div></div> </Carousel.Item><Carousel.Item><div class="row justify-content-center">
                                            <div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card" style={{height: "97%"}}>
                                             <a href="https://www.instagram.com/p/CdJGilIPbIP/" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>Your Ultimate Savings Checklist</h3>
                                                    </div>
                                                    <div>
                                                       <p class="theme-p px-2 trucket mb-0">Are you doing well with money, find it out here <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://www.instagram.com/p/CdEPrL0Bmma/" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>5 must read BOOKS on personal finance</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">Here are some books to help you out! <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://www.instagram.com/p/Cc0lV2Evv7k/" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>What "NEEDS" really mean in Money Management</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">Let's monitor our thoughts and save one coin at a time!! <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div></div> </Carousel.Item><Carousel.Item><div class="row justify-content-center">
                                            <div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card" style={{height: "97%"}}>
                                             <a href="https://www.instagram.com/p/CcyLCUCh42j/" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>5 Free Sources To learn Stock Market Basics</h3>
                                                    </div>
                                                    <div>
                                                       <p class="theme-p px-2 trucket mb-0">Gain knowledge first and then invest!📚 <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://www.instagram.com/p/CcqGtfHIdr2/" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>This is what FINORATOR does for you</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">Click here to know <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://www.instagram.com/p/CclPWuMJe0P/" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>5 Skills To Learn in 2022</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">Gone are the days of conventional careers here are some new skills you can learn and master in 2022 <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div></div> </Carousel.Item><Carousel.Item><div class="row justify-content-center">
                                            <div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card" style={{height: "97%"}}>
                                             <a href="https://www.instagram.com/p/CccWOUGJbqa/" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>The Save Route For Your Next Trip</h3>
                                                    </div>
                                                    <div>
                                                       <p class="theme-p px-2 trucket mb-0">What are your best travel money-saving tips!?? <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://www.instagram.com/p/CcShXT-Jo3c/" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>5 Money Rules</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">What are the money rules that you follow? <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://www.instagram.com/p/Cbmm2yol4c7/" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>5 questions to ask before buying a stock</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">Planning to invest in stocks? ask these questions first <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div></div> </Carousel.Item><Carousel.Item><div class="row justify-content-center">
                                            <div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card" style={{height: "97%"}}>
                                             <a href="https://finoratorandinvestment.blogspot.com/2022/03/rights-and-duties-of-smart-customer.html" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>Know your rights!!</h3>
                                                    </div>
                                                    <div>
                                                       <p class="theme-p px-2 trucket mb-0">As a policyholder, you have certain rights and duties towards your policy. <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://www.instagram.com/p/CbhGms8pFdZ/" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>5 tips to buy your DREAM house at young age</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">Want to have your own house before you turn 30?
here are some tips <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://finoratorandinvestment.blogspot.com/2022/03/types-of-fire-insurance-and-its-benefits.html" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>Are you Fire Insured?</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">Do you know 25000 people die in India every year because of fire accidents <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div></div></Carousel.Item>
                                            <Carousel.Item><div class="row justify-content-center">
                                            <div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card" style={{height: "97%"}}>
                                             <a href="https://www.instagram.com/p/Cbb1rk6JMaZ/" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>Top 5 series to watch if you are a finance geek!!</h3>
                                                    </div>
                                                    <div>
                                                       <p class="theme-p px-2 trucket mb-0">Do you love watching series based on finance, here are some suggestions <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://finoratorandinvestment.blogspot.com/2022/03/health-insurance-its-types-and-its.html" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>Health Insurance - Types and benefits</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">Health Insurance is the need of the hour <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://finoratorandinvestment.blogspot.com/2022/03/motor-insurance-its-types-and-its.html" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>Motor Insurance - Types and benefits</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">Solve all the doubts you had about motor insurance <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div></div></Carousel.Item>
                                            <Carousel.Item><div class="row justify-content-center">
                                            <div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card" style={{height: "97%"}}>
                                             <a href="https://www.instagram.com/p/CbM-xkaJMot/" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>How will Life Insurance benefit you?</h3>
                                                    </div>
                                                    <div>
                                                       <p class="theme-p px-2 trucket mb-0">There are several benefit of life insurance <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://www.instagram.com/p/Ca6gbaevker/" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>BETTER SAFE THAN SORRY!</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">what do you think, why you should buy Life Insurance? <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://finoratorandinvestment.blogspot.com/2022/03/7-common-mistakes-to-avoid-while.html" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>7 types of Life Insurance you  didn't know about</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">Life Insurance is basically of 2 categories which are further divided into 7 different forms <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div></div></Carousel.Item>
                                            <Carousel.Item><div class="row justify-content-center">
                                            <div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card" style={{height: "97%"}}>
                                             <a href="https://www.instagram.com/p/CbEzaB7p2kj/" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>How do INDIANS spend their money?</h3>
                                                    </div>
                                                    <div>
                                                       <p class="theme-p px-2 trucket mb-0">Interested in knowing where all your salary goes? <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://www.instagram.com/p/Ca_0ulwJmul/" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>Death Claims that Insurance Policies covers and does not cover!</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">Reading the fine prints is the most important thing while buying any insurance policies <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://finoratorandinvestment.blogspot.com/2022/03/7-common-mistakes-to-avoid-while.html" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>7 mistakes to avoid while buying Insurance Policies</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">when planning to buy insurance policies there are some big NOs that you should definitely avoid, know them all. <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div></div> </Carousel.Item><Carousel.Item><div class="row justify-content-center">
                                            <div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card" style={{height: "97%"}}>
                                             <a href="https://www.instagram.com/p/Ca1D4bzpT3N/" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>Finorator wishes all those incredible females out their a Very Happy Women's Day</h3>
                                                    </div>
                                                    <div>
                                                       <p class="theme-p px-2 trucket mb-0">Let's celebrate this women's day by gifting her health insurance. <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://finoratorandinvestment.blogspot.com/2022/03/insurance-introduction-8-major-types-of.html" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>8 Types of Insurance</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">did you know that there are total 8 types of insurance, know them all here. <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://finoratorandinvestment.blogspot." target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>8 Types of Insurance</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">did you know that there are total 8 types of insurance, know them all here. <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div></div> </Carousel.Item><Carousel.Item><div class="row justify-content-center">
                                            <div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card" style={{height: "97%"}}>
                                             <a href="https://finoratorandinvestment.blogspot.com/2022/02/mutual-funds-best-form-of-investment.html" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>Mutual Funds: the best investment?</h3>
                                                    </div>
                                                    <div>
                                                       <p class="theme-p px-2 trucket mb-0">know more than, mutual funds are subjected to market risk, here. <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://www.instagram.com/p/CaM8JqkpV7m/" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>6 habits of a good investor</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">want to know what are those investing habits that a good investor follows?Finorator is here to help you know!! <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://finoratorandinvestment.blogspot.com/2022/02/who-regulates-stock-market-of-india.html" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>Who regulates India's Stock Market?</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">know in detail who regulates the stock market of India with the help of FINORATOR <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div></div> </Carousel.Item><Carousel.Item><div class="row justify-content-center">
                                            <div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card" style={{height: "97%"}}>
                                             <a href="https://finoratorandinvestment.blogspot.com/2022/02/dos-and-donts-of-investing.html" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>The do's and don'ts of INVESTING</h3>
                                                    </div>
                                                    <div>
                                                       <p class="theme-p px-2 trucket mb-0">when it comes to investing there are some really serious red flags, know them all!! <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://www.blogger.com/u/0/blog/post/edit/4025261019025676995/738816382733671042" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>5 best ways to plan your first invsetment!</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">first investment?
don't worry, FINORATOR will guide you step by step! <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://www.instagram.com/p/CaHd-XrvQtz/" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>The next time you get a salary, try this out!</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">the famous 40-60 rule of saving made simple!! <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div></div> </Carousel.Item><Carousel.Item><div class="row justify-content-center">
                                            <div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card" style={{height: "97%"}}>
                                             <a href="https://www.instagram.com/p/CaFBJjYPzMj/" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>6 best financial books to give your loved ones according to their age</h3>
                                                    </div>
                                                    <div>
                                                       <p class="theme-p px-2 trucket mb-0">It is said that books are our best friends, so why don't we give our loved ones some of the best financial books? <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://www.instagram.com/p/CZ4EmLXpqWR/" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>Still not sure where to invest your money?</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">When it comes to investing, there are lots of factors to consider. Know them all here! <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://www.instagram.com/p/CZyiSbtJ61_/" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>What are NFTs exactly!?</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">If you're confused about what NFTs actually are and tired of searching for it all over the internet, fear not! We've got you covered! <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div></div> </Carousel.Item><Carousel.Item><div class="row justify-content-center">
                                            <div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card" style={{height: "97%"}}>
                                             <a href="https://www.linkedin.com/pulse/8-types-investment-instruments-available-india-fi-norator" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>8 Types of Investment Instruments available in India</h3>
                                                    </div>
                                                    <div>
                                                       <p class="theme-p px-2 trucket mb-0">Getting a thorough understanding of the various investment options available in India will assist you in making the right decision. Read on to learn about all 8 investment options available in India. <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://www.instagram.com/p/CZoY_wmJJYC/" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>The right age to start investing!?</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">When thinking about investing, this could be the first question you ask. Get the answer from the CA herself. <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://www.instagram.com/p/CZm62Slv7PB/" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>Decrypting CRYPTOCURRENCIES!!</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">Crypto currency is the new fad, understand what it means, if it is legal, how to invest, and everything else about it here. <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div></div> </Carousel.Item><Carousel.Item><div class="row justify-content-center">
                                            <div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card" style={{height: "97%"}}>
                                             <a href="https://www.instagram.com/p/CZhkSPHBuxR/" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>Know everything about the DIGI RUPEE</h3>
                                                    </div>
                                                    <div>
                                                       <p class="theme-p px-2 trucket mb-0">India will launch DIGI RUPEE in the year 2022-23 with help of Blockchain and other technologies. <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div><div class="col-xl-3 col-lg-3 col-12">
                                                <div class="blog-card mb-3" style={{height: "97%"}}>
                                                <a href="https://www.youtube.com/watch?v=sQDTVjZdlHw" target="_blank" class="text-decoration-none">
                                                    <div class="theme-bg">
                                                        <h3>Why Choose Finorator?</h3>
                                                    </div>
                                                    <div>
                                                        <p class="theme-p px-2 trucket mb-0">One time Universal KYC

Tired of registering everywhere for KYC? 
With Finorator, you need to register digitally only once for all your financial uses and applications. <span> read more</span></p>
                                                        <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div></div></Carousel.Item>
</Carousel></div>
    );
  }