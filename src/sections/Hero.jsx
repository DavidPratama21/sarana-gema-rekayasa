import sparepart from "../assets/images/product.png";
const Hero = () => {
    return (
        <div className="grid p-5 gap-5 bg-dark-primary text-white
          sm:flex sm:px-30 sm:pt-16 sm:pb-0 sm:gap-10 sm:bg-white sm:text-dark-primary sm:items-center sm:w-fit
        ">
            {/* Desc Hero */}
            <div className="grid gap-1 sm:gap-5">
                {/* Title Desc */}
                <div className="grid gap-1">
                    <h1 className="font-monument sm:text-[32px]">
                        Tertarik dengan produk <br /> berkualitas dari kami?
                    </h1>
                    <p className="font-lato text-xs sm:text-base">
                        Tim kami siap membantu Anda menemukan solusi terbaik
                        untuk kebutuhan Anda.
                    </p>
                </div>
                <a href="" className="underline font-monument w-fit hover:text-primary">
                    Contact Us
                </a>
            </div>
            {/* width kalo bisa yg fix si... */}
            <img src={sparepart} alt="Sparepart" className="sm:w-1/2"/>
        </div>
    );
};

export default Hero;
