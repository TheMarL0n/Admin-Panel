import { Disclosure } from '@headlessui/react'
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { XMarkIcon, Bars3Icon, HomeIcon, UserGroupIcon, DocumentDuplicateIcon, WrenchIcon, EnvelopeIcon } from "@heroicons/react/24/outline"

const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: <HomeIcon className="w-5" />, current: true },
    { name: 'Users', href: '/dashboard/users', icon: <UserGroupIcon className="w-5" />, current: false },
    { name: 'Pages', href: '/dashboard/pages', icon: <DocumentDuplicateIcon className="w-5" />, current: false },
    { name: 'Services', href: '/dashboard/services', icon: <WrenchIcon className="w-5" />, current: false },
    { name: 'Emails', href: '/dashboard/emails', icon: <EnvelopeIcon className="w-5" />, current: false },
]

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

const Sidebar = () => {
    
    const pathname = usePathname()

    return (
        <Disclosure as="nav" className="bg-teal-950 lg:w-80 md:w-80">
            {({ open }) => (
                <>
                    <div className="mx-auto px-2 py-4 sm:px-2 lg:px-4">
                        <div className="relative flex items-start justify-between">
                            <div className="flex flex-col flex-1">
                                <div className="flex gap-2 items-center">
                                    <img
                                        className="h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                        alt="Your Company"
                                    />
                                    <h3 className='text-white hidden lg:block md:block'>
                                        A-Panel
                                    </h3>
                                </div>
                                <div className="hidden sm:block">
                                    <div className="flex flex-col mt-8 gap-3">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    pathname === item.href ? 'bg-teal-900 text-white' : 'text-gray-300 hover:bg-teal-700 hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium flex gap-2'
                                                )}
                                                aria-current={pathname === item.href ? 'page' : undefined}
                                            >
                                                {item.icon}
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center text-gray-400 hover:text-white focus:outline-none">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>
                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        pathname === item.href ? 'bg-teal-900 text-white' : 'text-gray-300 hover:bg-teal-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium flex gap-2'
                                    )}
                                    aria-current={pathname === item.href ? 'page' : undefined}
                                >
                                    {item.icon}
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
export default Sidebar