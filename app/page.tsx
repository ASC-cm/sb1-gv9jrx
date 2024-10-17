import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingBag, Heart, User, Search } from 'lucide-react';

const featuredProducts = [
  { id: 1, name: "Summer Breeze Dress", price: 79.99, image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
  { id: 2, name: "Classic Denim Jacket", price: 89.99, image: "https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
  { id: 3, name: "Urban Chic Sneakers", price: 69.99, image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
  { id: 4, name: "Boho Bliss Top", price: 49.99, image: "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">StyleHub</Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><Link href="/women" className="hover:underline">Women</Link></li>
              <li><Link href="/men" className="hover:underline">Men</Link></li>
              <li><Link href="/accessories" className="hover:underline">Accessories</Link></li>
              <li><Link href="/sale" className="hover:underline">Sale</Link></li>
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <Search className="w-6 h-6 cursor-pointer" />
            <ShoppingBag className="w-6 h-6 cursor-pointer" />
            <Heart className="w-6 h-6 cursor-pointer" />
            <User className="w-6 h-6 cursor-pointer" />
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Summer Collection 2023</h1>
            <p className="text-xl mb-8">Discover the hottest trends for the season</p>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">Shop Now</Button>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden">
                  <CardHeader className="p-0">
                    <Image src={product.image} alt={product.name} width={500} height={300} className="w-full h-64 object-cover" />
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <p className="text-muted-foreground">${product.price.toFixed(2)}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Add to Cart</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Join Our Community</h2>
            <p className="text-xl mb-8">Subscribe to our newsletter for exclusive offers and style tips</p>
            <div className="flex justify-center">
              <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-l-md w-64" />
              <Button className="rounded-l-none">Subscribe</Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-background py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
              <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
              <li><Link href="/shipping" className="hover:underline">Shipping & Returns</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:underline">Our Story</Link></li>
              <li><Link href="/careers" className="hover:underline">Careers</Link></li>
              <li><Link href="/sustainability" className="hover:underline">Sustainability</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-primary hover:text-primary/80">Facebook</a>
              <a href="#" className="text-primary hover:text-primary/80">Instagram</a>
              <a href="#" className="text-primary hover:text-primary/80">Twitter</a>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Download Our App</h3>
            <div className="flex space-x-4">
              <Button variant="outline">App Store</Button>
              <Button variant="outline">Google Play</Button>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-8 text-center text-muted-foreground">
          <p>&copy; 2023 StyleHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}