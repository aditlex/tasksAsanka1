export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      {/* Navbar Sticky */}
      <nav className="sticky top-0 z-50 backdrop-blur bg-white/70 shadow-sm transition-all duration-300">
        <div className="flex items-center justify-between px-8 h-20">
          {/* Kiri */}
          <div className="flex items-center space-x-12 -ml-4">
            <img src="/logo.svg" alt="Logo" className="h-11 w-auto" />
            <div className="hidden md:flex items-center space-x-10 text-gray-700 text-sm font-medium">
              <a href="#" className="flex items-center hover:text-blue-500">
                Tools
                <img src="/chevron-down.svg" alt="▼" className="w-4 h-4 ml-1" />
              </a>
              <a href="#" className="flex items-center hover:text-blue-500">
                For Developers (APIs)
                <img src="/chevron-down.svg" alt="▼" className="w-4 h-4 ml-1" />
              </a>
              <a href="#" className="flex items-center hover:text-blue-500">
                Pricing
                <img src="/sale.png" alt="Sale" className="h-15 mt-5 w-auto ml-3" />
              </a>
            </div>
          </div>

          {/* Kanan */}
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
              <img src="/microsoft-edge.svg" alt="Search" className="h-5 w-5" />
            </button>
            <button className="px-5 py-2 rounded-full text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 text-sm font-semibold">
              Log in
            </button>
          </div>
        </div>
      </nav>

     <section className="relative text-center py-28 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 overflow-hidden">
  {/* Heading */}
  <h1 className="mt-20 text-5xl md:text-7xl font-medium text-gray-900 leading-tight relative inline-block">
    The{" "}
    <span className="relative inline-block">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 tracking-wide">
        Easiest AI
      </span>
      {/* Pink underline image */}
      <img
        src="/underline pink.png"
        alt="Underline"
        className="absolute left-0 -bottom-10 w-full h-20 object-contain pointer-events-none"
      />
    </span>{" "}
    Photo Editor
  </h1>

  {/* Description */}
  <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
    Your all-in-one free AI photo editor. Create professional photos and bring your ideas to life effortlessly.
  </p>

  {/* CTA Button */}
<button className="relative overflow-hidden mt-10 px-28 py-4 text-xl font-semibold text-white rounded-full shadow-xl group transition-all duration-600 ease-in-out hover:scale-105 hover:-translate-y-1">
  <span className="relative z-10">Get Started for Free</span>
  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 transition-opacity duration-600 ease-in-out group-hover:opacity-0"></div>
  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 transition-opacity duration-600 ease-in-out group-hover:opacity-100"></div>
