// import './style.css'
import typescriptLogo from './typescript.svg'
import { Wrapper, StyledButton } from './main.styles'
import { Grid,Badge,LinearProgress,Drawer } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <Wrapper>
    <Drawer anchor='right' onClose={} >
      <h1>Hello my world</h1>
    </Drawer>
  </Wrapper>
`
