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
    mockUtndrs.forEach((utndr) => {
      const altTxt = screen.getAllByAltText(/profile picture for/i)
      expect(altTxt[0]).toBeInTheDocument()
      const utndrImage = screen.getByRole('img', { name: /profile picture for Paularts/i })
      expect(utndrImage).toHaveAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHwVtSfpsLl0FjNkg81wVr1rLW_RnbOVPnXA&usqp=CAU');
      expect(utndrImage).toHaveAttribute('alt', 'profile picture for Paularts')
    })
  })
})