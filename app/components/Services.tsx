import Image from 'next/image';

export function Services() {
  const cards = [
    {
      titleTop: "Search Engine",
      titleBottom: "Optimization",
      img: "/MagnifierWeb.svg",
      link: "https://google.com",
    },
    {
      titleTop: "Pay-per-click",
      titleBottom: "Advertising",
      img: "/SelectingValue.svg",
      link: "https://google.com",
    },
  ];

  return (
    <section className="p-8 flex justify-center">
      <div className="flex flex-col gap-6 relative">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h1 className="text-2xl font-bold text-center mb-7 bg-green inline-block rounded-md px-2">
            Services
          </h1>
          <p>
            At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
          </p>
        </div>

        {/* Service Cards */}
        {cards.map((card, index) => {
          const isOdd = index % 2 !== 0;

          return (
            <div key={index} className="relative w-97 h-80">
              {/* Background card (black) */}
              <div className="absolute top-0 left-0 w-full h-full bg-black rounded-[40px] shadow-sm z-0" />

              {/* Foreground card */}
              <a
                href={card.link}
                className={`absolute top-0 left-[1px] right-[1px] bottom-1.5 z-10 flex flex-col justify-between border rounded-[40px] shadow hover:shadow-lg transition text-left p-[50px] ${
                  isOdd ? 'bg-gray-100' : 'bg-green'
                }`}
              >
                {/* Text Section */}
                <div className="leading-none">
                  <h1
                    className={`block w-fit text-xl font-bold px-2 py-1 rounded-md ${
                      isOdd ? 'bg-green' : 'bg-white'
                    }`}
                  >
                    {card.titleTop}
                  </h1>
                  <h1
                    className={`block w-fit text-lg font-bold px-2 py-1 rounded-md ${
                      isOdd ? 'bg-green' : 'bg-white'
                    }`}
                  >
                    {card.titleBottom}
                  </h1>
                </div>

                {/* Bottom Section: arrow and main image */}
                <div className="flex justify-between items-end w-full">
                  <Image
                    src="/Arrow.svg"
                    alt="Arrow"
                    width={41}
                    height={41}
                  />
                  <Image
                    src={card.img}
                    alt={`${card.titleTop} ${card.titleBottom}`}
                    width={165}
                    height={129}
                  />
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
