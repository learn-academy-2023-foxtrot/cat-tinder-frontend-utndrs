import { render, screen} from "@testing-library/react"
import NotFound from "../pages/NotFound"
import { BrowserRouter } from "react-router-dom"


describe("<NotFound />", () => {
    it("renders without crashing", () => {
     
      render(
        <BrowserRouter>
          <NotFound />
        </BrowserRouter>
      )
      screen.debug()
      screen.logTestingPlaygroundURL()
      const notFoundInfo = screen.getByTestId("not-found-test")
      expect(notFoundInfo).toBeInTheDocument()
    })
  })