</button>

        {/* Hero Image Placeholder */}
       <div className="mt-12 mx-auto max-w-5xl">
          <video
            className="w-full rounded-xl shadow-lg"
            autoPlay muted loop
          >
            <source src="/banner.Wuxm3X9O.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className="bg-gradient-to-b from-indigo-50 via-white to-indigo-50 py-20 px-4 md:px-10 text-center">
  {/* Title */}
  <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
    Discover More <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Photo Editing Tools</span>
  </h2>
  <p className="mt-4 text-gray-500 max-w-3xl mx-auto text-base md:text-lg">
    All AI image generator and design tools are right at your fingertips. Edit photos like a pro now!
  </p>

  {/* Tabs */}
  <div className="mt-10 flex justify-center space-x-4 bg-white p-1 rounded-full shadow-md w-fit mx-auto text-sm md:text-base font-semibold">
    <button className="bg-blue-600 text-white px-6 py-2 rounded-full shadow hover:opacity-90 transition">Product Studio</button>
    <button className="px-6 py-2 rounded-full text-gray-600 hover:text-blue-500">Top AI Tools</button>
    <button className="px-6 py-2 rounded-full text-gray-600 hover:text-blue-500">Editing Tools</button>
  </div>

 <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-0 max-w-6xl mx-auto">
  
  {/* Card 1 */}
  <div className="bg-white rounded-3xl shadow-xl overflow-hidden transition-transform duration-300 hover:shadow-2xl">
    <div className="overflow-hidden">
      <img src="/foto1.png" alt="Batch White Background" 
        className="w-full h-48 object-cover rounded-t-3xl transition-transform duration-300 hover:scale-105" />
    </div>
    <div className="p-4 text-left">
      <h3 className="text-base font-bold text-gray-800">Batch White Background</h3>
      <p className="text-sm text-gray-600 mt-2">
        Replace backgrounds with pure white in bulk. Ideal for product galleries, online stores, and streamlined visuals.
      </p>
    </div>
  </div>

  {/* Card 2 */}
  <div className="bg-white rounded-3xl shadow-xl overflow-hidden transition-transform duration-300 hover:shadow-2xl">
    <div className="overflow-hidden">
      <img src="/foto2.png" alt="AI Background Generator" 
        className="w-full h-48 object-cover rounded-t-3xl transition-transform duration-300 hover:scale-105" />
    </div>
    <div className="p-4 text-left">
      <h3 className="text-base font-bold text-gray-800">AI Background Generator</h3>
      <p className="text-sm text-gray-600 mt-2">
        Generate instant backgrounds for products. Custom backgrounds or select a template.
      </p>
    </div>
  </div>

  {/* Card 3 */}
  <div className="bg-white rounded-3xl shadow-xl overflow-hidden transition-transform duration-300 hover:shadow-2xl">
    <div className="overflow-hidden">
      <img src="/foto3.png" alt="Batch Removal" 
        className="w-full h-48 object-cover rounded-t-3xl transition-transform duration-300 hover:scale-105" />
    </div>
    <div className="p-4 text-left">
      <h3 className="text-base font-bold text-gray-800">Batch Removal</h3>
      <p className="text-sm text-gray-600 mt-2">
        AI-powered bulk background removal. Fast, accurate, and perfect for e-commerce or content creation.
      </p>
    </div>
  </div>

  {/* Card 4 */}
  <div className="bg-white rounded-3xl shadow-xl overflow-hidden transition-transform duration-300 hover:shadow-2xl">
    <div className="overflow-hidden">
      <img src="/foto4.png" alt="Object Eraser" 
        className="w-full h-48 object-cover rounded-t-3xl transition-transform duration-300 hover:scale-105" />
    </div>
    <div className="p-4 text-left">
      <h3 className="text-base font-bold text-gray-800">Object Eraser</h3>
      <p className="text-sm text-gray-600 mt-2">
        Our AI automatically detects and removes objects in photos, allowing seamless editing for your needs.
      </p>
    </div>
  </div>

  {/* Card 5 */}
  <div className="bg-white rounded-3xl shadow-xl overflow-hidden transition-transform duration-300 hover:shadow-2xl">
    <div className="overflow-hidden">
      <img src="/foto5.png" alt="Enhance Image" 
        className="w-full h-48 object-cover rounded-t-3xl transition-transform duration-300 hover:scale-105" />
    </div>
    <div className="p-4 text-left">
      <h3 className="text-base font-bold text-gray-800">Enhance Image</h3>
      <p className="text-sm text-gray-600 mt-2">
        Quickly detect and remove watermarks from multiple photos. Boost your productivity with batch processing.
      </p>
    </div>
  </div>

  {/* Card 6 */}
  <div className="bg-white rounded-3xl shadow-xl overflow-hidden transition-transform duration-300 hover:shadow-2xl">
    <div className="overflow-hidden">
      <img src="/foto6.png" alt="Colorizer" 
        className="w-full h-48 object-cover rounded-t-3xl transition-transform duration-300 hover:scale-105" />
    </div>
    <div className="p-4 text-left">
      <h3 className="text-base font-bold text-gray-800">Colorizer</h3>
      <p className="text-sm text-gray-600 mt-2">
        Need more space in your image? AI fills the gaps flawlessly for product shots, social media, and designs.
      </p>
    </div>
  </div>

</div>

 <div className="mt-10 text-center">
  <a href="#" className="text-indigo-600 font-semibold text-lg inline-flex items-center hover:underline">
    See All Tools
    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </a>
</div>
</section>

<div className="bg-white py-16  mx-auto w-full">
  {/* Heading */}
  <h2 className="text-5xl font-bold text-center text-gray-900 mb-22">
    Empower Your <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">Creative</span> Journey
  </h2>

 <div className="flex flex-col lg:flex-row items-center justify-center px-4 py-8">

  {/* Left - Images */}
  <div className="relative flex items-center">

    {/* Small Images in Column */}
    <div className="flex flex-col gap-4 mr-4">
      <img src='after.png' className="mb-10 w-40 h-auto bg-gray-200 rounded-xl shadow-md flex items-center justify-center ">
      </img>
      <img src='before.png' className="mb-8 w-40 h-auto bg-gray-200 rounded-xl shadow-md flex items-center justify-center ">
      </img>
    </div>

    {/* Main Image */}
    <img src='main.png' className="w-120 h-auto bg-gray-100 rounded-2xl shadow-lg flex items-center justify-center mr-5 text-gray-500 text-sm fade-animation">
     
    </img>

    {/* Icon Bar */}
    <div className="absolute -bottom-10 bg-white/60 rounded-full shadow-lg flex -px-15 -py-4 gap-3 items-center float-animation">
     <img src='Tools.png' className='h-auto w-100'></img>
    </div>

  </div>

  {/* Right - Text */}
  <div className="max-w-lg mt-10 lg:mt-0 lg:ml-10 text-center lg:text-left mb-30">
    <h3 className="text-4xl font-semibold leading-snug mb-4 text-gray-900">
      <span className="text-indigo-600">Remove Background</span> and <br />
      Create Stunning <span className="text-indigo-600">Product Photos</span> Instantly
    </h3>
    <p className="text-gray-500 text-md">
      Quickly isolate your image subject with PicWish background remover. You can process up to 30 files and do more editing at a time. Say goodbye to manual editing and removing backgrounds online has never been easier!
    </p>
  </div>
