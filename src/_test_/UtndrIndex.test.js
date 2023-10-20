import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";

import UtndrIndex from "../pages/UtndrIndex";
import mockUtndrs from "../mockUtndr";

describe('<UtndrIndex />', () => {
  it('has an image', () => {
    render(
      <BrowserRouter>
        <UtndrIndex utndrs={mockUtndrs} />
      </BrowserRouter>
    )
    // screen.debug()
    screen.logTestingPlaygroundURL()
    mockUtndrs.forEach((utndr) => {
      const altTxt = screen.getAllByAltText(/profile picture for/i)
    //   screen.debug(altTxt[0])
      expect(altTxt[0]).toBeInTheDocument()
      // query an image
      const utndrImage = screen.getByRole('img', { name: /profile picture for Paularts/i })
      // assert
      expect(utndrImage).toHaveAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHwVtSfpsLl0FjNkg81wVr1rLW_RnbOVPnXA&usqp=CAU');
      expect(utndrImage).toHaveAttribute('alt', 'profile picture for Paularts')
    })
  })
})