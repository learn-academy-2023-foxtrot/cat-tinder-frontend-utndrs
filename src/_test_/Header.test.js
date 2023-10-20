import { render, screen} from "@testing-library/react"
import Header from "../components/Header"
import { BrowserRouter } from "react-router-dom"


describe("<Header />", () => {
    it("renders without crashing", () => {
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      )
      screen.debug()
      screen.logTestingPlaygroundURL()
      const headerInfo = screen.getByRole('link', {
        name: /logo welcome to utndr/i
      })
      expect(headerInfo).toBeInTheDocument()
    })
  })