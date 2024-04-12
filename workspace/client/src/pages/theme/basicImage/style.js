import styled,{css} from "styled-components";


const variantCSS = {
  black : css`
      background-color: ${({theme}) => theme.PALLETE.background["black"]};
  `
}

const shapeCSS = {

  default : css``,
  small : css`
      border-radius: 10px;
      box-shadow: 5px 5px 5px gray;
  `
}

const sizeCSS = {

  small : css`
      width: 250px;
      height: 250px;
      padding: 10px;
  `,
  medium : css`
      width: 300px;
      height: 250px;
      padding: 10px;
  `,
  full : css`
      width: 500px;
      /* aspect-ratio: 8/1; */
      height: 250px;
      padding: 10px;
  `,
}

const paddingCSS = {

  default : css``,
  small : css`
      padding: 10px 10px;
  `
}
const BasicImg = styled.div`

    cursor: pointer;
    ${({variant}) => variantCSS[variant]}
    ${({shape}) => shapeCSS[shape]}
    ${({size}) => sizeCSS[size]}
    ${({padding}) => paddingCSS[padding]}

`

export default BasicImg;