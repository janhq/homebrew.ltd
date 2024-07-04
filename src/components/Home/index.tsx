import { useData } from 'nextra/data'
import { format } from 'date-fns'
import { useRouter, useSearchParams } from 'next/navigation'

import Link from 'next/link'
import { Cards } from 'nextra/components'
import { twMerge } from 'tailwind-merge'

const Home = () => {
    const blogPost = useData()
    const searchParams = useSearchParams()
    const search = searchParams?.get('category')
    const router = useRouter()

    const staticCategories = [
        {
            name: 'Building Jan',
            id: 'building-jan',
        },
        {
            name: 'Research',
            id: 'research',
        },
    ]

    return (
        <div className="nextra-wrap-container py-14">
            <div className="w-full mx-auto">
                <h1 className="text-6xl !fqont-normal leading-tight lg:leading-tight mt-2 font-serif">
                    Homebrew Computer Company
                </h1>
                <div className="text-black/60 dark:text-white/60">
                    <p className="text-base mt-2 leading-relaxed">
                        Homebrew is an R&D lab focused on on-device and privacy centric AI solutions.
                        <br />
                        We solve problems across the stack, from model training, to tooling, to hardware design.
                        <br />
                        We are open-source and build-in-public. You can find our ongoing research insights below.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home
