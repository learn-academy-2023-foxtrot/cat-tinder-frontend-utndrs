import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import UtndrShow from "../pages/UtndrShow";
import mockUtndrs from "../mockUtndr";

describe("<UtndrShow />", () => {
    it("renders name", () => {
        render(
            <MemoryRouter initialEntries={["/utndrshow/1"]}>
              <Routes>
                <Route path="/utndrshow/:id" element= {<UtndrShow utndrs={mockUtndrs}/>}/>
              </Routes>
            </MemoryRouter>
        )
        screen.logTestingPlaygroundURL()

        const utndrName = screen.getByRole('heading', {
          name: /utndr: paularts/i
        })
        expect(utndrName).toHaveTextContent(/utndr: paularts/i)
    })
})

 