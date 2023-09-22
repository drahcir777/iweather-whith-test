import { CityProps } from "@services/getCityByNameService";
import { fireEvent, render, screen } from "@testing-library/react-native";
import { SelectList } from ".";

describe("Component: SelectList", () => {
  it("deve retornar os detalhes da cidade selecionada", () => {
    const data: CityProps[] = [
      { id: "1", name: "Campinas", latitude: 123, longitude: 3456 },
      { id: "2", name: "Goiania", latitude: 124, longitude: 41241 },
    ];
    const {} = render(
      <SelectList data={data} onChange={() => {}} onPress={() => {}} />
    );

    const selectedCity = screen.getByText(/Campinas/i);

    fireEvent.press(selectedCity);
  });
});
