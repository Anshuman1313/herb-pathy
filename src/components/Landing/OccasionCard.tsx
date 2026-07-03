"use client";

import { CardStack } from "@/uicapsule/card-stack/card-stack";
import React from "react";

const cards = [
  { href: "/",src: "/occasion/1.jpg" },
  { href: "/",src: "/occasion/1occasion.png" },
  { href: "/",src: "/occasion/2occasion.png" },
  { href: "/",src: "/occasion/an1.jpg" },
  { href: "/",src: "/occasion/bd1.jpg" },
  { href: "/",src: "/occasion/birthday1.jpg" },
  { href: "/",src: "/occasion/bt1.jpg" },
  { href: "/",src: "/occasion/cp1.jpg" },
  { href: "/",src: "/occasion/cp2.jpg" },
  { href: "/",src: "/occasion/cu1.jpeg" },
  { href: "/",src: "/occasion/lx1.jpeg" },
  { href: "/",src: "/occasion/wd1.jpeg" },
  { href: "/",src: "/occasion/wd1.jpg" },
  { href: "/",src: "/occasion/wd2.jpeg" },
];

export default function OccasionCardStack() {
  return (
    <div className="w-full h-screen relative flex items-center justify-center  ">
      <CardStack cards={cards} />
    </div>
  );
}