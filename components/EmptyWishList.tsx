import Image from "next/image";
import Link from "next/link";

export const EmptyWishList = () => {
    return (
        <div className="w-full h-full flex flex-col gap-6 items-center justify-center min-h-screen">
            <Image src={'/heartbreak.png'} alt="heart" height={100} width={100}/>
            <h3 className="text-lg md:text-xl font-semibold">This place looks empty</h3>
            <Link href={'/'}>
                <button className="primary-button click-transition">
                    Browse collection
                </button>
            </Link>
        </div>
    );
};
