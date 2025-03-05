import Image from "next/image"
import { ArrowDown, ExternalLink, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-red-200 bg-white/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.jpg?height=40&width=40"
              alt="TRUMPBEAR Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-xl font-bold text-red-600">TRUMP COLLAPSED THE MARKET</span>
          </div>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetTitle>Menu</SheetTitle>
              <nav className="flex flex-col gap-4 pt-10">
                <a href="#about" className="text-lg font-medium hover:text-red-600">
                  About
                </a>
                <a href="#tokenomics" className="text-lg font-medium hover:text-red-600">
                  Tokenomics
                </a>
                <a href="#memes" className="text-lg font-medium hover:text-red-600">
                  Memes
                </a>
                <a href="#news" className="text-lg font-medium hover:text-red-600">
                  Market News
                </a>
                <a href="#buy" className="text-lg font-medium hover:text-red-600">
                  How to Buy
                </a>
              </nav>
            </SheetContent>
          </Sheet>

{/* Desktop menu */}
<nav className="hidden md:flex md:items-center md:gap-6">
  <a href="#about" className="text-sm font-medium hover:text-red-600">
    About
  </a>
  <a href="#tokenomics" className="text-sm font-medium hover:text-red-600">
    Tokenomics
  </a>
  <a href="#memes" className="text-sm font-medium hover:text-red-600">
    Memes
  </a>
  <a href="#news" className="text-sm font-medium hover:text-red-600">
    Market News
  </a>
  <a href="#buy" className="text-sm font-medium hover:text-red-600">
    How to Buy
  </a>
</nav>

<a href="https://raydium.io/swap/?inputMint=sol&outputMint=2RpkogdrqJyUYNzs8Z33k84xDpt8MLZN1KfceD4GkkTm" target="_blank" rel="noopener noreferrer">
  <Button className="hidden bg-red-600 hover:bg-red-700 md:inline-flex">Buy Now</Button>
</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-red-50 to-white py-20">
        <div className="container relative z-10 flex flex-col items-center justify-center gap-8 text-center">
          <div className="flex flex-col items-center">
            <Image
              src="/logo.jpg?height=150&width=150"
              alt="TRUMPBEAR Logo"
              width={150}
              height={150}
              className="rounded-full border-4 border-red-600"
            />
            <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-red-600 md:text-6xl">TRUMP COLLAPSED THE MARKET</h1>
            <p className="mt-4 max-w-2xl text-xl text-gray-600">
              Trump Made a Bear Market Again!
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
  <a href="https://raydium.io/swap/?inputMint=sol&outputMint=2RpkogdrqJyUYNzs8Z33k84xDpt8MLZN1KfceD4GkkTm" target="_blank" rel="noopener noreferrer">
    <Button className="bg-red-600 hover:bg-red-700">Buy on DEX</Button>
  </a>
</div>

          <div>
            <p className="text-red-600 font-semibold">TOKEN CONTRACT:2RpkogdrqJyUYNzs8Z33k84xDpt8MLZN1KfceD4GkkTm</p>
          </div>

          <div className="mt-4 flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-800">
            <ArrowDown className="h-4 w-4" />
            Market is down 2.3% today. Perfect time for $TCTM!
          </div>
        </div>

        {/* Background decorations */}
        <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-red-100 opacity-50"></div>
        <div className="absolute -right-20 top-20 h-40 w-40 rounded-full bg-red-200 opacity-30"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-red-600 md:text-4xl">About TRUMPBEAR</h2>
            <p className="mt-4 text-lg text-gray-600">
            TRUMP COLLAPSED THE MARKET is a community-driven Solana token inspired by the volatility of crypto markets and the
              meme-worthy moments of politics. Born in the bear market, TRUMP COLLAPSED THE MARKET embraces the chaos and turns market
              downturns into opportunities.
            </p>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                  <ArrowDown className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="mt-4 text-xl font-bold">Bear Market Ready</h3>
                <p className="mt-2 text-gray-600">Built to thrive when markets are down</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                  <Image src="/comunity.png?height=32&width=32" alt="Community Icon" width={32} height={32} />
                </div>
                <h3 className="mt-4 text-xl font-bold">Community Powered</h3>
                <p className="mt-2 text-gray-600">Driven by a passionate community of believers</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                  <Image src="/solana.png?height=32&width=32" alt="Solana Icon" width={32} height={32} />
                </div>
                <h3 className="mt-4 text-xl font-bold">Solana Speed</h3>
                <p className="mt-2 text-gray-600">Lightning fast transactions with minimal fees</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="bg-red-50 py-20">
        <div className="container">
          <h2 className="text-center text-3xl font-bold text-red-600 md:text-4xl">Tokenomics</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="rounded-xl bg-white p-6 shadow-md">
              <h3 className="text-xl font-bold text-red-600">Token Distribution</h3>
              <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between">
                  <span>Community</span>
                  <div className="flex items-center">
                    <div className="h-4 w-32 rounded-full bg-gray-200">
                      <div className="h-4 w-[70%] rounded-full bg-red-600"></div>
                    </div>
                    <span className="ml-2 text-sm font-medium">70%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Liquidity</span>
                  <div className="flex items-center">
                    <div className="h-4 w-32 rounded-full bg-gray-200">
                      <div className="h-4 w-[20%] rounded-full bg-red-600"></div>
                    </div>
                    <span className="ml-2 text-sm font-medium">20%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Marketing</span>
                  <div className="flex items-center">
                    <div className="h-4 w-32 rounded-full bg-gray-200">
                      <div className="h-4 w-[5%] rounded-full bg-red-600"></div>
                    </div>
                    <span className="ml-2 text-sm font-medium">5%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Team</span>
                  <div className="flex items-center">
                    <div className="h-4 w-32 rounded-full bg-gray-200">
                      <div className="h-4 w-[5%] rounded-full bg-red-600"></div>
                    </div>
                    <span className="ml-2 text-sm font-medium">5%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-md">
              <h3 className="text-xl font-bold text-red-600">Token Details</h3>
              <div className="mt-4 space-y-4">
                <div className="flex justify-between">
                  <span className="font-medium">Token Name:</span>
                  <span>TRUMP COLLAPSED THE MARKET</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Token Symbol:</span>
                  <span>$TCTM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Blockchain:</span>
                  <span>Solana</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Total Supply:</span>
                  <span>1,000,000,000 $TCTM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Tax:</span>
                  <span>0% Buy / 0% Sell</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Launch Date:</span>
                  <span>March 05, 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market News Section */}
      <section id="news" className="bg-red-50 py-20">
        <div className="container">
          <h2 className="text-center text-3xl font-bold text-red-600 md:text-4xl">Market News</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            Stay updated with the latest news affecting the crypto market.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-red-600">Stock market today: Dow sinks 650 points, S&amp;P 500 wipes out post-election gains as Trump trade war intensifies</CardTitle>
                <CardDescription>March 04, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  The S&amp;P 500 (^GSPC) eliminated its post-election gains during Tuesday&apos;s volatile session as stocks responded to fresh tariffs on Canada, Mexico, and China.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-red-600 hover:bg-red-50 hover:text-red-700 border border-red-600 rounded-lg px-4 py-2 transition-colors duration-200">
                  <a href="https://finance.yahoo.com/news/live/stock-market-today-dow-sinks-650-points-sp-500-wipes-out-post-election-gains-as-trump-trade-war-intensifies-210135991.html" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    Read More <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>

            {/* Card 2 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-red-600">Musk wants the US to leave NATO. Thanks to Marco Rubio, that&apos;s a lot harder.</CardTitle>
                <CardDescription>March 03, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Elon Musk wants the US to leave NATO. Before he joined President Donald Trump&apos;s Cabinet as the secretary of state, Marco Rubio made such a historic move a lot more difficult.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-red-600 hover:bg-red-50 hover:text-red-700 border border-red-600 rounded-lg px-4 py-2 transition-colors duration-200">
                  <a href="https://www.businessinsider.com/elon-musk-nato-withdrawal-us-marco-rubio-2025-3" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    Read More <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>

            {/* Card 3 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-red-600">Ukraine&apos;s fate more precarious than ever after dramatic Trump-Zelensky clash</CardTitle>
                <CardDescription>February 28, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  A disaster for Ukraine. The exposure of the Trump-Vance administration. A polar wind towards Europe. An offering to Moscow. All these observations are justified after the collision that took place in Washington on Friday, February 28, between Donald Trump and his guest, Volodymyr Zelensky, in the Oval Office.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-red-600 hover:bg-red-50 hover:text-red-700 border border-red-600 rounded-lg px-4 py-2 transition-colors duration-200">
                  <a href="https://www.lemonde.fr/en/international/article/2025/03/01/ukraine-s-fate-more-precarious-than-ever-after-trump-s-dramatic-clash-with-zelensky_6738700_4.html" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    Read More <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>

            {/* Card 4 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-red-600">Dow Jones Futures Rise On Tariff News After Market Whipsaws Lower; Trump Addresses Congress</CardTitle>
                <CardDescription>March 03, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Dow Jones futures rose solidly overnight, along with S&amp;P 500 futures and Nasdaq futures, as a top Trump official said Mexico and Canada tariffs could be rolled back quickly. President Donald Trump will give his prime-time address to Congress shortly as Trump tariffs ramp up.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-red-600 hover:bg-red-50 hover:text-red-700 border border-red-600 rounded-lg px-4 py-2 transition-colors duration-200">
                  <a href="https://www.usnews.com/news/economy/articles/2025-03-04/trump-bump-turns-into-trump-slump-as-markets-tank-on-tariffs-ahead-of-joint-address-to-congress" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    Read More <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>

            {/* Card 5 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-red-600">Trump Bump Turns Into Trump Slump as Markets Tank on Tariffs Ahead of Joint Address to Congress</CardTitle>
                <CardDescription>March 4, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  The Dow Jones Industrial Average has lost more than 1,300 points in two days as President Donald Trump ignites a global trade war that some economists say will lead to a recession.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-red-600 hover:bg-red-50 hover:text-red-700 border border-red-600 rounded-lg px-4 py-2 transition-colors duration-200">
                  <a href="https://www.usnews.com/news/economy/articles/2025-03-04/trump-bump-turns-into-trump-slump-as-markets-tank-on-tariffs-ahead-of-joint-address-to-congress" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    Read More <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>

            {/* Card 6 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-red-600">Dow drops nearly 650 points on worries that Trump&apos;s latest tariffs will slow the economy more</CardTitle>
                <CardDescription>March 03, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  NEW YORK (AP) — U.S. stocks tumbled Monday and wiped out even more of their gains since President Donald Trump&apos;s election in November, after he said that tariffs announced earlier on Canada and Mexico would take effect within hours.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-red-600 hover:bg-red-50 hover:text-red-700 border border-red-600 rounded-lg px-4 py-2 transition-colors duration-200">
                  <a href="https://apnews.com/article/stocks-markets-china-rates-inflation-72339ddf1ecb65d7815f4bb5272197d7" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    Read More <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Memes Section */}
      <section id="memes" className="py-20">
        <div className="container">
          <h2 className="text-center text-3xl font-bold text-red-600 md:text-4xl">Trump Memes</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            The best Trump memes from across the crypto community. Laugh your way through the bear market!
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
              >
                <div className="aspect-square w-full overflow-hidden bg-gray-100">
                  <Image
                    src={`/meme${i}.jpg`} // Cambia la URL para cargar imágenes específicas
                    alt={`Trump Meme ${i}`}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Buy Section */}
      <section id="buy" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-red-600 md:text-5xl">How to Buy TRUMP COLLAPSED THE MARKET</h2>
            <p className="mt-4 text-xl text-gray-600">
              Follow these simple steps to get your hands on TRUMP COLLAPSED THE MARKET tokens and join the revolution!
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {/* Step 1 */}
              <div className="rounded-xl bg-white p-8 shadow-lg transition-transform hover:scale-105">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-2xl font-bold text-red-600">
                  1
                </div>
                <h3 className="mt-6 text-2xl font-bold">Create a Wallet</h3>
                <p className="mt-4 text-gray-600">
                  Download Phantom or Solflare wallet and set it up securely.
                </p>
              </div>

              {/* Step 2 */}
              <div className="rounded-xl bg-white p-8 shadow-lg transition-transform hover:scale-105">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-2xl font-bold text-red-600">
                  2
                </div>
                <h3 className="mt-6 text-2xl font-bold">Get SOL</h3>
                <p className="mt-4 text-gray-600">
                  Purchase SOL from a trusted exchange and transfer it to your wallet.
                </p>
              </div>

              {/* Step 3 */}
              <div className="rounded-xl bg-white p-8 shadow-lg transition-transform hover:scale-105">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-2xl font-bold text-red-600">
                  3
                </div>
                <h3 className="mt-6 text-2xl font-bold">Swap for TRUMP COLLAPSED THE MARKET</h3>
                <p className="mt-4 text-gray-600">
                  Use Jupiter or Raydium to swap your SOL for TRUMP COLLAPSED THE MARKET tokens.
                </p>
              </div>
            </div>

            <div className="mt-12">
  <a href="https://raydium.io/swap/?inputMint=sol&outputMint=2RpkogdrqJyUYNzs8Z33k84xDpt8MLZN1KfceD4GkkTm" target="_blank" rel="noopener noreferrer">
    <button className="rounded-lg bg-red-600 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2">
      BUY TRUMP COLLAPSED THE MARKET NOW!
    </button>
  </a>
</div>
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="bg-red-600 py-6 text-white">
        <div className="font-bold text-center"><p>TRUMP MAKE A BEAR MARKET AGAIN</p></div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-10">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.jpg?height=40&width=40"
                alt="TRUMPBEAR Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-xl font-bold text-red-600">TRUMP COLLAPSED THE MARKET</span>
            </div>

            <p className="text-sm text-gray-500">© 2025 TRUMP COLLAPSED THE MARKET. All rights reserved.</p>
          </div>

          <div className="mt-6 text-center text-xs text-gray-500">
            <p>
            TRUMP COLLAPSED THE MARKET is a meme token with no intrinsic value or financial return expectation. This website is for
              entertainment purposes only and does not constitute financial advice.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}