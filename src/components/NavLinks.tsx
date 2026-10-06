import Link from 'next/link';

interface Navs {
    title: string;
    slug: string;
    topicId : string | null;
    scrapable: boolean;
}


const NavLinks = async () => {
    const res = await fetch('https://news-api-v2.vercel.app/api/categories');
    const data = await res.json();
    const navs: Navs[] = data.data;
    const filterNavs = navs.filter((nav) => nav.scrapable);
    return (
        <div className="flex justify-center gap-4">
            <Link href="/">হোম</Link>
            {filterNavs.map((nav) => (
                <Link key={nav.slug} href={nav.slug}>
                    {nav.title}
                </Link>
            ))}
        </div>
    );
};

export default NavLinks;