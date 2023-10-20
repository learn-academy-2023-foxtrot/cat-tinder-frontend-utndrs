import { render, screen} from "@testing-library/react"
import Footer from "../components/Footer"
import { BrowserRouter } from "react-router-dom"


describe("<Footer />", () => {
    it("renders without crashing", () => {
      render(
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
      )
      const footerInfo = screen.getByText(/© 2023 aleja and roniel/i)
      expect(footerInfo).toBeInTheDocument()
    })
  })