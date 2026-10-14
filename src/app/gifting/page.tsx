import Banner from '@/components/corporateGifting/Banner'
import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
  title: "Cake Gifting & Corporate Gifting | Dream Slice Studio",
  description:
    "Make every occasion sweeter with cake gifting from Dream Slice Studio. Explore thoughtful gifts and corporate gifting options for clients, teams, employees, and special occasions.",
};
const page = () => {
  return (
    <div>
        <Banner/>
    </div>
  )
}

export default page