import DrinkIcon from "@/assets/DrinkIcon";
import FriesIcon from "@/assets/FriesIcon";
import NoodleIcon from "@/assets/NoodleIcon";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <div>
        <div className="flex w-full max-w-sm items-center space-x-2 mb-2">
          <Input placeholder="indomie goreng..." />
          <Button type="submit">Cari nih</Button>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold">Kategori</h3>
        <div className="flex gap-4 my-4">
          <div className="flex flex-col items-center w-min">
            <div className="flex justify-center items-center w-16 h-16 rounded-full relative bg-primary">
              <NoodleIcon />
            </div>
            <span className="mt-1 font-semibold text-sm">Makanan</span>
          </div>
          <div className="flex flex-col items-center w-min">
            <div className="flex justify-center items-center w-16 h-16 rounded-full relative bg-primary">
              <DrinkIcon />
            </div>
            <span className="mt-1 font-semibold text-sm">Minuman</span>
          </div>
          <div className="flex flex-col items-center w-min">
            <div className="flex justify-center items-center w-16 h-16 rounded-full relative bg-primary">
              <FriesIcon />
            </div>
            <span className="mt-1 font-semibold text-sm">Snack</span>
          </div>
        </div>
      </div>
      <h3 className="text-xl font-bold">Makanan</h3>
      <div className="mt-2 grid w-full grid-cols-2 gap-2">
        <Card className="w-full">
          <CardHeader className="p-0 h-[165px] relative">
            <Image
              alt="indomie"
              className="rounded-t-lg"
              fill
              objectFit="cover"
              src="/food/568.png"
            />
          </CardHeader>
          <CardContent className="p-2">
            <p className="font-bold">Indomie </p>
            <p>8.000</p>
          </CardContent>
          <CardFooter className="p-0">
            <Button className="w-full rounded-t-none" size="sm">
              Tambah
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-full">
          <CardHeader className="p-0 h-[165px] relative">
            <Image
              alt="indomie"
              className="rounded-t-lg"
              fill
              objectFit="cover"
              src="/food/goreng-jumbo.jpg"
            />
          </CardHeader>
          <CardContent className="p-2">
            <p className="font-bold">Indomie Jumbo</p>
            <p>15.000</p>
          </CardContent>
          <CardFooter className="p-0">
            <Button className="w-full rounded-t-none" size="sm">
              Tambah
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-full">
          <CardHeader className="p-0 h-[165px] relative">
            <Image
              alt="indomie"
              className="rounded-t-lg"
              fill
              objectFit="cover"
              src="/food/indomie.jpg"
            />
          </CardHeader>
          <CardContent className="p-2">
            <p className="font-bold">Indomie + Telur</p>
            <p>10.000</p>
          </CardContent>
          <CardFooter className="p-0">
            <Button className="w-full rounded-t-none" size="sm">
              Tambah
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-full">
          <CardHeader className="p-0 h-[165px] relative">
            <Image
              alt="indomie"
              fill
              objectFit="cover"
              className="rounded-t-lg"
              src="/food/kentang.jpg"
            />
          </CardHeader>
          <CardContent className="p-2">
            <p className="font-bold">Kentang</p>
            <p>10.000</p>
          </CardContent>
          <CardFooter className="p-0">
            <Button className="w-full rounded-t-none" size="sm">
              Tambah
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-full">
          <CardHeader className="p-0 h-[165px] relative">
            <Image alt="indomie" className="rounded-t-lg" fill src="/food/omelet.jpg" />
          </CardHeader>
          <CardContent className="p-2">
            <p className="font-bold">Omelet</p>
            <p>10.000</p>
          </CardContent>
          <CardFooter className="p-0">
            <Button className="w-full rounded-t-none" size="sm">
              Tambah
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-full">
          <CardHeader className="p-0 h-[165px] relative">
            <Image
              fill
              alt="indomie"
              className="rounded-t-lg"
              objectFit="cover"
              src="/food/cireng.webp"
            />
          </CardHeader>
          <CardContent className="p-2">
            <p className="font-bold">Cireng</p>
            <p>8.000</p>
          </CardContent>
          <CardFooter className="p-0">
            <Button className="w-full rounded-t-none" size="sm">
              Tambah
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
