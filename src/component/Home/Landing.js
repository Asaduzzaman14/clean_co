import React from 'react';
import img from '../../assets/bucketgirl 1.png'

const Landing = () => {
    return (

        <div className='relative'>

            <div class="hero h-screen lg:h-[60vh] bg-accent mt-16">

                <div class="hero-content flex-col lg:flex-row">

                    <div >
                        <p data-aos="fade-right"
                            data-aos-duration="1000"
                            data-aos-delay="100"

                            className="text-xl">Best Quality</p>
                        <h1 data-aos="fade-right"
                            data-aos-duration="900"
                            data-aos-delay="200"

                            class="text-5xl font-bold">Professional Cleaning Service</h1>
                        <p data-aos="fade-right"
                            data-aos-duration="800"
                            data-aos-delay="400"

                            class="py-6 mx-w-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has.</p>
                        <button data-aos="zoom-in"
                            data-aos-duration="1000"
                            class="btn btn-primary">GET STARTED</button>
                    </div>

                    <div className='h-[60vh] shrink-0'>

                        <img src={img} class="h-full" alt='' />
                    </div>

                </div>

            </div>


            <div className='relative p-10 mx-auto mt-[-50px] rounded bg-base-200 shadow-2xl z-20 w-5/6'>
                <h2 className='text-2xl my-5 text-primary' >Get Free Estimate</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4' >
                    <input type="text" placeholder="Type here" class="input input-bordered input-accent w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered input-accent w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered input-accent w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered input-accent w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered input-accent w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered input-accent w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered input-accent w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered input-accent w-full " />

                </div>
                <button className='btn btn-primary mt-5'>REQUEST A QOUTE</button>
            </div>



        </div>
    );
};

export default Landing;