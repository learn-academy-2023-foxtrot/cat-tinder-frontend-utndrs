import { render, screen} from "@testing-library/react"
import UtndrNew from "../pages/UtndrNew"
import { BrowserRouter } from "react-router-dom"


describe("<UtndrNew />", () => {
    it("renders ", () => {
      render(
        <BrowserRouter>
          <UtndrNew />
        </BrowserRouter>
      )
      const newInfo =screen.getByRole('heading', {
        name: /new utndr/i
      })
      expect(newInfo).toHaveTextContent(/new utndr/i)
    })
  })