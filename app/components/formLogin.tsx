import Image from 'next/image'
const FormLogin = (props: any) => {

    return (
        <section className="bg-gradient-to-r from-teal-900 from-50% to-50% to-teal-950 flex min-h-screen flex-col items-center justify-between p-24">
            <div className="container flex justify-between">
                <div className='flex-1 p-16 text-right text-gray-300'>
                    <h1 className='text-5xl font-bold leading-none mb-4'>Welcome to the A-Panel</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
                <div className='flex flex-col flex-1 p-16 gap-8'>
                    <Image
                        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                        src="/next.svg"
                        alt="Next.js Logo"
                        width={180}
                        height={37}
                        priority
                    />
                    <form className='flex flex-col gap-3' action="">
                        <input type="email" value={props.email} className='p-3 rounded-lg' placeholder='Email' onChange={props.getEmail} />
                        <input type="password" value={props.password} className='p-3 rounded-lg' placeholder='Password' onChange={props.getPassword} />
                        <input type="submit" className='p-3 rounded-lg bg-slate-400 uppercase' onClick={props.formSubmit} />
                        {
                            props.error ? <p className="border border-red-400 text-red-400 p-2">Wrong credentials, please try again</p> : ""
                        }
                    </form>
                </div>
            </div>
        </section>
    )
}
export default FormLogin