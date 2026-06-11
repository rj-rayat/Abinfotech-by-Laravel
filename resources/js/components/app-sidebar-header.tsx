import { Breadcrumbs } from '@/components/breadcrumbs';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { type BreadcrumbItem as BreadcrumbItemType } from '@/types';
import { ThemeToggle } from './Navbar/theme'; 
import { Separator } from '@radix-ui/react-separator';

export function AppSidebarHeader({ breadcrumbs = [] }: { breadcrumbs?: BreadcrumbItemType[] }) {
   return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b px-4 w-full">
        {/* বাম পাশের অংশ: সাইডবার ওপেনার আর ব্রেডক্রাম্ব */}
        <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumbs breadcrumbs={breadcrumbs} />
        </div>

        {/* ডান পাশের অংশ: তোর কাঙ্ক্ষিত থিম টগল বাটন */}
        <div className="flex items-center pr-2">
            <ThemeToggle />
        </div>
    </header>
);
}
