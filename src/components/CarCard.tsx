import React from "react";
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
    import { Button } from "@/components/ui/button";

    interface CarCardProps {
      image: string;
      name: string;
      price: string;
      description: string;
    }

    export function CarCard({ image, name, price, description }: CarCardProps) {
      return (
        <Card className="w-full max-w-sm overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img src={image} alt={name} className="w-full h-48 object-cover" />
          <CardHeader>
            <CardTitle className="text-xl font-semibold">{name}</CardTitle>
            <CardDescription className="text-primary text-lg font-bold">{price}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">{description}</p>
            <Button className="w-full">Detail Mobil</Button>
          </CardContent>
        </Card>
      );
    }
