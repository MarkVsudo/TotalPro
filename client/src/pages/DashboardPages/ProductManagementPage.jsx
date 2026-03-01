import { useState } from "react";
import Dropdown from "../../components/shared/Dropdown";
import AddProductForm from "../../components/DashboardPageComponents/AddProductForm";

const productTypes = [
  { name: "Инверторни климатици", value: "invertorni_klimatici" },
  {
    name: "Хиперинверторни климатици",
    value: "hiperinvertorni_klimatici",
  },
  { name: "Подови климатици", value: "podovi_klimatici" },
  { name: "Мултисплит системи", value: "multisplit_klimatici" },
  { name: "Колонни системи", value: "kolonni_sistemi" },
  { name: "Касетъчни климатици", value: "kasetachni_klimatici" },
  { name: "Аксесоари за монтаж", value: "aksesoari_za_montazh" },
];

const ProductManagementPage = () => {
  const [selected, setSelected] = useState(productTypes[0]);

  return (
    <div>
      <div className="flex flex-col px-5 py-6 bg-white shadow-xl rounded-xl">
        <h1 className="text-xl font-semibold">Добавяне на продукт</h1>

        <Dropdown
          label="Вид продукт"
          options={productTypes.map((p) => p.name)}
          value={selected.name}
          onChange={(name) => {
            const matched = productTypes.find((p) => p.name === name);
            setSelected(matched);
          }}
          required
        />

        <div className="mt-4">
          <AddProductForm categoryValue={selected.value} />
        </div>
      </div>
    </div>
  );
};

export default ProductManagementPage;
