"use client";
import React from "react";
import { featureBooks } from "../../../mydb/page";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface DataType {
  id: number;
  title: string;
  price: number;
  star: number;
  rating: number;
  Edition: string;
  Authors: string;
  image: string;
  description: string;
  Publisher: string;
  PublicationDate: string;
}

export function FeatureBooks() {
  const router = useRouter();
  const data: DataType[] = featureBooks;

  return (
    <div className="FeatureBooksbg flex flex-col justify-center items-center min-h-screen p-9 ">
      <h1 className="text-3xl font-serif mb-9 font-semibold text-gray-800">Feature Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-7 w-full sm:w-3/4">
        {data.map((book) => (
          <div
            key={book.id}
            className="w-full transform transition-transform duration-300 hover:scale-105 "
          >
            <Image
              onClick={() => router.push(`/books/${book.id}`)}
              src={book.image}
              alt={book.title}
              height={200} 
              width={200}   
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
