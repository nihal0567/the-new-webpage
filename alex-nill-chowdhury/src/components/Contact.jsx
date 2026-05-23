import App from "../App";
import Navbar from "./Navbar";
import pic3 from "../assets/IMG_20210927_143359.jpg"


const Contact = () => {
    return (
        <div>
        <div className='flex justify-center flex-col-reverse'>
            <App></App>
            <Navbar></Navbar>
        </div>
                <div className='flex justify-center mt-8'>
                    <h1 className='px-3 mb-10'>
                        যোগাযোগ করার খুব ইচ্ছা তাই না, ব্যস্ত আছি এখন সময় করে দিয়ে দেবো  
                    </h1>
                </div>
                <div className="max-w-7xl mx-auto flex-col ">
                    <div className="flex w-fit rounded-4xl p-2.5">
                    <img  src={pic3} alt="" className="rounded-b-box"/>
                    </div>
                </div>
        </div>
    );
};

export default Contact;