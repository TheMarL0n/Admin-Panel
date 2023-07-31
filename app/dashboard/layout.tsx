'use client'
import Sidebar from "../components/sidebar"
import { usePathname } from "next/navigation"

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <main className="lg:flex md:flex sm:block">
      <Sidebar />
      <section className="min-h-screen w-full bg-teal-800">
        {children}
      </section>
    </main>
  )
}