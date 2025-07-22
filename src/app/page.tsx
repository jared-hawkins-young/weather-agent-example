import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-teal-primary text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-teal-primary font-bold text-xl">ILM</span>
              </div>
              <div className="text-lg font-semibold">Fishing</div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="hover:text-gray-200 transition-colors">Home</Link>
              <Link href="/about" className="hover:text-gray-200 transition-colors">About</Link>
              <Link href="/trip-options" className="hover:text-gray-200 transition-colors">Trip Options</Link>
              <Link href="/blog" className="hover:text-gray-200 transition-colors">Blog</Link>
              <Link href="/media" className="hover:text-gray-200 transition-colors">Media</Link>
              <Link href="/locations" className="hover:text-gray-200 transition-colors">Locations</Link>
            </nav>

            {/* Book Now Button */}
            <Button className="bg-white text-teal-primary hover:bg-gray-100 font-semibold px-6">
              BOOK NOW
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen bg-teal-primary text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop"
            alt="Fishing boat on ocean"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>
        <div className="relative z-10 flex items-center justify-center h-full text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-5xl md:text-7xl font-serif mb-6 text-shadow">
              Wilmington Fishing Expeditions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-shadow">
              Wilmington Area's Premier Fly Fishing & Light Tackle Inshore and nearshore fishing charters.
            </p>
            <Button size="lg" className="bg-white text-teal-primary hover:bg-gray-100 font-semibold px-8 py-4 text-lg">
              BOOK NOW
            </Button>
          </div>
        </div>
      </section>

      {/* Service Cards Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Inshore */}
            <Link href="/trip-options" className="relative group cursor-pointer">
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=800&fit=crop"
                  alt="Inshore fishing"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-4xl font-serif text-white text-shadow">Inshore</h3>
                </div>
              </div>
            </Link>

            {/* Nearshore */}
            <Link href="/trip-options" className="relative group cursor-pointer">
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1516571450254-33bcd5b4a8bb?w=800&h=800&fit=crop"
                  alt="Nearshore fishing"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-4xl font-serif text-white text-shadow">Nearshore</h3>
                </div>
              </div>
            </Link>

            {/* Fly Fishing */}
            <Link href="/trip-options" className="relative group cursor-pointer">
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=800&fit=crop"
                  alt="Fly fishing"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-4xl font-serif text-white text-shadow">Fly fishing</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Large Image Section */}
      <section className="h-96 relative">
        <Image
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=800&fit=crop"
          alt="Fishing expedition"
          fill
          className="object-cover"
        />
      </section>

      {/* A Fishing Trip Built For You Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-teal-primary mb-8">
            A Fishing Trip built for you
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We offer inshore and nearshore trips for anglers of all skill levels. Whether you're an expert fly angler or a
              beginner just starting out and looking to learn, we can accommodate and arrange the perfect trip for you and
              your group. Sit back, relax, and let us take you on a journey to explore the coastal waters of North Carolina
              and other surrounding fishing destinations.
            </p>
            <Link href="/trip-options">
              <Button variant="outline" size="lg" className="border-teal-primary text-teal-primary hover:bg-teal-primary hover:text-white">
                MORE INFO
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call To Book Section */}
      <section className="wave-bg py-20 text-white text-center">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl md:text-6xl font-serif italic mb-4 text-shadow">
            Call To Book A Trip!
          </h2>
          <p className="text-2xl mb-8">Wilmington Area</p>
          <p className="text-lg mb-8 max-w-4xl mx-auto">
            Wrightsville Beach | Bald Head island | Figure Eight | Topsail | Carolina Beach | Oak Island |
            Southport | Kure Beach | Surf City | Holden Beach | Myrtle Beach | Ocean isle
          </p>
          <Button size="lg" className="bg-white text-teal-primary hover:bg-gray-100 font-semibold px-8 py-4">
            CONTACT
          </Button>
        </div>
      </section>

      {/* Fish Species Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-teal-primary mb-16">
            Redfish, Trout, Flounder, Albies, and Many More
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1501436513145-30f24e19fcc4?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1565113804075-e0e1e5fe0e3e?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=400&h=400&fit=crop",
            ].map((src, index) => (
              <div key={index} className="relative h-32 rounded-lg overflow-hidden group cursor-pointer">
                <Image
                  src={src}
                  alt={`Fish ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-20 bg-ocean-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white rounded-lg px-6 py-3 mb-4">
              <span className="text-teal-primary font-bold text-xl">Wilmington Fishing Expeditions</span>
            </div>
            <div className="flex justify-center items-center space-x-1 mb-2">
              <span className="text-2xl font-bold text-white">5.0</span>
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
              ))}
            </div>
            <p className="text-white">Based on 85 reviews</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Ellen Marie Kratch",
                time: "9 months ago",
                text: "Captain Jeff, thank you for a wonderful outing for my family. We loved exploring the ICW and the islands you took us to. It was a beautiful day and delightful time for my family of five."
              },
              {
                name: "Brian Hochman",
                time: "10 months ago",
                text: "We had an amazing day with Jeff. We moved to many spots to find the fish and find the fish we did! Several nice drum and as many trout as we could bring."
              },
              {
                name: "Logan Crawford",
                time: "11 months ago",
                text: "Capt Jeff is super knowledgeable of the area, ecosystem and history. Different fishing styles and if one spot isn't working there's already another you're heading to."
              }
            ].map((review, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-gray-600 font-bold">{review.name[0]}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{review.name}</p>
                      <p className="text-gray-500 text-xs">{review.time}</p>
                    </div>
                  </div>
                  <div className="flex space-x-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-teal-primary mb-4">F.A.Q.</h2>
          <p className="text-xl text-gray-600 mb-12">Frequently Asked Questions</p>

          <div className="max-w-2xl mx-auto space-y-4">
            {[
              "How to Prepare",
              "Do we need a fishing license?",
              "Should you tip your captain?",
              "How can we pay?",
              "Cancellation Policy?"
            ].map((question, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-left border-l-4 border-teal-primary">
                <h3 className="text-lg font-semibold text-teal-primary">{question}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif mb-8">Contact Us</h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="text-left">
                <p className="text-lg mb-6">
                  Wilmington Area's Premier Fly Fishing & Light Tackle Inshore and nearshore fishing charters.
                </p>
                <p className="mb-4">
                  Experience the thrill of fishing with Wilmington's best.
                </p>
              </div>

              <div className="text-left space-y-4">
                <div>
                  <span className="font-semibold">Phone:</span> 410-456-1103
                </div>
                <div>
                  <span className="font-semibold">Email:</span> jeffkidfishing@gmail.com
                </div>
                <div>
                  <span className="font-semibold">Address:</span> 109 Causeway Dr, Wrightsville Beach, NC 28480, Wilmington, NC 28405, United States
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white border-opacity-20 pt-8 text-center">
            <p className="text-sm opacity-75">
              Copyright © 2025 Wilmington Fishing Expeditions | Powered by Same
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
