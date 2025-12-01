import React, { useState } from "react";
import Dropdown from "../../components/shared/Dropdown";

import ColumnSystems from "../../components/DashboardPageComponents/AddProductForms/ColumnSystems";
import MultiSplitSystems from "../../components/DashboardPageComponents/AddProductForms/MultiSplitSystems";
import FloorAirConditioners from "../../components/DashboardPageComponents/AddProductForms/FloorAirConditioners";
import InverterAirConditioners from "../../components/DashboardPageComponents/AddProductForms/InverterAirConditioners";
import CassetteAirConditioners from "../../components/DashboardPageComponents/AddProductForms/CassetteAirConditioners";
import InstallationAccessories from "../../components/DashboardPageComponents/AddProductForms/InstallationAccessories";
import HyperInverterAirConditioners from "../../components/DashboardPageComponents/AddProductForms/HyperInverterAirConditioners";

const productTypes = [
  { id: 1, name: "Инверторни климатици", form: <InverterAirConditioners /> },
  {
    id: 2,
    name: "Хиперинверторни климатици",
    form: <HyperInverterAirConditioners />,
  },
  { id: 3, name: "Подови климатици", form: <FloorAirConditioners /> },
  { id: 4, name: "Мултисплит системи", form: <MultiSplitSystems /> },
  { id: 5, name: "Колонни системи", form: <ColumnSystems /> },
  { id: 6, name: "Касетъчни климатици", form: <CassetteAirConditioners /> },
  { id: 7, name: "Аксесоари за монтаж", form: <InstallationAccessories /> },
];

const ProductManagementPage = () => {
  const [selected, setSelected] = useState(productTypes[0]);

  return (
    <div>
      <div className="flex flex-col px-5 py-6 bg-white shadow-xl rounded-xl">
        <h1 className="text-xl font-semibold">Добавяне на продукт</h1>

        {/* Use your reusable Dropdown */}
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

        {/* Render form */}
        <div className="mt-4">{selected.form}</div>
      </div>
    </div>
  );
};

export default ProductManagementPage;
