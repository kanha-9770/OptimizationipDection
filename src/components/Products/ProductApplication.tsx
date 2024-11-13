"use client";
import React from "react";
import { Card, Carousel } from "../ui/Product-cards-carousel";

export function ProductApplication() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full bg-white h-full p-8 flex flex-col rounded-xl font-poppins">
      <h1 className="lg:text-3xl text-2xl text-red-700  font-semibold">Applications</h1>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Paper Cups",
    title: "Bear Paper Cup",
    src: "https://i.pinimg.com/236x/d1/a0/7a/d1a07a7796dfeed0efbcfcd3af41871e.jpg",
  },
  {
    category: "Paper Cups",
    title: "Coffee Paper Cup",
    src: "https://i.pinimg.com/236x/1e/88/8c/1e888ceefc1bfb5254023d684e4623a3.jpg",
  },
  {
    category: "Paper Cups",
    title: "Party Paper Cup",
    src: "https://i.pinimg.com/236x/b7/cc/bb/b7ccbb3d5f4b5babc934a56389aeabfb.jpg",
  },
  {
    category: "Paper Cups",
    title: "Holiday Paper Cup",
    src: "https://i.pinimg.com/564x/25/f6/65/25f665d0b4841754576bda120925a25a.jpg",
  },
  {
    category: "Paper Cups",
    title: "Custom Printed Paper Cup",
    src: "https://i.pinimg.com/236x/26/bf/21/26bf21c1654fe4d0ec89c026b2e0c0e2.jpg",
  },
  {
    category: "Paper Cups",
    title: "Hot Drink Paper Cup",
    src: "https://i.pinimg.com/564x/9f/c4/0b/9fc40bcd51d88f78f518f9453b6a1669.jpg",
  },
  {
    category: "Paper Cups",
    title: "Cold Drink Paper Cup",
    src: "https://i.pinimg.com/564x/98/5f/b4/985fb409b379171ad5637df74b121e19.jpg",
  },
  {
    category: "Paper Cups",
    title: "Eco-Friendly Paper Cup",
    src: "https://i.pinimg.com/736x/8d/02/8d/8d028d7fb941ee7549255a490799a7ed.jpg",
  },
  {
    category: "Paper Cups",
    title: "Travel Paper Cup",
    src: "https://i.pinimg.com/236x/ca/3c/6a/ca3c6add23d80c1b2592a75819780aaa.jpg",
  },
];
