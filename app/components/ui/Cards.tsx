"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "./apple-cards-carousel";
import bed from "../../assets/imgbed.jpg";
import room from "../../assets/room1.jpg";
import sofas from "../../assets/igsofa.jpg";
import condoroom from "../../assets/condoroom.jpg";
import officeroom from "../../assets/office.jpg"
import floorcleaning from "../../assets/floorcleaning.jpg"
import carpetcleaning from "../../assets/carpetcleaning.jpg"
import vaccuming from "../../assets/vacumming.jpg"
import condo from "../../assets/roomwithdog.jpg"
import office from "../../assets/office2.jpg"
import carpetroom from "../../assets/imgcarpet.jpg"
import deepclean from "../../assets/condo.jpg"
import { FaCheckCircle } from 'react-icons/fa';
import Link from "next/link";
const cardStyle = {
  padding: "30px",
  border: "none",
  borderRadius: "15px",
  marginBottom: "30px",
  boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
  background: "linear-gradient(135deg, #fefcea 0%, #f1da36 100%)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  transition: "transform 0.3s ease-in-out",
} as const;

const ulStyle = {
  padding: "30px",
  border: "none",
  borderRadius: "15px",
  marginBottom: "30px",
  boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
  background: "linear-gradient(135deg, #fefcea 0%, #f1da36 100%)",
  display: "flex",
  flexDirection: "column",
  transition: "transform 0.3s ease-in-out",
} as const;

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={index} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full mx-auto md:px-[1rem] px-[2rem] py-[2.5rem]">
      <h2 className="max-w-6xl mx-auto text-xl md:text-5xl font-bold text-neutral-800 font-sans xl:px-0 lg:px-[3.5rem] md:px-[3rem]">
        What we do?
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    title: "Comprehensive House Cleaning",
    src: sofas,
    content: (
      <div
        style={cardStyle}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <h2 style={{ fontSize: "1.8em", marginBottom: "15px", fontWeight: "600", color: "#333" }}>
          Comprehensive House Cleaning
        </h2>
        <p style={{ fontSize: "1.1em", marginBottom: "20px", color: "#555", textAlign: "center" }}>
          Keep your home spotless with our detailed house cleaning services. From dusting to deep cleaning, we handle it all!
        </p>
        <Image
          src={bed}
          alt="House Cleaning"
          style={{ width: "60%", height: "auto", borderRadius: "10px", marginBottom: "20px" }}
        />
        <ul className="flex gap flex-col"
          style={ulStyle}
        >
          <li className="flex">
            <FaCheckCircle style={{ marginRight: "8px", color: "#4CAF50" }} />
            General Cleaning (dusting, vacuuming, sweeping, mopping)
          </li>
          <li className="flex">
            <FaCheckCircle style={{ marginRight: "8px", color: "#4CAF50" }} />
            Kitchen Cleaning (counters, stovetop, microwave)
          </li>
          <li className="flex">
            <FaCheckCircle style={{ marginRight: "8px", color: "#4CAF50" }} />
            Bathroom Cleaning (toilet, sink, shower)
          </li>
          <li className="flex">
            <FaCheckCircle style={{ marginRight: "8px", color: "#4CAF50" }} />
            Floor Cleaning (sweeping, mopping, vacuuming)
          </li>
          <li className="flex">
            <FaCheckCircle style={{ marginRight: "8px", color: "#4CAF50" }} />
            Window Cleaning
          </li>
          <li className="flex">
            <FaCheckCircle style={{ marginRight: "8px", color: "#4CAF50" }} />
            more
          </li>
        </ul>
        <Link href={"#booknow"}>
          <button
            type="submit"
            className="bg-yellow-400 text-white px-4 py-2 rounded-lg hover:bg-yellow-500 transition duration-300"
          >
            Book Now
          </button>
        </Link>
      </div>
    ),
  },
  {
    title: "Professional Condo Cleaning services",
    src: condoroom,
    content: (
      <div
        style={cardStyle}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <h2 style={{ fontSize: "1.8em", marginBottom: "15px", fontWeight: "600", color: "#333" }}>
          Expert Condo Cleaning Solutions
        </h2>
        <p style={{ fontSize: "1.1em", marginBottom: "20px", color: "#555", textAlign: "center" }}>
          Keep your condo pristine with our specialized condo cleaning services. We offer comprehensive cleaning for every corner, ensuring your space remains stylish and comfortable.
        </p>
        <Image
          src={condo}
          alt="condo Cleaning"
          style={{ width: "60%", height: "auto", borderRadius: "10px", marginBottom: "20px" }}
        />
        <ul className="flex gap flex-col"
          style={ulStyle}
        >
          <li className="flex">
            <FaCheckCircle style={{ marginRight: "8px", color: "#4CAF50" }} />
            Kitchen and Bathroom Cleaning
          </li>
          <li className="flex">
            <FaCheckCircle style={{ marginRight: "8px", color: "#4CAF50" }} />
            Living Area Maintenance
          </li>
          <li className="flex">
            <FaCheckCircle style={{ marginRight: "8px", color: "#4CAF50" }} />
            Floor Cleaning
          </li>
          <li className="flex">
            <FaCheckCircle style={{ marginRight: "8px", color: "#4CAF50" }} />
            Glass and Window Cleaning
          </li>
          <li className="flex">
            <FaCheckCircle style={{ marginRight: "8px", color: "#4CAF50" }} />
            more
          </li>
        </ul>
        <Link href={"#booknow"}>
          <button
            type="submit"
            className="bg-yellow-400 text-white px-4 py-2 rounded-lg hover:bg-yellow-500 transition duration-300"
          >
            Book Now
          </button>
        </Link>
      </div >
    ),
  },
  {
    title: "Professional Office Cleaning Services",
    src: officeroom,
    content: (
      <div
        style={cardStyle}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <h2 style={{ fontSize: "1.8em", marginBottom: "15px", fontWeight: "600", color: "#333" }}>
          Professional office Cleaning
        </h2>
        <p style={{ fontSize: "1.1em", marginBottom: "20px", color: "#555", textAlign: "center" }}>
          Maintain a clean and productive workspace with our office cleaning services. We ensure that your office environment is spotless and conducive to productivity.
        </p>
        <Image
          src={office}
          alt="office Cleaning"
          style={{ width: "60%", height: "auto", borderRadius: "10px", marginBottom: "20px" }}
        />
        <ul className="flex gap flex-col"
          style={ulStyle}
        >
          <li className="flex">
            <FaCheckCircle style={{ marginRight: "8px", color: "#4CAF50" }} />
            Desk and Workstation Cleaning
          </li>
          <li className="flex">
            <FaCheckCircle style={{ marginRight: "8px", color: "#4CAF50" }} />
            Common Area and Restroom Maintenance
          </li>
          <li className="flex">
            <FaCheckCircle style={{ marginRight: "8px", color: "#4CAF50" }} />
            Floor Care and Vacuuming
          </li>
          <li className="flex">
            <FaCheckCircle style={{ marginRight: "8px", color: "#4CAF50" }} />
            Trash Removal
          </li>
          <li className="flex">
            <FaCheckCircle style={{ marginRight: "8px", color: "#4CAF50" }} />
            Window and Glass Cleaning
          </li>
          <li className="flex">
            <FaCheckCircle style={{ marginRight: "8px", color: "#4CAF50" }} />
            more
          </li>

        </ul>
        <Link href={"#booknow"}>
          <button
            type="submit"
            className="bg-yellow-400 text-white px-4 py-2 rounded-lg hover:bg-yellow-500 transition duration-300"
          >
            Book Now
          </button>
        </Link>
      </div >
    ),
  },
  {
    title: "Specialized Floor Cleaning",
    src: floorcleaning,
    content: (
      <div
        style={cardStyle}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <h2 style={{ fontSize: "1.8em", marginBottom: "15px", fontWeight: "600", color: "#333" }}>
          Specialized Floor Cleaning
        </h2>
        <p style={{ fontSize: "1.1em", marginBottom: "20px", color: "#555", textAlign: "center" }}>
          Enhance the appearance of your floors with our dedicated floor cleaning services. We provide expert care for all types of flooring to keep them looking their best.
        </p>
        <Image
          src={room}
          alt="condo Cleaning"
          style={{ width: "60%", height: "auto", borderRadius: "10px", marginBottom: "20px" }}
        />
        <ul className="flex gap flex-col"
          style={ulStyle}
        >
          <li className="flex">
            <FaCheckCircle style={{ marginRight: "8px", color: "#4CAF50" }} />
            Hardwood Floor Cleaning
          </li>
          <li className="flex">
            <FaCheckCircle style={{ marginRight: "8px", color: "#4CAF50" }} />
            Tile and Grout Cleaning
          </li>
          <li className="flex">
            <FaCheckCircle style={{ marginRight: "8px", color: "#4CAF50" }} />
            Vinyl and Laminate Floor Care
          </li>
          <li className="flex">
            <FaCheckCircle style={{ marginRight: "8px", color: "#4CAF50" }} />
            Professional Mopping and Sweeping
          </li>
          <li className="flex">
            <FaCheckCircle style={{ marginRight: "8px", color: "#4CAF50" }} />
            more
          </li>
        </ul>
        <Link href={"#booknow"}>
          <button
            type="submit"
            className="bg-yellow-400 text-white px-4 py-2 rounded-lg hover:bg-yellow-500 transition duration-300"
          >
            Book Now
          </button>
        </Link>
      </div >
    ),
  },
  {
    title: "Specialized Carpet Cleaning",
    src: vaccuming,
    content: (
      <div
        style={cardStyle}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <h2 style={{ fontSize: "1.8em", marginBottom: "15px", fontWeight: "600", color: "#333" }}>
          Specialized Carpet Cleaning
        </h2>
        <p style={{ fontSize: "1.1em", marginBottom: "20px", color: "#555", textAlign: "center" }}>
          Revitalize your carpets with our thorough carpet cleaning services. We tackle stains, dirt, and odors, leaving your carpets fresh and vibrant.
        </p>
        <Image
          src={carpetroom}
          alt="carpet Cleaning"
          style={{ width: "60%", height: "auto", borderRadius: "10px", marginBottom: "20px" }}
        />
        <ul className="flex gap flex-col"
          style={ulStyle}
        >
          <li className="flex">
            <FaCheckCircle style={{ marginRight: "8px", color: "#4CAF50" }} />
            Carpet Deep Cleaning
          </li>
          <li className="flex">
            <FaCheckCircle style={{ marginRight: "8px", color: "#4CAF50" }} />
            General Cleaning (dusting, vacuuming, sweeping, mopping)
          </li>
          <li className="flex">
            <FaCheckCircle style={{ marginRight: "8px", color: "#4CAF50" }} />
            Floor Care and Vacuuming
          </li>
          <li className="flex">
            <FaCheckCircle style={{ marginRight: "8px", color: "#4CAF50" }} />
            Trash Removal
          </li>
          <li className="flex">
            <FaCheckCircle style={{ marginRight: "8px", color: "#4CAF50" }} />
            more
          </li>
        </ul>
        <Link href={"#booknow"}>
          <button
            type="submit"
            className="bg-yellow-400 text-white px-4 py-2 rounded-lg hover:bg-yellow-500 transition duration-300"
          >
            Book Now
          </button>
        </Link>
      </div >
    ),
  },
  {
    title: "Specialized Deep Cleaning",
    src: carpetcleaning,
    content: (
      <div
        style={cardStyle}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <h2 style={{ fontSize: "1.8em", marginBottom: "15px", fontWeight: "600", color: "#333" }}>
          In-Depth Deep Cleaning Services
        </h2>
        <p style={{ fontSize: "1.1em", marginBottom: "20px", color: "#555", textAlign: "center" }}>
          Experience a new level of cleanliness with our deep cleaning services. We provide a comprehensive clean that reaches every corner and detail, perfect for homes and businesses in need of extra attention.
        </p>
        <Image
          src={deepclean}
          alt="deep Cleaning"
          style={{ width: "60%", height: "auto", borderRadius: "10px", marginBottom: "20px" }}
        />
        <ul className="flex gap flex-col"
          style={ulStyle}
        >
          <li className="flex">
            <FaCheckCircle style={{ marginRight: "8px", color: "#4CAF50" }} />
            General Cleaning (dusting, vacuuming, sweeping, mopping)
          </li>
          <li className="flex">
            <FaCheckCircle style={{ marginRight: "8px", color: "#4CAF50" }} />
            Kitchen Cleaning (counters, stovetop, microwave)
          </li>
          <li className="flex">
            <FaCheckCircle style={{ marginRight: "8px", color: "#4CAF50" }} />
            Bathroom Cleaning (toilet, sink, shower)
          </li>
          <li className="flex">
            <FaCheckCircle style={{ marginRight: "8px", color: "#4CAF50" }} />
            Floor Cleaning (sweeping, mopping, vacuuming)
          </li>
          <li className="flex">
            <FaCheckCircle style={{ marginRight: "8px", color: "#4CAF50" }} />
            Window Cleaning
          </li>
          <li className="flex">
            <FaCheckCircle style={{ marginRight: "8px", color: "#4CAF50" }} />
            more
          </li>
        </ul>
        <Link href={"#booknow"}>
          <button
            type="submit"
            className="bg-yellow-400 text-white px-4 py-2 rounded-lg hover:bg-yellow-500 transition duration-300"
          >
            Book Now
          </button>
        </Link>
      </div >
    ),
  },
];



