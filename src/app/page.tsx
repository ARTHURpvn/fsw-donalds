"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const HomePage = () => {
  const router = useRouter();
  const handleClickButton = () => router.push("/fsw-donalds");
  return (
    <div className="flex h-screen items-center justify-center">
      <Card>
        <CardContent className="flex flex-col">
          <CardHeader>
            <h1 className="text-2xl font-bold">FSW DONALDS</h1>
          </CardHeader>

          <Button onClick={handleClickButton}>Entrar</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default HomePage;
