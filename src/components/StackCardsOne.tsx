import type { FC } from "react";

interface StackCard {
  id: number;
  number: string;
  title: string;
  description: string;
  ctaTo: string;
  image?: string;
}

const stackCardsData: StackCard[] = [
  {
    id: 0,
    number: "01",
    title: "E-Commerce Business",
    description:
      "Built for online sellers on Shopify, marketplaces, and independent stores. Manage orders, generate labels, and track shipments easily through a single ecommerce shipping platform. Scale your store with tools that integrate with your sales channels.",
    ctaTo: "/offer/ecommerce-business",
    image: "/assets/images/ecommerce-business.jpg",
  },
  {
    id: 1,
    number: "02",
    title: "D2C Brand",
    description:
      "Ship directly from your warehouse to customers across the world. Shypbyte helps D2C brands simplify international shipping, fulfillment, and delivery so you can focus on growing your brand. Get transparent rates and end-to-end visibility for every order.",
    ctaTo: "/offer/d2c-brand",
    image: "/assets/images/d2c-brand.jpg",
  },
  {
    id: 2,
    number: "03",
    title: "Individual Customer",
    description:
      "Sending a package to family or friends abroad? Shypbyte makes international courier services for individuals simple with easy booking, doorstep pickup, and reliable delivery worldwide. No complex paperwork—just book, pack, and we handle the rest.",
    ctaTo: "/offer/individual-customer",
    image: "/assets/images/individual-customers.jpg",
  },
  {
    id: 3,
    number: "04",
    title: "B2B Shippers",
    description:
      "Reliable logistics solutions for exporters, manufacturers, and growing businesses shipping internationally. Shypbyte supports bulk shipments and global supply chains with dependable courier partners. Optimize costs and delivery times with dedicated support.",
    ctaTo: "/offer/b2b-shippers",
    image: "/assets/images/b2b-shippers.jpg",
  },
];

const StackCardsOne: FC = () => {
  return (
    <section className='stack-cards py-120 position-relative z-1 section-bg-one'>
      <div className='container'>
        <div className='tw-mb-8 text-center'>
          <span className='tw-py-1 tw-px-705 bg-main-50 text-main-600 tw-text-sm fw-bold text-capitalize rounded-pill tw-mb-205 d-inline-block'>
            We Offer
          </span>
          <h3 className='splitTextStyleOne fw-light tw-leading-104 text-center max-w-672-px mx-auto tw-mt-3'>
            <span className='d-inline-block'>Shipping Solutions</span>
            <span className='d-inline-block'>&nbsp;</span>
            <span className='d-inline-block'>For Every</span>
            <span className='d-inline-block'>&nbsp;</span>
            <span className='d-inline-block fw-semibold text-main-600'>Business</span>
          </h3>
        </div>

        <div className='cards_list'>
          {stackCardsData.map((card) => (
            <div key={card.id} className='card_item'>
              <div className='card_box'>
                {card.image && (
                  <img
                    src={card.image}
                    alt={card.title}
                    className='card_image'
                  />
                )}
                <div className='card_content'>
                  <div className='card_title'>
                    <span className='sr_no'>{card.number}</span>
                    <span className='ttl_name'>{card.title}</span>
                  </div>
                  <div className='card_text'>
                    <p>{card.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className='cards_list_spacer' aria-hidden />
        </div>
      </div>
    </section>
  );
};

export default StackCardsOne;
