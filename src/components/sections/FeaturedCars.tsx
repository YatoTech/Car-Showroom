import React from "react";
    import { CarCard } from "@/components/CarCard";

    const featuredCars = [
      {
        id: 1,
        name: "Toyota Camry 2.5 V",
        price: "Rp 550.000.000",
        image: "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "Sedan mewah dengan performa tangguh dan fitur canggih.",
      },
      {
        id: 2,
        name: "Honda Civic RS",
        price: "Rp 480.000.000",
        image: "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "Desain sporty, irit bahan bakar, cocok untuk gaya hidup modern.",
      },
      {
        id: 3,
        name: "Mercedes-Benz C-Class",
        price: "Rp 980.000.000",
        image: "https://images.pexels.com/photos/100656/pexels-photo-100656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "Elegansi dan kenyamanan premium, pengalaman berkendara tak tertandingi.",
      },
      {
        id: 4,
        name: "BMW 3 Series",
        price: "Rp 870.000.000",
        image: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "Performa dinamis dan teknologi inovatif untuk pengendara sejati.",
      },
      {
        id: 5,
        name: "Mitsubishi Xpander",
        price: "Rp 280.000.000",
        image: "https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "MPV keluarga dengan ruang kabin luas dan fitur keselamatan lengkap.",
      },
      {
        id: 6,
        name: "Suzuki Jimny",
        price: "Rp 450.000.000",
        image: "https://images.pexels.com/photos/1089863/pexels-photo-1089863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "SUV kompak dengan kemampuan off-road yang handal.",
      },
    ];

    export function FeaturedCars() {
      return (
        <section id="mobil" className="container py-12">
          <h2 className="text-4xl font-bold text-center mb-8 text-primary">Koleksi Mobil Kami</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map((car) => (
              <CarCard
                key={car.id}
                image={car.image}
                name={car.name}
                price={car.price}
                description={car.description}
              />
            ))}
          </div>
        </section>
      );
    }