</div>
</div>


<div className="flex flex-col lg:flex-row items-center justify-center px-4 py-16 bg-white">
  {/* Left - Text */}
  <div className="flex flex-col items-center lg:items-start max-w-2xl mb-10 lg:mb-0 lg:mr-16 text-center lg:text-left">
    <h3 className="text-3xl lg:text-4xl font-semibold leading-snug mb-4 text-gray-900">
      <span className="text-indigo-600">Enhance Details</span> to Transform <br className="hidden lg:block" /> 
      Blurry Photos into Crystal<br className="hidden lg:block" /> Clear
    </h3>
    <p className="text-gray-500 text-md">
      No professional skills required! With PicWish, you can<br className="hidden lg:block" />
      effortlessly unblur and sharpen images online for free.<br className="hidden lg:block" />
      Transform your photos from fuzzy to clear, ensuring high-<br className="hidden lg:block" />
      resolution images for personal and business needs.
    </p>
  </div>

  {/* Right - Image */}
<div className="relative overflow-hidden rounded-2xl shadow-lg w-full max-w-2xl lg:w-[45%]">
  <img
    src="main2.png"
    className="w-full h-auto"
    alt="Main"
  />
  <div className="shimmer-effect absolute top-0 left-0 w-full h-full pointer-events-none" />
</div>



</div>


<div className="flex flex-col lg:flex-row items-center justify-center px-6 py-12 bg-violet-300/10 ">

 <img src='main3.png' className="w-140 h-auto rounded-2xl flex items-center justify-center mr-5 text-gray-500 text-sm mb-10 lg:mb-0"></img>

  {/* Right - Text */}
  <div className="lg:ml-10 lg:mt-0 max-w-lg text-center lg:text-left">

  {/* Badge + Text */}
  <div className="flex items-center justify-center lg:justify-start mb-10 -mt-20">
    <img src="new.svg" className="h-9 w-auto scale-animation" alt="Icon" />
    <span className="ml-4 text-md opacity-60 text-gray-500">Online Photo Editor</span>
  </div>

  {/* Heading */}
  <h2 className="text-5xl font-semibold mb-10 text-black leading-tight">
    Online Editing, <br />
    <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent whitespace-nowrap">
      Unlimited Creativity
    </span>
  </h2>

  {/* Description */}
  <p className="text-gray-500 text-sm mb-6">
   Discover the power of our all-in-one online photo editor, where you<br></br>can effortlessly handle everything from retouching and<br></br> background removal to resizing in just a few clicks.
  </p>

  {/* Button */}
  <button className="bg-white text-blue-800 px-16 py-3 rounded-full shadow hover:bg-blue-800 hover:text-white transition">
    Get Started Now
  </button>
</div>
</div>

