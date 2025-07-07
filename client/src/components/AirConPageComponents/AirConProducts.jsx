const products = [
  {
    id: 1,
    name: "Инверторен климатик GREE GWH12AGB-K6DNA1A",
    href: "#",
    imageSrc:
      "https://s13emagst.akamaized.net/products/51341/51340887/images/res_3e66bc9d6cc52e08893e83a35a3a34c6.jpg?width=720&height=720&hash=27943222B1A3109C842327FF1C6C6645",
    imageAlt: "Вътрешно тяло снимка",
    price: "1.079,00 лв.",
    color: "Бял",
  },
  {
    id: 1,
    name: "Инверторен климатик GREE GWH12AGB-K6DNA1A",
    href: "#",
    imageSrc:
      "https://s13emagst.akamaized.net/products/51341/51340887/images/res_3e66bc9d6cc52e08893e83a35a3a34c6.jpg?width=720&height=720&hash=27943222B1A3109C842327FF1C6C6645",
    imageAlt: "Вътрешно тяло снимка",
    price: "1.079,00 лв.",
    color: "Бял",
  },
  {
    id: 1,
    name: "Инверторен климатик GREE GWH12AGB-K6DNA1A",
    href: "#",
    imageSrc:
      "https://s13emagst.akamaized.net/products/51341/51340887/images/res_3e66bc9d6cc52e08893e83a35a3a34c6.jpg?width=720&height=720&hash=27943222B1A3109C842327FF1C6C6645",
    imageAlt: "Вътрешно тяло снимка",
    price: "1.079,00 лв.",
    color: "Бял",
  },
  {
    id: 1,
    name: "Инверторен климатик GREE GWH12AGB-K6DNA1A",
    href: "#",
    imageSrc:
      "https://s13emagst.akamaized.net/products/51341/51340887/images/res_3e66bc9d6cc52e08893e83a35a3a34c6.jpg?width=720&height=720&hash=27943222B1A3109C842327FF1C6C6645",
    imageAlt: "Вътрешно тяло снимка",
    price: "1.079,00 лв.",
    color: "Бял",
  },
  {
    id: 1,
    name: "Инверторен климатик GREE GWH12AGB-K6DNA1A",
    href: "#",
    imageSrc:
      "https://s13emagst.akamaized.net/products/51341/51340887/images/res_3e66bc9d6cc52e08893e83a35a3a34c6.jpg?width=720&height=720&hash=27943222B1A3109C842327FF1C6C6645",
    imageAlt: "Вътрешно тяло снимка",
    price: "1.079,00 лв.",
    color: "Бял",
  },
  {
    id: 1,
    name: "Инверторен климатик GREE GWH12AGB-K6DNA1A",
    href: "#",
    imageSrc:
      "https://s13emagst.akamaized.net/products/51341/51340887/images/res_3e66bc9d6cc52e08893e83a35a3a34c6.jpg?width=720&height=720&hash=27943222B1A3109C842327FF1C6C6645",
    imageAlt: "Вътрешно тяло снимка",
    price: "1.079,00 лв.",
    color: "Бял",
  },
  {
    id: 1,
    name: "Инверторен климатик GREE GWH12AGB-K6DNA1A",
    href: "#",
    imageSrc:
      "https://s13emagst.akamaized.net/products/51341/51340887/images/res_3e66bc9d6cc52e08893e83a35a3a34c6.jpg?width=720&height=720&hash=27943222B1A3109C842327FF1C6C6645",
    imageAlt: "Вътрешно тяло снимка",
    price: "1.079,00 лв.",
    color: "Бял",
  },
  {
    id: 1,
    name: "Инверторен климатик GREE GWH12AGB-K6DNA1A",
    href: "#",
    imageSrc:
      "https://s13emagst.akamaized.net/products/51341/51340887/images/res_3e66bc9d6cc52e08893e83a35a3a34c6.jpg?width=720&height=720&hash=27943222B1A3109C842327FF1C6C6645",
    imageAlt: "Вътрешно тяло снимка",
    price: "1.079,00 лв.",
    color: "Бял",
  },
];

export default function AirConProducts() {
  return (
    <div className="bg-white">
      {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        Customers also purchased
      </h2> */}

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <img
              alt={product.imageAlt}
              src={product.imageSrc}
              className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
            />
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
              </div>
              <p className="text-sm font-medium text-gray-900">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
