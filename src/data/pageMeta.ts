const BASE_URL = "https://shypbyte.com";

export interface PageMetaConfig {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
}

export const pageMeta: Record<string, PageMetaConfig> = {
  "/": {
    title: "Best International Courier Service in Mumbai | Shyp Byte",
    description:
      "Shyp Byte transforms international courier service with smart technology. We provide seamless worldwide shipping and door to door delivery to 220+ countries making international shipping effortless.",
    keywords:
      "international courier service, courier service Mumbai, worldwide shipping, door to door delivery, international shipping, Shyp Byte",
    canonical: BASE_URL + "/",
  },
  "/about": {
    title: "About Us | Shyp Byte - International Courier & Shipping",
    description:
      "Learn about Shyp Byte's mission, vision, and values. We're building the future of global logistics with one team and complete control over international shipping.",
    keywords:
      "about Shyp Byte, international shipping company, global logistics, courier company Mumbai",
    canonical: BASE_URL + "/about",
  },
  "/tracking": {
    title: "Track Your Shipment | Shyp Byte",
    description:
      "Track your international shipment in real time. Enter your AWB, forwarding, or reference number to get real-time delivery status updates.",
    keywords:
      "track shipment, shipment tracking, AWB tracking, international courier tracking, Shyp Byte",
    canonical: BASE_URL + "/tracking",
  },
  "/offer/ecommerce-business": {
    title: "E-Commerce Business | Amazon, Flipkart, Shopify, Etsy | Shyp Byte",
    description:
      "Ecommerce shipping made simple. Integrate with Amazon, Flipkart, Shopify, Etsy. Doorstep pickup, real-time tracking, affordable international delivery for marketplace sellers.",
    keywords:
      "ecommerce shipping, Amazon Flipkart Shopify Etsy, marketplace shipping, international courier ecommerce, Shyp Byte",
    canonical: BASE_URL + "/offer/ecommerce-business",
  },
  "/offer/d2c-brand": {
    title: "D2C Brand | Global Delivery Solutions | Shyp Byte",
    description:
      "Global delivery solutions for D2C brands. Shyp Byte manages logistics, customs, documentation and cross-border shipping so your brand can grow worldwide.",
    keywords:
      "D2C shipping, direct to consumer courier, cross-border D2C, international courier for brands, Shyp Byte",
    canonical: BASE_URL + "/offer/d2c-brand",
  },
  "/offer/individual-customer": {
    title: "Individual Customer | Global Parcel Shipping | Shyp Byte",
    description:
      "Global parcel shipping for documents, gifts, and personal parcels. Real-time tracking, 24×7 support, doorstep pickup. Send parcels worldwide with Shyp Byte.",
    keywords:
      "global parcel shipping, send parcel abroad, personal courier, gift shipping international, document shipping, Shyp Byte",
    canonical: BASE_URL + "/offer/individual-customer",
  },
  "/offer/b2b-shippers": {
    title: "B2B Shippers | Trusted Global Shipping for Businesses | Shyp Byte",
    description:
      "Reliable B2B courier service for businesses. Door to door delivery, same day delivery, real-time tracking, and dedicated support. Ship to 200+ destinations with Shyp Byte.",
    keywords:
      "B2B courier service, bulk logistics, door to door delivery, same day delivery, enterprise shipping, Shyp Byte",
    canonical: BASE_URL + "/offer/b2b-shippers",
  },
  "/offer/perishable-courier": {
    title: "Perishable Courier | Airport to Doorstep Cold Chain | Shyp Byte",
    description:
      "Temperature-safe perishable courier from airport cargo to customer. Seafood, pharma, flowers, frozen food—express pickup, insulated packaging, real-time tracking, pan-India delivery.",
    keywords:
      "perishable courier, cold chain logistics, airport cargo delivery, temperature controlled shipping, frozen food courier, Shyp Byte",
    canonical: BASE_URL + "/offer/perishable-courier",
  },
  "/blogs": {
    title: "Blog | Shipping & Logistics Insights | Shyp Byte",
    description:
      "Explore insights on international shipping, supply chain optimization, e-commerce shipping, customs regulations, and logistics trends.",
    keywords:
      "shipping blog, logistics blog, international shipping tips, supply chain, e-commerce shipping",
    canonical: BASE_URL + "/blogs",
  },
  "/contact": {
    title: "Contact Us | Shyp Byte - Get In Touch",
    description:
      "Contact Shyp Byte for international shipping enquiries. Reach us via email, phone, or our enquiry form. We typically respond within 24 hours.",
    keywords:
      "contact Shyp Byte, international courier contact, shipping enquiry Mumbai",
    canonical: BASE_URL + "/contact",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Shyp Byte",
    description:
      "ShypByte Logistics Pvt. Ltd. privacy policy. How we collect, use and protect your information on www.shypbyte.com. We never share or sell your data.",
    keywords:
      "privacy policy, Shyp Byte, data protection, cookie policy, ShypByte Logistics",
    canonical: BASE_URL + "/privacy-policy",
  },
  "/shipping-policy": {
    title: "Shipping Policy & Terms of Use | Shyp Byte",
    description:
      "Shyp Byte shipping policy, refund policy and terms of use. Domestic and international shipping duration, liability and conditions of carriage.",
    keywords:
      "shipping policy, refund policy, terms of use, Shyp Byte, conditions of carriage",
    canonical: BASE_URL + "/shipping-policy",
  },
  "/india-to-usa": {
    title: "India to USA | Shyp Byte",
    description:
      "International shipping from India to the United States with Shyp Byte.",
    keywords:
      "India to USA shipping, courier India USA, international shipping, Shyp Byte",
    canonical: BASE_URL + "/india-to-usa",
  },
  "/thankyou-india-to-usa": {
    title: "Thank You | India to USA Enquiry | Shyp Byte",
    description:
      "Your India to USA shipping enquiry was received. Our team will follow up shortly.",
    keywords:
      "India to USA shipping, courier enquiry, thank you, Shyp Byte",
    canonical: BASE_URL + "/thankyou-india-to-usa",
  },
};
