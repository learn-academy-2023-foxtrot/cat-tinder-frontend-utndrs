import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import UtndrEdit from "../pages/UtndrEdit";
import mockUtndrs from "../mockUtndr";

describe("<UtndrEdit />", () => {
    it("renders name", () => {
        render(
            <MemoryRouter initialEntries={["/utndredit/1"]}>
              <Routes>
                <Route path="/utndredit/:id" element= {<UtndrEdit utndrs={mockUtndrs}/>}/>
              </Routes>
            </MemoryRouter>
        )
        const utndrEdit = screen.getByRole('heading', {
            name: /edit utndr/i
          })
        expect(utndrEdit).toHaveTextContent(/edit utndr/i)
    })
})
