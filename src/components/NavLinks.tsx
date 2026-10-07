import Link from 'next/link';

interface Navs {
    title: string;
    slug: string;
    topicId : string | null;
    scrapable: boolean;
}


const NavLinks = async () => {
    let navs: Navs[] = [];
    try {
        const res = await fetch('https://news-api-v2.vercel.app/api/categories');
        if (res.ok) {
            const data: { data?: Navs[] } = await res.json();
            navs = Array.isArray(data.data) ? data.data : [];
        }
    } catch {
        navs = [];
    }
    const filterNavs = navs.filter((nav) => nav.scrapable);
    return (
        <div className="flex justify-center gap-4">
            <Link href="/">হোম</Link>
            {filterNavs.map((nav) => (
                <Link key={nav.slug} href={`category/${nav.slug}`}>
                    {nav.title}
                </Link>
            ))}
        </div>
    );
};

export default NavLinks;