<div className="bg-gradient-to-br from-[#eef5ff] to-white py-16 px-6 text-center">
  <h2 className="text-5xl font-semibold mb-8 text-black">What Do Our Users Say</h2>

  {/* Rating Summary */}
  <div className="flex flex-wrap justify-center gap-8 mb-14">
    <div className="text-sm">
      <p className="font-bold text-lg text-gray-400">4.4 <span className="text-green-500">★★★★★</span></p>
      <p className="text-gray-500">Trustpilot</p>
    </div>
    <div className="text-sm">
      <p className="font-bold text-lg text-gray-400">4.8 <span className="text-yellow-500">★★★★★</span></p>
      <p className="text-gray-500">Product Hunt</p>
    </div>
    <div className="text-sm">
      <p className="font-bold text-lg text-gray-400">5.0 <span className="text-yellow-500">★★★★★</span></p>
      <p className="text-gray-500">AlternativeTo</p>
    </div>
    <div className="text-sm">
      <p className="font-bold text-lg text-gray-400">4.5 <span className="text-yellow-500">★★★★★</span></p>
      <p className="text-gray-500">G2</p>
    </div>
  </div>

  {/* Testimonials */}
  <div className="flex flex-col items-center lg:flex-row justify-center  gap-6">

    {/* Card 1 */}
    <div className="bg-white rounded-2xl shadow p-6 text-left max-w-sm">
      <p className="text-yellow-500 text-xl mb-2">★★★★★</p>
      <h3 className="font-semibold text-black mb-2">User-friendly</h3>
      <p className="text-gray-400 text-sm mb-4">
        I just used Picwish to edit some photos and was pleased with the results. The site is easy to use, and the editing tools are intuitive. If you're looking for a user-friendly photo editor to unblur your pictures or a superb background remover, I'd definitely recommend this site.
      </p>
      <div className="flex items-center gap-3">
        <img src='pp1.png' className="w-10 h-10 bg-gray-300 rounded-full"></img>
        
        <div>
          <p className="font-semibold text-black text-sm">Phillip Sear</p>
          <p className="text-gray-400 text-xs">Designer</p>
        </div>
        <img src='indexcoment2.svg' className='ml-auto'></img>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-white rounded-2xl shadow p-6 text-left max-w-sm">
      <p className="text-yellow-500 text-xl mb-2">★★★★★</p>
      <h3 className="font-semibold text-black mb-2">Best background remover</h3>
      <p className="text-gray-400 text-sm mb-4">
        I like it's AI visualization which it saves my time. I change background of a image, enhancement, to remove any object from an image. In comparison to other software it have a powerful AI which makes my work easy. Also it has a very easy to use interphase.
      </p>
      <div className="flex items-center gap-3">
         <img src='pp2.png' className="w-10 h-10 bg-gray-300 rounded-full"></img>
        <div>
          <p className="font-semibold text-black text-sm">Olivia Watson</p>
          <p className="text-gray-400 text-xs">E-commerce staff</p>
        </div>
        <img src='indexcoment1.svg' className='ml-auto'></img>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-white rounded-2xl shadow p-6 text-left max-w-sm">
      <p className="text-yellow-500 text-xl mb-2">★★★★★</p>
      <h3 className="font-semibold text-black mb-2">Great app</h3>
      <p className="text-gray-400 text-sm mb-4">
        Congratulations on developing such an amazing web app. I have been looking for many years for a tool to sharpen blurry images of scanned vintage sheet music made available online by libraries or sent directly to me, and (presumably with AI help) this works miraculously!
      </p>
      <div className="flex items-center gap-3">
         <img src='pp3.png' className="w-10 h-10 bg-gray-900 rounded-full"></img>
        <div>
          <p className="font-semibold text-black text-sm">Melody Daniels</p>
          <p className="text-gray-400 text-xs">Music teacher</p>
        </div>
        <img src='indexcoment2.svg' className='ml-auto'></img>
      </div>
    </div>

  </div>

  {/* Join Button */}
 <div className="mt-12">
  <button className="border-2 border-indigo-500 text-indigo-500 px-16 py-4 rounded-full button-fill-gradient">
    <span>Join Our Facebook Community</span>
  </button>
</div>


</div>

<div className="relative w-full md:w-full h-30 flex justify-end items-center top-100 z-100 hidden xl:flex ">
  <div className="absolute w-auto h-100 z-100 right-110 -top-100 float-down-up">
    <img src="handphone.png" className="h-full" />
  </div>

  <div className="absolute w-auto h-118 z-100 right-35 -top-37 float-up-down">
    <img src="laptop.png" className="h-full" />
  </div>
</div>


<div className='flex flex-col justify-center items-center '>
<div className="relative h-[70%]  bg-gradient-to-br w-[80%] rounded-[60px] from-blue-100 via-purple-100 to-white overflow-hidden p-8">

   <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between px-4 py-12 ml-20">
  <div className="text-center md:text-left md:w-1/2 mb-12 md:mb-0">
    <h1 className="text-5xl font-semibold text-gray-900 mb-6">
      Explore <span className="text-indigo-600">PicWish Apps</span>
    </h1>
   <button className="inline-flex items-center font-semibold py-3 px-8 rounded-full shadow-lg text-white 
  bg-gradient-to-r from-blue-400 to-blue-700 
  bg-[length:200%_auto] bg-left 
  hover:bg-right hover:shadow-xl 
  transition-all duration-500 ease-in-out transform hover:scale-105 hover:-translate-y-1">
  Get Started for Free 
  
