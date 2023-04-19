import Link from 'next/link'
import React from 'react'

const Blog = () => {
  return (
    <>
    <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<Link rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
			<img src="images/blogbanner.png" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">How the COVID-19 Pandemic has Changed the Rental Market</h3>
				<span className="text-xs dark:text-gray-400">February 19, 2021</span>
				<p>The COVID-19 pandemic has had a significant impact on the rental market, with many renters seeking larger living spaces or relocating to less expensive areas. Additionally, landlords and property managers have had to adapt to new safety measures and virtual leasing practices. Despite these changes, the rental market is expected to remain strong in the coming years.</p>
			</div>
		</Link>
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			<Link rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="images/blog1.png" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Top 5 Tips for Renting a Vacation Home</h3>
					<span className="text-xs dark:text-gray-400">January 21, 2021</span>
					<p>Renting a vacation home can be a great way to enjoy a relaxing getaway, but it's important to take the necessary precautions to ensure a safe and enjoyable experience. Our top tips include researching the area, reading reviews, booking early, considering travel insurance, and communicating with the property owner or manager.</p>
				</div>
			</Link>
			<Link rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="images/blog2.png" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">The Pros and Cons of Buying a Fixer-Upper Property</h3>
					<span className="text-xs dark:text-gray-400">January 22, 2021</span>
					<p>Buying a fixer-upper property can be a great way to get a good deal on a home and add value through renovations. However, it's important to weigh the pros and cons before making a purchase. Pros include lower purchase prices, the ability to customize the home to your liking, and potential profits from the resale. Cons include the risk of unexpected expenses, the time and effort required for renovations, and the possibility of over-improving the property for the area.</p>
				</div>
			</Link>
			<Link rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="images/blog3.png" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">The Future of Sustainable Housing</h3>
					<span className="text-xs dark:text-gray-400">January 23, 2021</span>
					<p>As the world becomes more environmentally conscious, the demand for sustainable housing is on the rise. This includes features like energy-efficient appliances, solar panels, and green building materials. Additionally, some communities are experimenting with innovative housing solutions like tiny homes and co-living spaces. The future of sustainable housing is promising, and we're excited to see what developments lie ahead.</p>
				</div>
			</Link>
			<Link rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="images/blog4.png" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">The Rise of Smart Home Technology in Rental Properties</h3>
					<span className="text-xs dark:text-gray-400">January 24, 2021</span>
					<p>Smart home technology is becoming increasingly popular among renters, as it offers convenience and security features that were previously only available to homeowners. Features like smart thermostats, automated lighting, and keyless entry systems are becoming standard in many rental properties, and landlords are seeing the benefits in terms of energy savings and reduced maintenance costs.</p>
				</div>
			</Link>
			<Link rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="images/blog5.png" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">How to Make Your Rental Property Stand Out in a Competitive Market</h3>
					<span className="text-xs dark:text-gray-400">January 25, 2021</span>
					<p>With so many rental properties on the market, it's important to make yours stand out. Our top tips include professional photography, staging the property, pricing it competitively, and offering incentives like free rent or waived fees.</p>
				</div>
			</Link>
			<Link rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="images/blog6.png" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">The Benefits of Renting vs. Buying a Home</h3>
					<span className="text-xs dark:text-gray-400">January 26, 2021</span>
					<p>Renting a home offers many benefits over buying, including flexibility, lower upfront costs, and fewer maintenance responsibilities. Additionally, in some markets, it may be cheaper to rent than to buy. However, buying a home can offer long-term financial benefits and the ability to customize the property to your liking.</p>
				</div>
			</Link>
		<div className="flex justify-center">
			<button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400">Load more posts...</button>
		</div>
	</div>
	</div>
</section>

    </>

    
  )
}

export default Blog
