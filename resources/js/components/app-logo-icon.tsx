import { SVGAttributes } from 'react';
import logo from '../../../public/logo-2.png'
import { Link, usePage } from '@inertiajs/react';
export default function AppLogoIcon(props: SVGAttributes<SVGElement>) {
    const { global_settings } = usePage().props as any;
    
      const logoLight = global_settings?.logo_light_path ? `/storage/${global_settings.logo_light_path}` : '/default-logo-light.png';
      const logoDark = global_settings?.logo_dark_path ? `/storage/${global_settings.logo_dark_path}` : '/default-logo-dark.png';
    return (
        <>
           <Link href="/" className="">
            <img
              className=" object-contain dark:hidden"
              src={logoLight}
              alt="Logo"
            />

            <img
              className=" object-contain hidden dark:block"
              src={logoDark}
              alt="Logo"
            />
          </Link>
        </>
    );
}