</button>


    <p className="mt-8 text-gray-700 text-lg leading-relaxed">
      Available on Windows, macOS, iOS and Android.<br />
      Download the app and access more features.
    </p>

    <div className="flex flex-col sm:flex-row mt-10 space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
      <a href="#" className="inline-flex items-center justify-center bg-black border border-gray-300  font-medium py-3 px-6 rounded-lg shadow hover:bg-gray-50 transition duration-300">
        <img src="windos.svg" alt="Windows" className="h-6 mr-2" />
        Download for Windows
      </a>
      <a href="#" className="inline-flex items-center justify-center bg-black border border-gray-300  font-medium py-3 px-6 rounded-lg shadow hover:bg-gray-50 transition duration-300">
         <img src="appstor.svg" alt="Windows" className="h-6 mr-2" />
        Download on the APP Store
      </a>
      <a href="#" className="inline-flex items-center justify-center bg-black text-white font-medium px-6 rounded-lg shadow hover:opacity-90 transition duration-300">
         <img src="playstore.svg" alt="Windows" className="h-6 mr-2" />
        GET IT ON Google Play
      </a>
    </div>
  </div>
</div>

 
    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 opacity-50 blur-3xl -z-0"></div>
</div>
</div>
<div className='mb-30'></div>

<div className="bg-black text-white py-10 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">

    {/* Brand & Subscribe */}
    <div className="flex flex-col gap-4 col-span-1 mr-20 w-full ">
      <img src="/logo.svg" alt="Logo" className="h-10 w-auto mb-4 -ml-10" />
      <div className="flex gap-3">
        <img src='tik-tok (1).png' className="w-6 h-6"></img> {/* TikTok */}
        <img src='facebook.png' className="w-6 h-6 "></img> {/* FB */}
        <img src='instagram.png' className="w-6 h-6 "></img> {/* IG */}
        <img src='youtube.png' className="w-8 h-8 "></img> {/* YT */}
      </div>

      <div className="flex mt-4">
        <input type="email" placeholder="Your email address" className="px-3 py-2 rounded-l bg-white text-black text-sm w-40" />
        <button className="bg-indigo-600 px-4 py-2 rounded-r text-sm font-semibold">Subscribe</button>
         
      </div>

      <div className="mt-4 text-sm">Language: <span className="underline">English</span></div>
     

<img src='footer.png' className="w-64 h-20 rounded mt-4 -ml-4"></img> {/* Product Hunt */}
    </div>

    {/* AI Tools */}
    <div>
      <h3 className="font-bold mb-2">AI Tools</h3>
      <ul className="text-sm space-y-1 text-gray-300">
        <li>AI Background Generator</li>
        <li>AI Art Generator</li>
        <li>Other AI Tools</li>
      </ul>
    </div>

    {/* Tools */}
    <div>
      <h3 className="font-bold mb-2">Tools</h3>
      <ul className="text-sm space-y-1 text-gray-300">
        <li>Background Remover</li>
        <li>Image Enlarger</li>
        <li>Photo Retouch</li>
        <li>JPG Converter</li>
        <li>Image Compressor</li>
        <li>Face Enhancement</li>
        <li>Photo Enhancer</li>
        <li>Image to Text</li>
        <li>Toolbox</li>
      </ul>
    </div>

    {/* Help */}
    <div>
      <h3 className="font-bold mb-2">Help and FAQs</h3>
      <ul className="text-sm space-y-1 text-gray-300">
        <li>FAQ</li>
        <li>Resources</li>
        <li>Contact Us</li>
      </ul>
    </div>

    {/* Company */}
    <div>
      <h3 className="font-bold mb-2">Company</h3>
      <ul className="text-sm space-y-1 text-gray-300">
        <li>About Us</li>
        <li>Affiliate Program</li>
      </ul>
      <img src='/playsotre.png' className="w-32 h-10  rounded mt-4"></img> {/* App Store */}
      <img src='/appsotre.png' className="w-32 h-10  rounded mt-2"></img> {/* Google Play */}
    </div>

  </div>

  {/* Bottom Footer */}
  <div className="text-center text-xs text-gray-500 border-t border-gray-700 mt-10 pt-4 space-x-2">
    <span>Copyright © 2025 PicWish All Rights Reserved.</span>
    <span>Terms</span> | <span>Privacy</span> | <span>Cookies Policy</span> | <span>License Agreement</span>
  </div>
</div>

    </div>
  );
}