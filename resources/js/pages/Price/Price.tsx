import WebLayout from '@/layouts/web-layout'
import { Head } from '@inertiajs/react'
import React from 'react'
import PricingSection from './plans'
interface PricingPlan {
  id: number;
  name: string;
  monthly_price: number | string;
  yearly_price: number | string;
  description: string;
  features: string[] | null;
  is_popular: boolean | number;
  cta_text: string;
  sort_order: number;
}

interface Props {
  plans: PricingPlan[];
}
export default function Price({ plans = [] }: Props) {
  return (
   <WebLayout>
        <Head title='Prices'>

        </Head>

        <PricingSection plans={plans}/>
   </WebLayout>
  )
}

