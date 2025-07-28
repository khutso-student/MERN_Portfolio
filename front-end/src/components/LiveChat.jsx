import ProfilePic from '../assets/Profile.png';
export default function LiveChat() {
    return(
        <div className="bg-[#01121af6] sm:bg-[#01121ab4] w-70 h-100 border border-[#028BC5] rounded-xl overflow-hidden ">
            <div className="flex justify-between items-center bg-[#032d3fa1] h-11 p-2">
                <div className='w-8 h-8'>
                    <img src={ProfilePic} alt="image" />
                </div>
                <p className="text-white text-sm">Live Chat</p>

                <div className='flex justify-center items-center gap-1 w-auto h-auto'>
                    <span className='bg-green-600 w-2 h-2 rounded-full'></span>
                    <p className='text-white text-xs'>Online</p>
                </div>
            </div>
        </div>
    )
}